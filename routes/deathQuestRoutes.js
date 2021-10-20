const deathQuestGameFunctions = require('../model/deathQuestGameFunctions')

const express = require('express')
const { generateRandNum } = require('../model/deathQuestGameFunctions')
const router = express.Router()

let rooms = ['/start1', '/caves2', '/windingPath3', '/crypt4', '/swamp5', '/slimePuddles6', '/witchHut7', '/cliffSide8', '/bridgePlateau9', '/castle10', '/bigBaddie11','/deathRoom12', '/necromancerGame13']

let player = []


router.get('/', (req, res) => {

    res.send(`\nWelcome to Death Quest!\nYou are trying to kill the big baddie!\ntry not to die! but it might not be as bad as you think...\nhehehe "/startGame" to continue\n`)
})

router.get('/startGame', (req, res) => {
    
    player = deathQuestGameFunctions.startGame()
    
    res.send('\nYou become consious in a world of darkness and pain do you?\n1)"/start1a" Open your eyes.\n2)"/resetGame" Drift off into sleep.\n')
    console.log(player)
})

router.get('/resetGame', (req, res) => {
  
    player = deathQuestGameFunctions.resetGame()
    
    res.send('\nYou close your eyes and fade away in one last act of defiance\n')
    console.log(player)
})

router.get('/start1a', (req, res) => {    
    player = deathQuestGameFunctions.roomChanger(player,1)
    
    res.send(`\nYou step out of the ring and you see a "Sword", a 'Bow', and a 'Torch' laying on the ground before you, you pick it one of them up. The other two fade away in a puff of smoke. You are in start1 you see three paths you can go down:\n${rooms[1]}\n${rooms[4]}\n${rooms[7]}\n`)

    let tool = parseInt(req.query.tool)
    console.log(tool)
    
    player[1] = deathQuestGameFunctions.giveTool(tool)
    
})

router.get('/start1', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(player, 1)

    res.send(`\nYou are in start1 you see three paths you can go down:\n${rooms[1]}\n${rooms[4]}\n${rooms[7]}\n`)

    

})

router.get('/caves2', (req, res) => {
   player = deathQuestGameFunctions.roomChanger(player, 2)

   if (player[1] === 'Torch') {
        res.send(`\nYou are in caves2, you see two paths you can go down your torch lights the way ahead of you:\n${rooms[0]}\n${rooms[2]}\n`) 
    } 
    else {
        res.send(`\nYou are in ${player[0]} cant see anything around you, suddenly your foot is falling, you're falling, death comes siftly:\n${rooms[11]}\n`)
    }
}) 

router.get('/windingPath3', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(player, 3)

    if (player[1] === 'Torch') {
        res.send(`\nYou are in windingPath3, your torch lights the way you see three paths you can go down:\n${rooms[1]}\n${rooms[5]}\n${rooms[3]}\n`)
           }
    else {
        res.send(`\nYou are in ${player[0]} cant see anything around you, suddenly your foot is falling, you're falling, death comes siftly:\n${rooms[11]}\n`)
    }

}) 

router.get('/crypt4', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(player, 4)
    
    if (player[4][0] === 'necroDoor') {
        res.send(`\nYou are in crypt4, the necromancer is no where to be found, I guess he took that personally. travel back to ${rooms[2]} and continue your adventure.\n`)
    }
    else {
        res.send(`\nYou are in crypt4, In front of you is a necromancer holding three cups, he asks you if you would like to play a game a wager of your life for a precious ruby. Or you can run away like a sissy:\n${rooms[2]}\n${rooms[12]}\n`)
    }
})

router.get('/necromancerGame13', (req, res) => {
   
    
    let winGame = deathQuestGameFunctions.generateRandNum(10)
    console.log(winGame)

    if (winGame <= 5) {
        res.send(`\nYou won the necromancers game! continue on with your adventure \n"/crypt4"\n`)
        player = deathQuestGameFunctions.giveItem(player,1)
        player = deathQuestGameFunctions.eventPlacer(player,1)
    }
    else if (winGame > 5) {
        res.send(`\nYou lost the necromancers game, your soul is forfeit \n"/deathRoom12"\n`)
    } 
})

router.get('/swamp5', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(player, 5)
    let slipCheck = deathQuestGameFunctions.generateRandNum(10)

    if (slipCheck <= 5) {
        res.send(`\nYou are in swamp5, you make your way carefully over the slimey boardwalk, you see two paths you can go down:\n${rooms[0]}\n${rooms[5]}\n`)
            } 
    else if (slipCheck > 5) {
        res.send(`\nYou start to make your way out across the boards, YOU SLIP, you go headfirst into the swamp and drown very inconveniently\n"/deathRoom12"\n`)
    }
}) 

