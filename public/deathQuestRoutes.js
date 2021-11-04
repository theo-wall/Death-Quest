const deathQuestGameFunctions = require('./deathQuestGameFunctions')

const path = require('path')
const express = require('express')
const router = express.Router()

// let player = []

let playerId

// 
// starting game screen
// 

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/html/index.html'))
  })

router.get('/displayInventory', async (req, res) => {
    let item1 = await deathQuestGameFunctions.inventoryFind(playerId,'item1')
    let item2 = await deathQuestGameFunctions.inventoryFind(playerId,'item2')
    let location = await deathQuestGameFunctions.inventoryFind(playerId, 'location')
    let item1Color = deathQuestGameFunctions.colorizer(item1,'ruby')
    let item2Color = deathQuestGameFunctions.colorizer(item2,'key')

    res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><script src="../deathQuestRoutes.js"></script><title>Death Quest</title><link rel="stylesheet" type="text/css" href="/styles.css" /><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=DotGothic16&family=MedievalSharp&display=swap"rel="stylesheet"></head>
  <body>
    <div>
      <p id="flavour">
        You look in your pockets and find: 
        <br/> 
        ${item1 ? item1Color : 'Pocket Lint'}
        <br/>
        ${item2 ? item2Color : 'Nail Clippings'}
      </p>
    </div>

    <nav>
      <ul>
        <li id='choiceList'>
          <a href="http://Localhost:3000/${location}">Carry On</a>
        </li>
      </ul>
    </nav>

  </body>

</html>
`)
  })

router.get('/startGame', async (req, res) => {  
    playerId = await deathQuestGameFunctions.newPlayer()
    res.sendFile(path.join(__dirname, '/html/startGame.html'))
})

router.get('/resetGame', async (req, res) => {
    playerId = await deathQuestGameFunctions.newPlayer()
    res.sendFile(path.join(__dirname, '/html/resetGame.html'))
})

router.get('/start1a', async (req, res) => {   
    deathQuestGameFunctions.updatePlayer(playerId, {location: 'start1'})
    res.sendFile(path.join(__dirname, '/html/start1a.html'))
})

router.get('/start1b', async (req, res) => {
    let toolPickUp = parseInt(req.query.tool)

    deathQuestGameFunctions.updatePlayer(playerId, { tool: deathQuestGameFunctions.giveTool(toolPickUp) })

    res.sendFile(path.join(__dirname, '/html/start1b.html'))
})

router.get('/start1', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(playerId, { location: 'start1' })
    res.sendFile(path.join(__dirname, '/html/start1.html'))
})


router.get('/caves2', async (req, res) => {
    let darkCheck = parseInt(req.query.darkCheck) 
    deathQuestGameFunctions.updatePlayer(playerId, { location: 'caves2' })

    if (darkCheck === 1) {
        res.sendFile(path.join(__dirname, '/html/darkWarningStart.html'))
    } 
    else if (darkCheck === 2) {
        if (await deathQuestGameFunctions.inventoryFind(playerId,'tool') === 'Torch') {
            res.sendFile(path.join(__dirname, '/html/caves2.html'))
        } 
        else {
            res.sendFile(path.join(__dirname, '/html/caves2Death.html'))
        } 
    }
    else {
        res.sendFile(path.join(__dirname, '/html/caves2.html'))
    }
}) 

router.get('/windingPath3', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(playerId, { location: 'windingPath3' })
    let darkCheck = parseInt(req.query.darkCheck) 
    
    if (darkCheck === 1) {
        res.sendFile(path.join(__dirname, '/html/darkWarningPuddles.html'))
    }
    else if (darkCheck === 2) {
        if (await deathQuestGameFunctions.inventoryFind(playerId, 'tool') === 'Torch') {
            res.sendFile(path.join(__dirname, '/html/windingPath3.html'))
        }
        else {
            res.sendFile(path.join(__dirname, '/html/caves2Death.html'))
        }
    }
    else {
        res.sendFile(path.join(__dirname, '/html/windingPath3.html'))
    }
}) 

router.get('/crypt4', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(playerId, { location: 'crypt4' })
    
    if (await deathQuestGameFunctions.inventoryFind(playerId, 'event1') === 'necroDoor') {
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
        deathQuestGameFunctions.updatePlayer(playerId, { item1: 'Ruby', event1: 'necroDoor' })
        res.sendFile(path.join(__dirname, '/html/necromancerGame13Win.html'))
    }
})    

router.get('/swamp5', async (req, res) => {
    let fallCheck = parseInt(req.query.fallCheck) 

    if (fallCheck === 1 && (await deathQuestGameFunctions.inventoryFind(playerId,'location')) === 'start1') {
        res.sendFile(path.join(__dirname, '/html/fallWarningStart.html'))
    } 
    else if (fallCheck === 1 && (await deathQuestGameFunctions.inventoryFind(playerId, 'location')) === 'slimePuddles6') {
        res.sendFile(path.join(__dirname, '/html/fallWarningPuddles.html'))
    }
    else if (fallCheck === 2) { 

        deathQuestGameFunctions.updatePlayer(playerId, { location: 'swamp5' })
        let slipCheck = deathQuestGameFunctions.generateRandNum(10)

        if (slipCheck <= 6) {
            res.sendFile(path.join(__dirname, '/html/swamp5.html')) 
                } 
        else if (slipCheck > 6) {
            res.sendFile(path.join(__dirname, '/html/swamp5Slip.html')) 
        }
    }
    else {
        res.sendFile(path.join(__dirname, '/html/swamp5.html'))
    }
}) 

router.get('/slimePuddles6', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(playerId, { location: 'slimePuddles6' })
    
    if (await deathQuestGameFunctions.inventoryFind(playerId, 'event2') === 'slimeBridge') {
        res.sendFile(path.join(__dirname, '/html/slimePuddles6Down.html'));          
    } 
    else if (await deathQuestGameFunctions.inventoryFind(playerId, 'tool') === 'Bow') {
        res.sendFile(path.join(__dirname, '/html/slimePuddles6Bow.html')); 
        deathQuestGameFunctions.updatePlayer(playerId, { event2: 'slimeBridge' })
    } 
    else if (await deathQuestGameFunctions.inventoryFind(playerId, 'event2') === 'noEvent') {
        res.sendFile(path.join(__dirname, '/html/slimePuddles6up.html')); 
    }

}) 

router.get('/witchHut7', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(playerId, { location: 'witchHut7' })
    if (await deathQuestGameFunctions.inventoryFind(playerId, 'event3') === 'witchHutMelt') {
        res.sendFile(path.join(__dirname, '/html/witchHut7Melt.html')); 
    }
    else if (await deathQuestGameFunctions.inventoryFind(playerId, 'item1') === 'Ruby') {
        res.sendFile(path.join(__dirname, '/html/witchHut7Ruby.html')); 
    } 
    else if (await deathQuestGameFunctions.inventoryFind(playerId, 'item1') === 'noItem1'){
        res.sendFile(path.join(__dirname, '/html/witchHut7NoRuby.html')); 
    }
}) 

router.get('/cliffSide8', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(playerId, { location: 'cliffSide8' })
    res.sendFile(path.join(__dirname, '/html/cliffSide8.html')); 
}) 

router.get('/bridgePlateau9', async (req, res) => {
    let wolfCheck = parseInt(req.query.wolfCheck) 

    if ((wolfCheck === 1) && ((await deathQuestGameFunctions.inventoryFind(playerId, 'location')) === 'cliffSide8')) {
        res.sendFile(path.join(__dirname, '/html/wolfWarningCliffSide.html'));
    }
    else if ((wolfCheck === 1) && ((await deathQuestGameFunctions.inventoryFind(playerId, 'location')) === 'slimePuddles6')) {
        res.sendFile(path.join(__dirname, '/html/wolfWarningSlimePuddles.html'));
    }
    else { 
        deathQuestGameFunctions.updatePlayer(playerId, { location: 'bridgePlateau9' })

        if ((await deathQuestGameFunctions.inventoryFind(playerId, 'event4')) === 'drawBridge') {
            res.sendFile(path.join(__dirname, '/html/bridgePlateau9Down.html')); 
        } 
        else if ((await deathQuestGameFunctions.inventoryFind(playerId, 'tool')) === 'Sword') {
            res.sendFile(path.join(__dirname, '/html/bridgePlateau9Sword.html')); 
            deathQuestGameFunctions.updatePlayer(playerId, { event4: 'drawBridge' })
        } 
        else if ((await deathQuestGameFunctions.inventoryFind(playerId, 'tool')) === 'Bow') {
            res.sendFile(path.join(__dirname, '/html/bridgePlateau9Bow.html')); 
        }
        else if ((await deathQuestGameFunctions.inventoryFind(playerId, 'tool')) === 'Torch') {
            res.sendFile(path.join(__dirname, '/html/bridgePlateau9Torch.html')); 
        }
    }
}) 

router.get('/castle10', async (req, res) => {
    let witchCheck = parseInt(req.query.witchCheck) 

    if ((await deathQuestGameFunctions.inventoryFind(playerId, 'event3')) !== 'witchHutMelt') {
        if (!witchCheck) {
            res.sendFile(path.join(__dirname, '/html/turnBackCastle.html')); 
        } 
        else if (witchCheck === 1) {
            res.sendFile(path.join(__dirname, '/html/castleDeath.html')); 
        }
    } 
    else {
        deathQuestGameFunctions.updatePlayer(playerId, { location: 'castle10' })
        res.sendFile(path.join(__dirname, '/html/castle10.html'));
    }
       
}) 

router.get('/bigBaddie11', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(playerId, { location: 'bigBaddie11' })

    if ((await deathQuestGameFunctions.inventoryFind(playerId, 'item2')) === 'Golden Key') {
        res.sendFile(path.join(__dirname, '/html/bigBaddie11Key.html'));
    }
    else {
        res.sendFile(path.join(__dirname, '/html/bigBaddie11NoKey.html'));
    }
}) 

router.get('/deathRoom12', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(playerId, { location: 'start1' })
    res.sendFile(path.join(__dirname, '/html/deathRoom12.html'));
}) 

router.get('/witchGive', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(playerId, { location: 'slimePuddles6', event3: 'witchHutMelt', item2: 'Golden Key' })
    res.sendFile(path.join(__dirname, '/html/witchGive.html'));
}) 

router.get('/witchDie', async (req, res) => {
    deathQuestGameFunctions.updatePlayer(playerId, { location: 'start1' })
    res.sendFile(path.join(__dirname, '/html/witchDie.html'));
}) 

router.get('/endGame', async (req, res) => {
    deathQuestGameFunctions.deletePlayerById(playerId)
    res.sendFile(path.join(__dirname, '/html/endGame.html'));
})

module.exports = router

