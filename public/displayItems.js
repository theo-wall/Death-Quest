
const deathQuestGameFunctions = require('./deathQuestGameFunctions')
const playerId = require('./deathQuestGameFunctions')

playerId = deathQuestGameFunctions.giveCurrentId();

 console.log(playerId)

// async function inventoryFind(id, slot) {
//   try {
//     let playerCollection = await db.getCollection('dqPlayers')
//     let player = await playerCollection.findOne({ _id: ObjectId(id) })
//     console.log(player)
//     if (slot === 'location') {
//       return player.location
//     }
//     else if (slot === 'tool') {
//       return player.tool
//     }
//     else if (slot === 'item1') {
//       return player.item1
//     }
//     else if (slot === 'item2') {
//       return player.item2
//     }
//     else if (slot === 'event1') {
//       return player.event1
//     }
//     else if (slot === 'event2') {
//       return player.event2
//     }
//     else if (slot === 'event3') {
//       return player.event3
//     }
//     else if (slot === 'event4') {
//       return player.event4
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }
document.addEventListener('DOMContentLoaded', function () {

  let match = document.querySelector('#match')

  match.addEventListener('click', function () {

   

      // let content = document.querySelector('#content')
      // content.innerHTML = `    
        
      //     <div id="content">
      //       <p id="flavour">
      //       ${playerId}
      //         {deathQuestRoutes.playerId}
      //         {deathQuestRoutes.playerId}
      //       </p>
      //     </div>

      //     <nav>
      //       <ul>
      //       <li id='cont'><a href="/necromancerGame13?rubyCheck=1">Get Out Of Here</a></li>
      //       </ul>
      //     </nav>
      //     `
      })
})

