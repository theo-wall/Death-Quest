const deathQuestGameFunctions = require('./deathQuestGameFunctions')

const path = require('path')
const express = require('express')
const { counter } = require('./deathQuestGameFunctions')
const router = express.Router()

// let player = []

let player

// 
// starting game screen
// 

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/html/index.html'))
  })

router.get('/startGame', async (req, res) => {  
    player = await deathQuestGameFunctions.newPlayer()
    res.sendFile(path.join(__dirname, '/html/startGame.html'))
})

router.get('/resetGame', (req, res) => {
    player = deathQuestGameFunctions.resetGame()
    res.sendFile(path.join(__dirname, '/html/resetGame.html'))
})

router.get('/start1a', async (req, res) => {   
    deathQuestGameFunctions.updatePlayer(player, {location: 'start1'})
    res.sendFile(path.join(__dirname, '/html/start1a.html'))
})

router.get('/start1b', async (req, res) => {
    let toolPickUp = parseInt(req.query.tool)

    deathQuestGameFunctions.updatePlayer(player, { tool: deathQuestGameFunctions.giveTool(toolPickUp) })

    res.sendFile(path.join(__dirname, '/html/start1b.html'))
})

router.get('/start1', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(player, { location: 'start1' })
    res.sendFile(path.join(__dirname, '/html/start1.html'))
})


router.get('/caves2', async (req, res) => {
    let darkCheck = parseInt(req.query.darkCheck) 
    deathQuestGameFunctions.updatePlayer(player, { location: 'caves2' })

    if (darkCheck === 1) {
        res.sendFile(path.join(__dirname, '/html/darkWarningStart.html'))
    } 
    else if (darkCheck === 2) {
        if (deathQuestGameFunctions.findInInventory(tool) === 'Torch') {
            res.sendFile(path.join(__dirname, '/html/caves2.html'))
        } 
        else {
            res.sendFile(path.join(__dirname, '/html/caves2Death.html'))
        } 
    }
}) 

router.get('/windingPath3', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(player, { location: 'windingPath3' })
    let darkCheck = parseInt(req.query.darkCheck) 
    
    if (darkCheck === 1) {
        res.sendFile(path.join(__dirname, '/html/darkWarningPuddles.html'))
    }
    else if (darkCheck === 2) {
        if (deathQuestGameFunctions.findInInventory(tool) === 'Torch') {
            res.sendFile(path.join(__dirname, '/html/windingPath3.html'))
        }
        else {
            res.sendFile(path.join(__dirname, '/html/caves2Death.html'))
        }
    }
}) 

router.get('/crypt4', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(player, { location: 'crypt4' })
    
    if (player.event1 === 'necroDoor') {
        res.sendFile(path.join(__dirname, '/html/crypt4NecroDoor.html'))
    }
    else {
        res.sendFile(path.join(__dirname, '/html/crypt4.html'))
    }
})

router.get('/necromancerGame13', async (req, res) => {
    let rubyCheck = parseInt(req.query.rubyCheck)
    
    if (rubyCheck === 0) {
        res.sendFile(path.join(__dirname, '/html/necromancerGame13.html'))
    }
    else if (rubyCheck === 1) {
        deathQuestGameFunctions.updatePlayer(player, { item1: 'Ruby', event1: 'necroDoor' })
        res.sendFile(path.join(__dirname, '/html/necromancerGame13Win.html'))
    }
    
    // document.addEventListener('DOMContentLoaded', function() {
    //     let cont = document.querySelectorAll('#cont')
    //     cont.addEventListener('click', function() {
    //         console.log('click')
    //     })
    // })



       
    
    // let winGame = deathQuestGameFunctions.generateRandNum(10)
    // console.log(winGame)

    // if (winGame <= 5) {
    //     res.sendFile(path.join(__dirname, '/html/necromancerGame13Win.html'));
    //     player = deathQuestGameFunctions.giveItem(1)
    //     player = deathQuestGameFunctions.eventPlacer(1)
    // }
    // else if (winGame > 5) {
    //     res.sendFile(path.join(__dirname, '/html/necromancerGame13Lose.html')); 
}) 
    

router.get('/swamp5', async (req, res) => {
    let fallCheck = parseInt(req.query.fallCheck) 

    if (fallCheck === 1 && player.location === 'start1') {
        res.sendFile(path.join(__dirname, '/html/fallWarningStart.html'));
    } 
    else if (fallCheck === 1 && player.location === 'slimePuddles6') {
        res.sendFile(path.join(__dirname, '/html/fallWarningPuddles.html'));
    }
    else if (fallCheck === 2) { 

        deathQuestGameFunctions.updatePlayer(player, { location: 'swamp5' })
        let slipCheck = deathQuestGameFunctions.generateRandNum(10)


        if (slipCheck <= 6) {
            res.sendFile(path.join(__dirname, '/html/swamp5.html')); 
                } 
        else if (slipCheck > 6) {
            res.sendFile(path.join(__dirname, '/html/swamp5Slip.html')); 
        }
    }
}) 

