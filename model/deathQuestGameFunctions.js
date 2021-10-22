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
let toolIndex = ['Sword', 'Bow', 'Torch','noTool']
let itemIndex = ['Ruby', 'Golden Key']
let eventIndex = ['necroDoor', 'slimeBridge', 'witchHutMelt', 'drawBridge']

// 
// Initializes game, resets all player tools and events
// 

function startGame() {
    
    gameMap = ['noEvent', 'noEvent', 'noEvent', 'noEvent']
    player = [rooms[0], 'noTool', 'noItem1', 'noItem2', gameMap,]
    
    return player 
}


// 
//  Resets game, pretty much the same as startgame, might delete
// 

function resetGame() {
    
    gameMap = ['event1', 'event2', 'event3', 'event4']
    player = [rooms[0], 'noTool', 'noItem1', 'noItem2', gameMap]
    
}

// 
//changes the room that the player is in, want to add cheat detection to it so you cant go to rooms that you dont have a path to. 
// 

function roomChanger(player,roomNumber) {

    player[0] = rooms[roomNumber-1]
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

// 
// Places a event on the character array to remember if its happened or not
// 

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

// 
// generates random number from 0 to number specified(num)
// 

function generateRandNum(num) {
   return Math.floor(Math.random() * num)
}

module.exports = {
    startGame,
    resetGame,
    roomChanger,
    giveTool,
    giveItem,
    eventPlacer,
    generateRandNum
}