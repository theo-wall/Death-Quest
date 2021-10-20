let rooms = 
[['start1'],
['caves2'],
['windingPath3'],
['crypt4'],
['swamp5'],
['slimePuddles6'],
['witchHut7'],
['cliffSide8'],
['bridgePlateau9'],
['castle10'],
['bigBaddie11']]

let player
let gameMap
let toolIndex = ['Sword', 'Bow', 'Torch']
let itemIndex = ['Ruby', 'Golden Key']
let eventIndex = ['necroDoor', 'slimeBridge', 'witchHutMelt', 'drawBridge']

function startGame() {
    
    gameMap = ['noEvent', 'noEvent', 'noEvent', 'noEvent']
    player = [rooms[0], 'noTool', 'noItem1', 'noItem2', gameMap,]
    
    return player 
}

function resetGame() {
    
    gameMap = ['event1', 'event2', 'event3', 'event4']
    player = [rooms[0], 'noTool', 'noItem1', 'noItem2', gameMap]
    
}

function roomChanger(player,roomNumber) {

    player[0] = rooms[roomNumber-1]
    console.log(player)
    return player
}

function toolPicker() {
    let tool = toolIndex[generateRandNum(3)]
    return tool 
} 

function giveItem (player,item) {
    if (item === 1) {
        player[2] = itemIndex[0]
        return player
    }
    else if (item === 2) {
        player[3] = itemIndex[1]
        return player
    }
}

function eventPlacer(player,event) {
    if (event === 1) {
        player[4][0] = eventIndex[0]
        return player
    }
    else if (event === 2) {
        player[4][1] = eventIndex[1]
        return player
    }
    else if (event === 3) {
        player[4][2] = eventIndex[2]
        return player
    }
    else if (event === 4) {
        player[4][3] = eventIndex[3]
        return player
    }
}

// generates random number from 0 to number specified(num)
function generateRandNum(num) {
   return Math.floor(Math.random() * num)
}

module.exports = {
    startGame,
    resetGame,
    roomChanger,
    toolPicker,
    giveItem,
    eventPlacer,
    generateRandNum
}