router.get('/slimePuddles6', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(player, { location: 'slimePuddles6' })
    
    if (player === 'slimeBridge') {
        res.sendFile(path.join(__dirname, '/html/slimePuddles6Down.html'));          
    } else if (player.tool === 'Bow') {
        res.sendFile(path.join(__dirname, '/html/slimePuddles6Bow.html')); 
        player = deathQuestGameFunctions.eventPlacer(2)
    } else if (player.event2 === 'noEvent') {
        res.sendFile(path.join(__dirname, '/html/slimePuddles6up.html')); 
    }
}) 

router.get('/witchHut7', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(player, { location: 'witchHut7' })
    if (player.event3 === 'witchHutMelt') {
        res.sendFile(path.join(__dirname, '/html/witchHut7Melt.html')); 
    }
    else if (player.item1 === 'Ruby') {
        res.sendFile(path.join(__dirname, '/html/witchHut7Ruby.html')); 
    } 
    else if (player.item1 === 'noItem1'){
        res.sendFile(path.join(__dirname, '/html/witchHut7NoRuby.html')); 
    }
}) 

router.get('/cliffSide8', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(player, { location: 'cliffSide8' })
    res.sendFile(path.join(__dirname, '/html/cliffSide8.html')); 
}) 

router.get('/bridgePlateau9', async (req, res) => {
    let wolfCheck = parseInt(req.query.wolfCheck) 
// 
// Make this work with async functions
// 
    if ((wolfCheck === 1) && (player.location === 'cliffSide8')) {
        res.sendFile(path.join(__dirname, '/html/wolfWarningCliffSide.html'));
    }
    else if ((wolfCheck === 1) && (player.location === 'slimePuddles6')) {
        res.sendFile(path.join(__dirname, '/html/wolfWarningSlimePuddles.html'));
    }
    else if (wolfCheck === 2) { 
        deathQuestGameFunctions.updatePlayer(player, { location: 'bridgePlateau9' })

        if (player.event4 === 'drawBridge') {
            res.sendFile(path.join(__dirname, '/html/bridgePlateau9Down.html')); 
        } 
        else if (player.tool === 'Sword') {
            res.sendFile(path.join(__dirname, '/html/bridgePlateau9Sword.html')); 
            deathQuestGameFunctions.updatePlayer(player, { event2: 'slimebridge' })
        } 
        else if (player.tool === 'Bow') {
            res.sendFile(path.join(__dirname, '/html/bridgePlateau9Bow.html')); 
        }
        else if (player.tool === 'Torch') {
            res.sendFile(path.join(__dirname, '/html/bridgePlateau9Torch.html')); 
        }
    }
}) 

router.get('/castle10', async (req, res) => {
    let witchCheck = parseInt(req.query.witchCheck) 

    if (player.event3 !== 'witchHutMelt') {
        if (!witchCheck) {
            res.sendFile(path.join(__dirname, '/html/turnBackCastle.html')); 
        } 
        else if (witchCheck === 1) {
            res.sendFile(path.join(__dirname, '/html/castleDeath.html')); 
        }
    } 
    else {
        deathQuestGameFunctions.updatePlayer(player, { location: 'castle10' })
        res.sendFile(path.join(__dirname, '/html/castle10.html'));
    }
       
}) 

router.get('/bigBaddie11', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(player, { location: 'bigBaddie11' })

    if (player.item2 === 'Golden Key') {
        res.sendFile(path.join(__dirname, '/html/bigBaddie11Key.html'));
    }
    else {
        res.sendFile(path.join(__dirname, '/html/bigBaddie11NoKey.html'));
    }
}) 

router.get('/deathRoom12', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(player, { location: 'start1' })
    res.sendFile(path.join(__dirname, '/html/deathRoom12.html'));
}) 

router.get('/witchGive', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(player, { location: 'start1', event3: 'witchHutMelt', item2: 'Golden Key' })
    res.sendFile(path.join(__dirname, '/html/witchGive.html'));
}) 

router.get('/witchDie', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(player, { location: 'start1' })
    res.sendFile(path.join(__dirname, '/html/witchDie.html'));
}) 

router.get('/endGame', async (req, res) => {
    res.sendFile(path.join(__dirname, '/html/endGame.html'));
})

module.exports = router
