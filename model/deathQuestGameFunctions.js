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
function listRooms() {
    return rooms
}

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

    player = player = [rooms[roomNumber-1], 'noTool', 'noItem1', 'noItem2', 'alive', gameMap,]
    console.log(player)
    return player

        
    }

module.exports = {
    startGame,
    resetGame,
    roomChanger
}