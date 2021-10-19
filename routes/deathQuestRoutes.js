const deathQuestGameFunctions = require('../model/deathQuestGameFunctions')

const express = require('express')
const router = express.Router()

let rooms = ['/start1', '/caves2', '/windingPath3', '/crypt4', '/swamp5', '/slimePuddles6', '/witchHut7', '/cliffSide8', '/bridgePlateau9', '/castle10', '/bigBaddie11']

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
    console.log(player)
    res.send(`You step out of the ring and you see a ${player[1]} laying on the ground before you before you, you pick it up. You are in start1 you see three paths you can go down:
    ${rooms[1]} 
    ${rooms[4]} 
    ${rooms[7]}
    `)
    player = deathQuestGameFunctions.roomChanger(player,1)
})




router.get('/start1', (req, res) => {
    player[1] = toolIndex[Math.floor(Math.random() * toolIndex.length())]
    res.send(`You are in start1 you see three paths you can go down:
    ${rooms[1]} 
    ${rooms[4]} 
    ${rooms[7]}
    `)
    player = deathQuestGameFunctions.roomChanger(player, 1)
})

router.get('/caves2', (req, res) => {
    res.send(`You are in caves2 you see two paths you can go down:
    ${rooms[0]} 
    ${rooms[2]} 
    `)
    player = deathQuestGameFunctions.roomChanger(player, 2)
}) 

router.get('/windingPath3', (req, res) => {
    res.send(`You are in windingPath3 you see three paths you can go down:
    ${rooms[1]}
    ${rooms[5]}
    ${rooms[3]}
    `)
    player = deathQuestGameFunctions.roomChanger(player, 3)
}) 

router.get('/crypt4', (req, res) => {
    res.send(`You are in crypt4 you see one path you can go down:
    ${rooms[2]}
    `)
    player = deathQuestGameFunctions.roomChanger(player, 4)
}) 

router.get('/swamp5', (req, res) => {
    res.send(`You are in swamp5 you see two paths you can go down:
    ${rooms[0]}
    ${rooms[5]}
    `)
    player = deathQuestGameFunctions.roomChanger(player, 5)
}) 

router.get('/slimePuddles6', (req, res) => {
    res.send(`You are in slimePuddles6 you see four paths you can go down:
    ${rooms[4]}
    ${rooms[8]}
    ${rooms[6]}
    ${rooms[2]}
    `)
    player = deathQuestGameFunctions.roomChanger(player, 6)
}) 

router.get('/witchHut7', (req, res) => {
    res.send(`You are in witchHut7 you see one path you can go down:
    ${rooms[5]}
    `)
    player = deathQuestGameFunctions.roomChanger(player, 7)
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

router.get('/3', (req, res) => {

}) 

router.get('/4', (req, res) => {
    res.json(deathQuestGameFunctions.listRooms())
})

router.get('/move', (req, res) => {
    console.log('move is called with ', req.query)
    let room = req.query.room 
    deathQuestGameFunctions.move(room)
    res.send('You have moved to the ' + room + '\n')
})

router.get('/search', (req, res) => {
    let message
    let found = deathQuestGameFunctions.search()
    if (found) {
        message = 'You just found the hider!'
    }
    else {
       message = 'You search and find no-one!'
    }
    res.send(message + '\n')
})




module.exports = router