router.get('/slimePuddles6', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(player, 6)

    if (player[1] === 'Bow') {
        
        res.send(`\nYou are in slimePuddles6, you follow the board walk into the center of the vast swamp. you see four paths travelling away from you but one has a draw bridge that is raised blocking your way. You deftly shoot the mechanism with your bow and the bridge comes crashing down. you can go down:\n${rooms[4]}\n${rooms[8]}\n${rooms[6]}\n${rooms[2]}`)
        
        player = deathQuestGameFunctions.eventPlacer(player, 2)
        
    } else if (player[4][1] === 'slimeBride') {
        res.send(`\nYou are in slimePuddles6, ou follow the board walk into the center of the vast swamp. you see four paths travelling away from you but one has a draw bridge its mechanism has been pierced by your arrow and the drawbridge is down. you can go down:\n${rooms[4]}\n${rooms[8]}\n${rooms[6]}\n${rooms[2]}\n`)
    } else if (player[4][1] === 'noEvent') {
        res.send(`\nYou are in slimePuddles6, you follow the board walk into the center of the vast swamp. you see four paths travelling away from you but one has a draw bridge that is raised blocking your way. you can go down:\n${rooms[4]}\n${rooms[8]}\n${rooms[2]}\n`)
    }
}) 

router.get('/witchHut7', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(player, 7)

    if (player[2] === 'Ruby') {

        res.send(`\nYou are in witchHut7 You see a small hut in the distance, as you walk up to the door a strong scent of sulfer hits your nose, you wretch but continue on. Right as you get to the door it slowly swings open and you enter. Inside you see a witch stirring a large caldron, she says to you "My my my what a tastey specimen, what are you doing in my humble abode?". Your legs begin to walk over to her, you are unable to stop yourself. "Aaaaah whats this I'm smelling now? I think you have something of mine that the filthy necromancer stole from me, give it here yound lad": give it to her "/witchGive" say you are going to keep it \n"/witchDie" \n${rooms[5]}\n`)
        
    } else {
        res.send(`\nYou are in witchHut7 You see a small hut in the distance, as you walk up to the door a strong scent of sulfer hits your nose, you wretch but continue on. Right as you get to the door it slowly swings open and you enter. Inside you see a witch stirring a large caldron, she says to you "My my my what a tastey specimen, what are you doing in my humble abode?". Your legs begin to walk over to her, you are unable to stop yourself. She takes a looooong sniff and says more to herself, you'll go great in the evening stew. You yell, unhand me you filthy devil, I'm out of here \n/witchDie\n`)
    }
}) 

router.get('/cliffSide8', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(player, 8)

    res.send(`\nYou are in cliffSide8 you see two paths you can go down:\n${rooms[0]}\n${rooms[8]}\n`)
}) 

router.get('/bridgePlateau9', (req, res) => {
   player = deathQuestGameFunctions.roomChanger(player, 9)

   res.send(`\nYou are in bidgePlateau9 you see three paths you can go down:\n${rooms[7]}\n${rooms[9]}\n${rooms[5]}\n`)
    
}) 

router.get('/castle10', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(player, 10)
    
    res.send(`\nYou are in castle10 you see two paths you can go down:\n${rooms[8]}\n${rooms[10]}\n`)
    
}) 

router.get('/bigBaddie11', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(player, 11)

    res.send(`\nYou are in bigBaddie11 you WIN, walk home down:\n${rooms[9]}\n`)
    
}) 

router.get('/deathRoom12', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(player, 1)

    res.send(`\nYou are dead, start from the beginning:\n${'start1a'}\n`)
    
}) 

router.get('/witchGive', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(player, 6)
    
    res.send(`\nYou hand her the gem and she eats it like a apple, she begins glowing red hot and the hut begins to melt around you. You turn around and run for your life. on your way past the table you see a shiny gold key, you grab it on your way out \n/slimePuddles6\n`)
    player = deathQuestGameFunctions.eventPlacer(player, 3)
    
    player = deathQuestGameFunctions.giveItem(player,2)

}) 

router.get('/witchDie', (req, res) => {
    player = deathQuestGameFunctions.roomChanger(player, 1)
    
    res.send(`She cackles and says "like you have any choice dear laddy", an unseen force compels you to give her the gem, you turn around and dive headfirst into the cauldron. Your death is long and unpleasant. \n${'start1a'}\n`)
    
}) 


router.get('/4', (req, res) => {
    res.json(deathQuestGameFunctions.listRooms())
})

module.exports = router
