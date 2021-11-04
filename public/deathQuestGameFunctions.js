const { ObjectId } = require('mongodb')
const db = require('../db')

let toolIndex = ['Sword', 'Bow', 'Torch']
let newPlayerId
// adds spans with css tags to convert variables into strings with spans

function colorizer(text,idTag) {
    let colorText = `<span id='${idTag}'>${text}</span>`
    return colorText
}

// gives tool from tool index

function giveTool(index) {
    let tool = toolIndex[index]
    console.log(tool)
    return tool 
} 

// returns true or false if valid mongoDB ID

async function validateId(id) {
    console.log(newPlayerId)
    try {
        let playerCollection = await db.getCollection('dqPlayers')
        let playerId = await playerCollection.findOne({ _id: ObjectId(id)})
        if(playerId) {
            newPlayerId = playerId
            console.log(playerId)
            return true
        }
    } catch (error) {
        return false
    }
}

// returns current player Id as a string

async function giveCurrentId(id) {
    let playerCollection = await db.getCollection('dqPlayers')
    let playerId = await playerCollection.findOne({ _id: ObjectId(id)})
    let toString = JSON.stringify(playerId._id)
    return toString
}

// creates new player and uploads the object to mongo

async function newPlayer() {
    let newPlayer = {
        location: '',
        tool: 'noTool',
        item1: null,
        item2: null,
        event1: 'noEvent',
        event2: 'noEvent',
        event3: 'noEvent',
        event4: 'noEvent',
    }

    try {
    let newPlayerId = await createPlayer(newPlayer)
    console.log(`Created new player for ${newPlayer}.`)
    console.log(newPlayerId)
    playerId = newPlayerId
    return newPlayerId
    }catch (error) {
        console.log(error)
    }
}

// creates the player object for mongoDB

async function createPlayer(playerData) {
    try {
    let playerCollection = await db.getCollection('dqPlayers')
    let insertResult = await playerCollection.insertOne(playerData)
    return insertResult.insertedId.id
    } catch (error) {
        console.log(error)
    }
}

// finds specific item in inventory for game checks

async function inventoryFind(id,slot) {
    try { 
        let playerCollection = await db.getCollection('dqPlayers')
        let player = await playerCollection.findOne({ _id: ObjectId(id)})
        if (slot === 'location') {
            return player.location
        }
        else if (slot === 'tool')    {
            return player.tool
        }
        else if (slot === 'item1') {
            return player.item1
        }
        else if (slot === 'item2') {
            return player.item2
        }
        else if (slot === 'event1') {
            return player.event1
        }
        else if (slot === 'event2') {
            return player.event2
        }
        else if (slot === 'event3') {
            return player.event3
        }   
        else if (slot === 'event4') {
            return player.event4
        } 
    } catch (error) {
         console.log(error)
    }
}

// generates random number between 1 and num

function generateRandNum(num) {
   return Math.floor(Math.random() * (num + 1))
}



async function findPlayerById(id) {
    let playerCollection = await db.getCollection('dqPlayers')
    let player = await playerCollection.findOne({ _id: ObjectId(id) })
    return player
}

async function updatePlayer(id, newData) {
    let playerCollection = await db.getCollection('dqPlayers')
    return playerCollection.updateOne({ _id: ObjectId(id)}, { $set: newData })
}

async function deletePlayerById(id) {
    let playerCollection = await db.getCollection('dqPlayers')
    return playerCollection.deleteOne({_id: ObjectId(id)})
}

module.exports = {
    giveTool,
    generateRandNum,
    updatePlayer,
    newPlayer,
    updatePlayer,
    inventoryFind,
    deletePlayerById,
    findPlayerById,
    giveCurrentId,
    colorizer,
    validateId
}