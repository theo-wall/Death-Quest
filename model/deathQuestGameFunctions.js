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
let toolIndex = ['sword', 'Bow', 'Torch']

function startGame() {
    
    gameMap = ['event1', 'event2', 'event3', 'event4']
    player = [rooms[0], 'noTool', 'noItem1', 'noItem2', 'alive', gameMap,]
    
    return player 
}

function resetGame() {

    player = [rooms[0], 'noTool', 'noItem1', 'noItem2', 'alive', gameMap]
    gameMap = ['event1', 'event2', 'event3', 'event4']
}

function roomChanger(player,roomNumber) {

    player[0] = rooms[roomNumber-1]
    console.log(player)
    return player
}

function toolPicker() {
    let tool = toolIndex[Math.floor(Math.random() * 3)]
    return tool 
} 


module.exports = {
    startGame,
    resetGame,
    roomChanger,
    toolPicker
}