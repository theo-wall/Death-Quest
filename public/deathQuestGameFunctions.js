const { ObjectId } = require('mongodb')
const db = require('../db')

let rooms = [
    'start1',
    'caves2',
    'windingPath3',
    'crypt4',
    'swamp5',
    'slimePuddles6',
    'witchHut7',
    'cliffSide8',
    'bridgePlateau9',
    'castle10',
    'bigBaddie11']

let player = {
    
    location: '',
    tool: 'noTool',
    item1: 'noItem1',
    item2: 'noItem2', 
    event1: 'noEvent', 
    event2: 'noEvent', 
    event3: 'noEvent', 
    event4: 'noEvent'
    // playerName: 'default'
}

let toolIndex = ['Sword', 'Bow', 'Torch','noTool']

// 
// Initializes game, resets all player tools and events
// 

function startGame() {
    
    player = {
        location: '',
        tool: 'noTool',
        item1: 'noItem1',
        item2: 'noItem2',
        event1: 'noEvent',
        event2: 'noEvent',
        event3: 'noEvent',
        event4: 'noEvent'
    }
        return player 
}

// 
//  Resets game, pretty much the same as startgame, might delete
// 

function resetGame() {
    
    player = {
        location: '',
        tool: 'noTool',
        item1: 'noItem1',
        item2: 'noItem2',
        event1: 'noEvent',
        event2: 'noEvent',
        event3: 'noEvent',
        event4: 'noEvent'
    }
    
}

let gameCount = 0

// 
//changes the room that the player is in, want to add cheat detection to it so you cant go to rooms that you dont have a path to. 
// 

function roomChanger(roomNumber) {

    console.log(rooms)
    
    player.location = rooms[roomNumber-1]
    console.log(player)
    return player
}

// 
// gives the player the specified tool: 0) Sword, 1) Bow, 2) Torch 
// 

function giveTool(index) {
    let tool = toolIndex[index]
    console.log(tool)
    return tool 
} 

// 
// Gives the player the specified Item: 1) Ruby, 2) Golden Key.
// I want to change this to be the same as give tool. 
// 

function giveItem (item) {
    if (item === 1) {
        player.item1 = 'Ruby'
        return player
    }
    else if (item === 2) {
        player.item2 = 'Golden Key'
        return player
    }
}

// 
// Places a event on the character array to remember if its happened or not
// 

function eventPlacer(event) {
    if (event === 1) {
        player.event1 = 'necroDoor'
        return player
    }
    else if (event === 2) {
        player.event2 = 'slimeBridge'
        return player
    }
    else if (event === 3) {
        player.event3 = 'witchHutMelt'
        return player
    }
    else if (event === 4) {
        player.event4 = 'drawBridge'
        return player
    }
}

// 
// Synce Functions for use with mongo DB
// 

async function newPlayer(playerName) {
    let newPlayer = {
        location: '',
        tool: 'noTool',
        item1: 'noItem1',
        item2: 'noItem2',
        event1: 'noEvent',
        event2: 'noEvent',
        event3: 'noEvent',
        event4: 'noEvent',
        name: playerName
    }
    console.log(newPlayer)

    let newPlayerId = await createPlayer(newPlayer)
    console.log(`Created new player for ${newPlayer.playerName}.`)
    console.log(newPlayerId)
    return newPlayerId
}

async function asyncUpdatePlayer(id, newData) {

    let player = await db.getCollection('dqPlayers')
    return player.updateOne({ _id: ObjectId(id) }, { $set: newData })
}

function generateRandNum(num) {
   return Math.floor(Math.random() * (num + 1))
}

// 
// 
// 
// 

function counter() {
    gameCount++;
    console.log(gameCount);
    return gameCount
}

async function createPlayer(playerData) {
    let playerCollection = await db.getCollection('dqPlayers')
    let insertResult = await playerCollection.insertOne(playerData)
    return insertResult.insertedId.id
}

async function findPlayerById(id) {
    let playerCollection = await db.getCollection('dqPlayers')
    let player = await playerCollection.findOne({ _id: ObjectId(id) })
    return player
}

async function findPlayerByName(name) {
    let playerCollection = await db.getCollection('dqPlayers')
    let player = await playerCollection.findOne({ playerName: name })
    return player
}

async function updatePlayer(id, newData) {
    let playerCollection = await db.getCollection('dqPlayers')
    return playerCollection.updateOne({ _id: ObjectId(id) }, { $set: newData })
}

async function deletePlayerById(id) {
    let playerCollection = await db.getCollection('dqPlayers')
    return playerCollection.deleteOne({_id: ObjectId(id)})
}

async function newPlayer(playerName) {
    let newPlayer = {
        location: '',
        tool: 'noTool',
        item1: 'noItem1',
        item2: 'noItem2',
        event1: 'noEvent',
        event2: 'noEvent',
        event3: 'noEvent',
        event4: 'noEvent',
        name: playerName
    }
    console.log(newPlayer)

    let newPlayerId = await createPlayer(newPlayer)
    console.log(`Created new player for ${newPlayer.playerName}.`)
    console.log(newPlayerId)
    return newPlayerId
}

async function logPlayer(id) {

    let findPerson = await findPlayerById(id)
    console.log(findPerson)
}


// deletePlayerById(newPlayerId.id)


// let newId = newPlayer('Jimmy')
// console.log(newId)

// 
// generates dice roll object for dice game
// 

// function borelRoll() {
//     let roll = {
//         sixD1: generateRandNum(6),
//         sixD2: generateRandNum(6),
//         sixD3: generateRandNum(6),
//         sixD4: generateRandNum(6),
//         tenD1: generateRandNum(10),
//         thirtyD1: generateRandNum(30)
//     }
//     console.log(roll)
    
//     return roll
// }

module.exports = {
    startGame,
    resetGame,
    roomChanger,
    giveTool,
    giveItem,
    eventPlacer,
    generateRandNum,
    counter,
    createPlayer,
    findPlayerById,
    findPlayerByName,
    updatePlayer,
    newPlayer,
    asyncUpdatePlayer
}