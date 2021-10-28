function borelRoll() {
    let roll = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 10) + 1,
      Math.floor(Math.random() * 30) + 1
    ]
  return roll
}

function checkIfArrayIsUnique(myArray) {
  return myArray.length === new Set(myArray).size;
}



 let diceRoll = borelRoll()
  console.log(diceRoll)

  document.addEventListener('DOMContentLoaded', function () {
    let nomatch = document.querySelector('#noMatch')
    let match = document.querySelector('#match')
    

    nomatch.addEventListener('click', function() {
      let playerChoice = true
      if (playerChoice === checkIfArrayIsUnique(diceRoll)) {

        let content = document.querySelector('#content')
        content.innerHTML = `    
        
        <div id="content">
        <p id="flavour">
          the Necromancer shows you the dice and they come up ${diceRoll[0]}, ${diceRoll[1]}, ${diceRoll[2]}, ${diceRoll[3]}, ${diceRoll[4]}, ${diceRoll[5]}. You Win The Ruby.
        </p>
      </div>

      <nav>
        <ul>
          <li id='cont'><a href="/necromancerGame13?rubyCheck=1">Get Out Of Here</a></li>
        </ul>
      </nav>`
      }
      else{

        let content = document.querySelector('#content')
        content.innerHTML = `    
        
        <div id="content">
        <p id="flavour">
          The Necromancer shows you the dice and they come up ${diceRoll[0]}, ${diceRoll[1]}, ${diceRoll[2]}, ${diceRoll[3]}, ${diceRoll[4]}, ${diceRoll[5]}. You Lose Your SOUL.
        </p>
      </div>

      <nav>
        <ul>
          <li id='cont'><a href="/deathRoom12">Accept Your Fate</a></li>
        </ul>
      </nav>`
      }
    })

    match.addEventListener('click', function() {

      let playerChoice = false
      if (playerChoice === checkIfArrayIsUnique(diceRoll)) {
        let content = document.querySelector('#content')
        content.innerHTML = `    
        
        <div id="content">
        <p id="flavour">
          the Necromancer shows you the dice and they come up ${diceRoll[0]}, ${diceRoll[1]}, ${diceRoll[2]}, ${diceRoll[3]}, ${diceRoll[4]}, ${diceRoll[5]}. You Win The Ruby.
        </p>
      </div>

      <nav>
        <ul>
         <li id='cont'><a href="/necromancerGame13?rubyCheck=1">Get Out Of Here</a></li>
        </ul>
      </nav>`


      }
      else {

        let content = document.querySelector('#content')
        content.innerHTML = `    
        
        <div id="content">
        <p id="flavour">
          the Necromancer shows you the dice and they come up ${diceRoll[0]}, ${diceRoll[1]}, ${diceRoll[2]}, ${diceRoll[3]}, ${diceRoll[4]}, ${diceRoll[5]}. You Lose This Round.
        </p>
      </div>

      <nav>
        <ul>
          <li id='cont'><a href="/deathRoom12">Accept Your Fate</a></li>
        </ul>
      </nav>`

      }
    })
  });
