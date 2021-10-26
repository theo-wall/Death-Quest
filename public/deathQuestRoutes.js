const deathQuestGameFunctions = require('./deathQuestGameFunctions')

const path = require('path');
const express = require('express');
const { counter } = require('./deathQuestGameFunctions');
const router = express.Router()

// let player = []

let player = {
    location: '',
    tool: 'noTool',
    item1: 'noItem1',
    item2: 'noItem2',
    event1: 'noEvent',
    event2: 'noEvent',
    event3: 'noEvent',
    event4: 'noEvent'
}

// 
// starting game screen
// 

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/html/index.html'));
  })

router.get('/startGame', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/startGame.html'));
    player = deathQuestGameFunctions.startGame()
    
    console.log(player)
})

router.get('/resetGame', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/resetGame.html'));
    player = deathQuestGameFunctions.resetGame()
    
    console.log(player)
})

router.get('/start1a', (req, res) => {    
    res.sendFile(path.join(__dirname, '/html/start1a.html'));
    player = deathQuestGameFunctions.roomChanger(1)

})

router.get('/start1b', (req, res) => {
    
    res.sendFile(path.join(__dirname, '/html/start1b.html'));
    player = deathQuestGameFunctions.roomChanger(1)

    let toolPickUp = parseInt(req.query.tool)

    console.log(toolPickUp)
    player.tool = deathQuestGameFunctions.giveTool(toolPickUp)
})

router.get('/start1', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/start1.html'));
    player = deathQuestGameFunctions.roomChanger(1)

})


router.get('/caves2', (req, res) => {
    
    let darkCheck = parseInt(req.query.darkCheck) 
    player = deathQuestGameFunctions.roomChanger(2)

    if (darkCheck === 1) {
        res.sendFile(path.join(__dirname, '/html/darkWarningStart.html'));
    } 
    else if (darkCheck === 2) {
            if (player.tool === 'Torch') {
            res.sendFile(path.join(__dirname, '/html/caves2.html'));
        } 
        else {
            res.sendFile(path.join(__dirname, '/html/caves2Death.html'));
        } 
    }


}) 

router.get('/windingPath3', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(3)
    let darkCheck = parseInt(req.query.darkCheck) 
    
    if (darkCheck === 1) {
        res.sendFile(path.join(__dirname, '/html/darkWarningPuddles.html'));
    }
    else if (darkCheck === 2) {
        if (player.tool === 'Torch') {
            res.sendFile(path.join(__dirname, '/html/windingPath3.html'));
        }
        else {
            res.sendFile(path.join(__dirname, '/html/caves2Death.html'));
        }
    }
}) 

router.get('/crypt4', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(4)
    
    if (player.event1 === 'necroDoor') {
        res.sendFile(path.join(__dirname, '/html/crypt4NecroDoor.html'));
    }
    else {
        res.sendFile(path.join(__dirname, '/html/crypt4.html'));
    }
})

router.get('/necromancerGame13', (req, res) => {

   
    // if (counter() <= 5) {
    // res.sendFile(path.join(__dirname, '/html/necromancerGame13.html'));
    //     }
    //     else {
            
    //     }
    // let gameChoice = parseInt(req.query.tool)

    // console.log(gameChoice)
    
    // if (gameChoice === 0) {

    // }
    // else if (gameChoice === false) {

    // }
    // else if (gameChoice === true) {

    // }

    let winGame = deathQuestGameFunctions.generateRandNum(10)
    console.log(winGame)

    if (winGame <= 5) {
        res.sendFile(path.join(__dirname, '/html/necromancerGame13Win.html'));
        player = deathQuestGameFunctions.giveItem(1)
        player = deathQuestGameFunctions.eventPlacer(1)
    }
    else if (winGame > 5) {
        res.sendFile(path.join(__dirname, '/html/necromancerGame13Lose.html')); 
    } 
})

