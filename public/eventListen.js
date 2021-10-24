document.addEventListener('DOMContentLoaded', function () {
  let start = document.querySelector('#startGame')
  let content = document.querySelector('#content')
  start.addEventListener('click', function () {
    content.innerHTML = "<h1> New Scene! <h1>"
  });
});