
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

  let diceRoll = borelRoll()
  console.log(diceRoll)

document.addEventListener('DOMContentLoaded', function () {
  let nomatch = document.querySelector('#noMatch')
  let match = document.querySelector('#match')
  

  nomatch.addEventListener('click', function() {
    let playerChoice
    playerChoice = true
    if (playerChoice === checkIfArrayIsUnique(diceRoll)) {

      let content = document.querySelector('#content')
      content.innerHTML = `<p id=flavour">You Got It Right</p>`
      
    }
    else {

      let content = document.querySelector('#content')
      content.innerHTML = `<p id="flavour">You Got It Wrong</p>`
      
    }
  })

  match.addEventListener('click', function() {
    let playerChoice
    playerChoice = false
    if (playerChoice === checkIfArrayIsUnique(diceRoll)) {
      
      let content = document.querySelector('#content')
      content.innerHTML = `<p id="flavour">You Got It Right</p>`   
    }
    else {

      let content = document.querySelector('#content')
      content.innerHTML = `<p id="flavour">You Got It Wrong</p>`

    }
  })
});