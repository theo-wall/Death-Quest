let deathQuestGameFunctions = require('./model/deathQuestGameFunctions')

// play a game
console.log('Starting a game')
deathQuestGameFunctions.startGame()

let rooms = deathQuestGameFunctions.listRooms()
console.log('We can search ', rooms)
deathQuestGameFunctions.move(rooms[0])

let found = deathQuestGameFunctions.search()
if (found) {
    console.log('We found the hider!')
}
else {
    console.log('We did not find the hider!')
    console.log('We should have searched the', rooms[1])
}