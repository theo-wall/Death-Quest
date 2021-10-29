const deathQuestGameFunctions = require('./deathQuestGameFunctions')

document.addEventListener('DOMContentLoaded', function () {
  let inv = document.querySelector('#inventory')

  inv.addEventListener('click', function() {
    let content = document.querySelector('#content')
    content.innerHTML = `    
        
        <div id="content">
        <p id="flavour">
          You check your pockets and you have:
            ${deathQuestGameFunctions.player.item1}
            ${deathQuestGameFunctions.player.item2}
        </p>
      </div>

      <nav>
        <ul>
          <li id='cont'><a href="/necromancerGame13?rubyCheck=1">Get Out Of Here</a></li>
        </ul>
      </nav>`
  })
})