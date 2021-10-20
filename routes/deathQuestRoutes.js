const deathQuestGameFunctions = require('../model/deathQuestGameFunctions')

const express = require('express')
const { generateRandNum } = require('../model/deathQuestGameFunctions')
const router = express.Router()

let rooms = ['/start1', '/caves2', '/windingPath3', '/crypt4', '/swamp5', '/slimePuddles6', '/witchHut7', '/cliffSide8', '/bridgePlateau9', '/castle10', '/bigBaddie11','/deathRoom12', '/necromancerGame13']

let player = []


router.get('/', (req, res) => {

    let instructions =
        `
        Welcome to Death Quest!
    You are trying to kill the big baddie! 
    try not to die! but it might not be as bad as you think... hehehe
    "/startGame" to continue
    `
    res.send(instructions)
})

router.get('/startGame', (req, res) => {
    player = deathQuestGameFunctions.startGame()
    res.send('You become consious in a world of darkness and pain do you?\n 1)"/start1a" Open your eyes.\n 2)"/resetGame" Drift off into sleep.')
    console.log(player)
})

router.get('/resetGame', (req, res) => {
    player = deathQuestGameFunctions.resetGame()
    res.send('You close your eyes and fade away in one last act of defiance')
    console.log(player)
})

router.get('/start1a', (req, res) => {    
      
    player[1] = deathQuestGameFunctions.toolPicker()
    res.send(`You step out of the ring and you see a ${player[1]} laying on the ground before you before you, you pick it up. You are in start1 you see three paths you can go down:
    ${rooms[1]} 
    ${rooms[4]} 
    ${rooms[7]}
    `)
    player = deathQuestGameFunctions.roomChanger(player,1)
})

router.get('/start1', (req, res) => {
    res.send(`You are in start1 you see three paths you can go down:
    ${rooms[1]} 
    ${rooms[4]} 
    ${rooms[7]}
    `)
    player = deathQuestGameFunctions.roomChanger(player, 1)
})

router.get('/caves2', (req, res) => {
    if (player[1] === 'Torch') {
        res.send(`You are in caves2, you see two paths you can go down your torch lights the way ahead of you:
        ${rooms[0]} 
        ${rooms[2]} 
        `)
        player = deathQuestGameFunctions.roomChanger(player, 2)
    } 
    else {
        res.send(`You are in ${player[0]} cant see anything around you, suddenly your foot is falling, you're falling, death comes siftly:
        ${rooms[11]} 
        `)
    }
}) 

router.get('/windingPath3', (req, res) => {
    if (player[1] === 'Torch') {
        res.send(`You are in windingPath3, your torch lights the way you see three paths you can go down:
        ${rooms[1]}
        ${rooms[5]}
        ${rooms[3]}
        `)
        player = deathQuestGameFunctions.roomChanger(player, 3)
    }
    else {
        res.send(`You are in ${player[0]} cant see anything around you, suddenly your foot is falling, you're falling, death comes siftly:
        ${rooms[11]} 
        `)
    }

}) 

router.get('/crypt4', (req, res) => {
    if (player[4][0] === 'necroDoor') {
        res.send(`
            You are in crypt4, the necromancer is no where to be found, I guess he took that personally. travel back to 
            ${rooms[2]} and continue your adventure.
        `)
    }
    else {
        res.send(`You are in crypt4, In front of you is a necromancer holding three cups, he asks you if you would like to play a game
        a wager of your life for a precious ruby. Or you can run away like a sissy:
        ${rooms[2]}
        ${rooms[12]}
        `)
        player = deathQuestGameFunctions.roomChanger(player, 4)
    }
})

router.get('/necromancerGame13', (req, res) => {
    
    let winGame = deathQuestGameFunctions.generateRandNum(10)
    console.log(winGame)

    if (winGame <= 5) {
        res.send(`You won the necromancers game! continue on with your adventure "/crypt4"`)
        player = deathQuestGameFunctions.giveItem(player,1)
        player = deathQuestGameFunctions.eventPlacer(player,1)

    }
    else if (winGame > 5) {
        res.send(`You lost the necromancers game, your soul is forfeit "/deathRoom12"`)
    } 
})

router.get('/swamp5', (req, res) => {
    
    let slipCheck = deathQuestGameFunctions.generateRandNum(10)

    if (slipCheck <= 5) {
        res.send(`You are in swamp5, you make your way carefully over the slimey boardwalk, you see two paths you can go down:
        ${rooms[0]}
        ${rooms[5]}
        `)
        player = deathQuestGameFunctions.roomChanger(player, 5)
    } 
    else if (slipCheck > 5) {
        res.send(`You start to make your way out across the boards, YOU SLIP, you go headfirst into the swamp and drown very inconveniently "/deathRoom12"`)
    }
}) 

