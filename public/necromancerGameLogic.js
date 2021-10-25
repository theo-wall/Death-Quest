function borelRoll() {
    let roll = [
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 6),
      Math.floor(Math.random() * 10),
      Math.floor(Math.random() * 30)
    ]
  return roll
}

function checkIfArrayIsUnique(myArray) {
  return myArray.length === new Set(myArray).size;
}

let playerScore = 0
let necroScore = 0
let diceRoll

  diceRoll = borelRoll()
  console.log(diceRoll)

  document.addEventListener('DOMContentLoaded', function () {
    let nomatch = document.querySelector('#noMatch')
    let match = document.querySelector('#match')
    

    nomatch.addEventListener('click', function() {
      let playerChoice
      playerChoice = true
      if (playerChoice === checkIfArrayIsUnique(diceRoll)) {

        let content = document.querySelector('#content')
        content.innerHTML = `    
        
        <div id="content">
        <p id="flavour">
          the Necromancer rolls the dice and they come up ${diceRoll[0]}, ${diceRoll[1]}, ${diceRoll[2]}, ${diceRoll[3]}, ${diceRoll[4]}. You Win This Round.
        </p>
      </div>

      <nav>
        <ul>
          <li id='cont'><a href="/necromancerGame13">Roll Again?</a></li>
        </ul>
      </nav>`

        playerScore++
        console.log(playerScore)

        let cont = document.querySelector('#cont')
        cont.addEventListener('click', function() {})

      }
      else {

        let content = document.querySelector('#content')
        content.innerHTML = `    
        
        <div id="content">
        <p id="flavour">
          the Necromancer rolls the dice and they come up ${diceRoll[0]}, ${diceRoll[1]}, ${diceRoll[2]}, ${diceRoll[3]}, ${diceRoll[4]}. You Lose This Round.
        </p>
      </div>

      <nav>
        <ul>
          <li id='cont'><a href="/necromancerGame13">Roll Again?</a></li>
        </ul>
      </nav>`

        necroScore++
        console.log(playerScore)
        let cont = document.querySelector('#cont')
        cont.addEventListener('click', function () { }) 

      }
    })

    match.addEventListener('click', function() {
      let playerChoice
      playerChoice = false
      if (playerChoice === checkIfArrayIsUnique(diceRoll)) {
        let content = document.querySelector('#content')
        content.innerHTML = `    
        
        <div id="content">
        <p id="flavour">
          the Necromancer rolls the dice and they come up ${diceRoll[0]}, ${diceRoll[1]}, ${diceRoll[2]}, ${diceRoll[3]}, ${diceRoll[4]}. You Win This Round.
        </p>
      </div>

      <nav>
        <ul>
          <li id='cont'><a href="/necromancerGame13">Roll Again?</a></li>
        </ul>
      </nav>`

        playerScore++
        console.log(playerScore)
        let cont = document.querySelector('#cont')
        cont.addEventListener('click', function () {})  
      }
      else {

        let content = document.querySelector('#content')
        content.innerHTML = `    
        
        <div id="content">
        <p id="flavour">
          the Necromancer rolls the dice and they come up ${diceRoll[0]}, ${diceRoll[1]}, ${diceRoll[2]}, ${diceRoll[3]}, ${diceRoll[4]}. You Lose This Round.
        </p>
      </div>

      <nav>
        <ul>
          <li id='cont'><a href="/necromancerGame13">Roll Again?</a></li>
        </ul>
      </nav>`

        necroScore++
        console.log(playerScore)
        let cont = document.querySelector('#cont')
        cont.addEventListener('click', function () { }) 

      }
    })
  });
