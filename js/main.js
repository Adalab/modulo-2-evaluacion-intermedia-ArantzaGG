'use strict';
// queryselector
const select = document.querySelector('.js-select');
const stone = document.querySelector('.js-stone');
const paper = document.querySelector('.js-paper');
const scissors = document.querySelector('.js-scissors');
const btnPlay = document.querySelector('.js-btn-play');
const letsPlay = document.querySelector('.js-lets-play');
const counterPlayer = document.querySelector('.js-counter-player');
const counterPc = document.querySelector('.js-counter-pc');
const result = document.querySelector('js-result');

// funciones

function getRandomNumber(max) {
  const randomNumber = Math.ceil(Math.random() * max);
  return randomNumber;
}

function computerPlay() {
  const randomNumber = getRandomNumber(9);
  if (randomNumber <= 3) {
    letsPlay.innerHTML = 'Piedra';
    //letsPlay.classList.add("stone");
  }
  if (randomNumber > 3) {
    letsPlay.innerHTML = 'Papel';
    //letsPlay.classList.add("paper");
  }
  if (randomNumber > 7) {
    letsPlay.innerHTML = 'Tijera';
    //letsPlay.classList.add("scissors");
  }
}

// function comparation() {

//   if () {
//     result.innerHTML = '¡EMPATE!';
//   }

//   if () {
//      result.innerHTML = '¡TÚ GANAS!';
//    }
//    if () {
//      result.innerHTML = '¡TÚ PIERDES!';
//    }
//}

function handleClick(event) {
  event.preventDefault();
  console.log(getRandomNumber(9));
  //console.log(comparation());
  getRandomNumber(9);
  computerPlay();
  //comparation();
}

// manejadoras

btnPlay.addEventListener('click', handleClick);
