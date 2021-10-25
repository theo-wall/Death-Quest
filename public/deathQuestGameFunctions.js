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
    event4: 'noEvent'}

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
// generates random number from 0 to number specified(num)
// 

function generateRandNum(num) {
   return Math.floor(Math.random() * num)
}

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
    generateRandNum
    
}