router.get('/swamp5', (req, res) => {
    let fallCheck = parseInt(req.query.fallCheck) 

    if (fallCheck === 1 && player.location === 'start1') {
        res.sendFile(path.join(__dirname, '/html/fallWarningStart.html'));
    } 
    else if (fallCheck === 1 && player.location === 'slimePuddles6') {
        res.sendFile(path.join(__dirname, '/html/fallWarningPuddles.html'));
    }
    else if (fallCheck === 2) { 

    player = deathQuestGameFunctions.roomChanger(5)
    let slipCheck = deathQuestGameFunctions.generateRandNum(10)


            if (slipCheck <= 9) {
            res.sendFile(path.join(__dirname, '/html/swamp5.html')); 
                } 
        else if (slipCheck > 9) {
            res.sendFile(path.join(__dirname, '/html/swamp5Slip.html')); 
        }
    }
}) 

router.get('/slimePuddles6', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(6)
    
    if (player === 'slimeBridge') {
        res.sendFile(path.join(__dirname, '/html/slimePuddles6Down.html'));          
    } else if (player.tool === 'Bow') {
        res.sendFile(path.join(__dirname, '/html/slimePuddles6Bow.html')); 
        player = deathQuestGameFunctions.eventPlacer(2)
    } else if (player.event2 === 'noEvent') {
        res.sendFile(path.join(__dirname, '/html/slimePuddles6up.html')); 
    }
}) 

router.get('/witchHut7', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(7)
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

router.get('/cliffSide8', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(8)

    res.sendFile(path.join(__dirname, '/html/cliffSide8.html')); 
}) 

router.get('/bridgePlateau9', (req, res) => {
    let wolfCheck = parseInt(req.query.wolfCheck) 

    if (wolfCheck === 1 && player.location === 'cliffSide8') {
        res.sendFile(path.join(__dirname, '/html/wolfWarningCliffSide.html'));
    }
    else if (wolfCheck === 1 && player.location === 'slimePuddles6') {
        res.sendFile(path.join(__dirname, '/html/wolfWarningPuddles.html'));
    }
    else if (wolfCheck === 2) { 

        player = deathQuestGameFunctions.roomChanger(9)

        if (player.event4 === 'drawBridge') {
            res.sendFile(path.join(__dirname, '/html/bridgePlateau9Down.html')); 
        } 
        else if (player.tool === 'Sword') {
            res.sendFile(path.join(__dirname, '/html/bridgePlateau9Sword.html')); 
            player = deathQuestGameFunctions.eventPlacer(4)
        } 
        else if (player.tool === 'Bow') {
            res.sendFile(path.join(__dirname, '/html/bridgePlateau9Bow.html')); 
        }
        else if (player.tool === 'Torch') {
            res.sendFile(path.join(__dirname, '/html/bridgePlateau9Torch.html')); 
        }
    }
}) 

router.get('/castle10', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(10)
    res.sendFile(path.join(__dirname, '/html/castle10.html')); 
    
}) 

router.get('/bigBaddie11', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(11)

    if (player.item2 === 'Golden Key') {
        res.sendFile(path.join(__dirname, '/html/bigBaddie11Key.html'));
    }
    else {
        res.sendFile(path.join(__dirname, '/html/bigBaddie11NoKey.html'));
    }
}) 

router.get('/deathRoom12', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(1)

    res.sendFile(path.join(__dirname, '/html/deathRoom12.html'));
    
}) 

router.get('/witchGive', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(6)
    
    res.sendFile(path.join(__dirname, '/html/witchGive.html'));

    player = deathQuestGameFunctions.eventPlacer(3)
    player = deathQuestGameFunctions.giveItem(2)

}) 

router.get('/witchDie', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(1)
    
    res.sendFile(path.join(__dirname, '/html/witchDie.html'));
}) 

router.get('/endGame', (req, res) => {
    res.sendFile(path.join(__dirname, '/html/endGame.html'));
})

module.exports = router