router.get('/slimePuddles6', (req, res) => {
    
    if (player[1] === 'Bow') {
        res.send(`You are in slimePuddles6, you follow the board walk into the center of the vast swamp. 
        you see four paths travelling away from you but one has a draw bridge that is raised blocking your way. 
        You deftly shoot the mechanism with your bow and the bridge comes crashing down. you can go down:
        ${rooms[4]}
        ${rooms[8]}
        ${rooms[6]}
        ${rooms[2]}
        `)
        player = deathQuestGameFunctions.eventPlacer(player, 2)
        player = deathQuestGameFunctions.roomChanger(player, 6)
    } else if (player[4][1] === 'slimeBride') {
        res.send(`You are in slimePuddles6, ou follow the board walk into the center of the vast swamp. 
        you see four paths travelling away from you but one has a draw bridge its mechanism has been pierced by your arrow 
        and the drawbridge is down. you can go down:
        ${rooms[4]}
        ${rooms[8]}
        ${rooms[6]}
        ${rooms[2]}
        `)
    } else if (player[4][1] === 'noEvent') {
        res.send(`You are in slimePuddles6, you follow the board walk into the center of the vast swamp. 
        you see four paths travelling away from you but one has a draw bridge that is raised blocking your way.
        you can go down:
        ${rooms[4]}
        ${rooms[8]}
        ${rooms[2]}
        `)
    }
}) 

router.get('/witchHut7', (req, res) => {

    if (player[2] === 'Ruby') {

        res.send(`You are in witchHut7 You see a small hut in the distance, as you walk up to the door a strong scent of sulfer
        hits your nose, you wretch but continue on. Right as you get to the door it slowly swings open and you enter. Inside you see
        a witch stirring a large caldron, she says to you "My my my what a tastey specimen, what are you doing in my humble abode?".
        Your legs begin to walk over to her, you are unable to stop yourself. "Aaaaah whats this I'm smelling now? I think you have something
        of mine that the filthy necromancer stole from me, give it here yound lad": give it to her "/witchGive" say you are going to keep it "/witchDie"
        ${rooms[5]}
        `)
        player = deathQuestGameFunctions.roomChanger(player, 7)
    } else {
        res.send(`You are in witchHut7 You see a small hut in the distance, as you walk up to the door a strong scent of sulfer
        hits your nose, you wretch but continue on. Right as you get to the door it slowly swings open and you enter. Inside you see
        a witch stirring a large caldron, she says to you "My my my what a tastey specimen, what are you doing in my humble abode?". 
        Your legs begin to walk over to her, you are unable to stop yourself. She takes a looooong sniff and says more to herself, you'll go 
        great in the evening stew. You yell, unhand me you filthy devil, I'm out of here /witchDie`)
        player = deathQuestGameFunctions.roomChanger(player, 7)
    }
}) 

router.get('/cliffSide8', (req, res) => {
    res.send(`You are in cliffSide8 you see two paths you can go down:
    ${rooms[0]}
    ${rooms[8]}
    `)
    player = deathQuestGameFunctions.roomChanger(player, 8)
}) 

router.get('/bridgePlateau9', (req, res) => {
    res.send(`You are in bidgePlateau9 you see three paths you can go down:
    ${rooms[7]}
    ${rooms[9]}
    ${rooms[5]}
    `)
    player = deathQuestGameFunctions.roomChanger(player, 9)
}) 

router.get('/castle10', (req, res) => {
    res.send(`You are in castle10 you see two paths you can go down:
    ${rooms[8]}
    ${rooms[10]}
    `)
    player = deathQuestGameFunctions.roomChanger(player, 10)
}) 

router.get('/bigBaddie11', (req, res) => {
    res.send(`You are in bigBaddie11 you WIN, walk home down:
    ${rooms[9]}
    `)
    player = deathQuestGameFunctions.roomChanger(player, 11)
}) 

router.get('/deathRoom12', (req, res) => {
    res.send(`You are dead, start from the beginning:
    ${'start1a'}
    `)
    player = deathQuestGameFunctions.roomChanger(player, 1)
}) 

router.get('/witchGive', (req, res) => {
    res.send(`You hand her the gem and she eats it like a apple, she begins glowing red hot and the hut begins 
    to melt around you. You turn around and run for your life. /slimePuddles6
    `)
    player = deathQuestGameFunctions.eventPlacer(player, 3)
    player = deathQuestGameFunctions.roomChanger(player, 6)

}) 

router.get('/witchDie', (req, res) => {
    res.send(`she cackels and says "like you have any choice dear laddy", an unseen force compels you to give her the gem,
    you turn around and dive headfirst into the cauldron. Your death is long and unpleasant.
    ${'start1a'}
    `)
    player = deathQuestGameFunctions.roomChanger(player, 1)
}) 


router.get('/4', (req, res) => {
    res.json(deathQuestGameFunctions.listRooms())
})

module.exports = router
