'use strict';
// queryselector

let playerScore = 0;
let pcScore = 0;
let moves = 0;

const select = document.querySelector('.js-select');
const btnPlay = document.querySelector('.js-btn-play');
const letsPlay = document.querySelector('.js-lets-play');
const counterPlayer = document.querySelector('.js-counter-player');
const counterPc = document.querySelector('.js-counter-pc');
const result = document.querySelector('.js-result');
const btnReset = document.querySelector('.js-btn-hidden');

// funciones

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function computerPlay() {
  const randomNumber = getRandomNumber(9);
  let pcValue = '';
  if (randomNumber <= 3) {
    pcValue = 'piedra';
  } else if (randomNumber >= 7) {
    pcValue = 'papel';
  } else {
    pcValue = 'tijera';
  }
  return pcValue;
}
function paintScore() {
  counterPlayer.innerHTML = playerScore;
  counterPc.innerHTML = pcScore;
}
function playGame() {
  const valuePc = computerPlay();
  const valueUser = select.value;

  console.log(valuePc);
  console.log(valueUser);
  if (valueUser !== '') {
    moves++;
    if (valuePc === valueUser) {
      result.innerHTML = '¡EMPATE!';
    } else if (valueUser === 'piedra') {
      if (valuePc === 'tijera') {
        result.innerHTML = '¡TÚ GANAS!';
        playerScore++;
      } else {
        result.innerHTML = '¡TÚ PIERDES!';
        pcScore++;
      }
    } else if (valueUser === 'papel') {
      if (valuePc === 'tijera') {
        result.innerHTML = '¡TÚ PIERDES!';
        pcScore++;
      } else {
        result.innerHTML = '¡TÚ GANAS!';
        playerScore++;
      }
    } else if (valueUser === 'tijera') {
      if (valuePc === 'papel') {
        result.innerHTML = '¡TÚ PIERDES!';
        pcScore++;
      } else {
        result.innerHTML = '¡TÚ GANAS!';
        playerScore++;
      }
    }
  }
  paintScore();
}

function gameOver() {
  if (moves >= 10) {
    btnReset.classList.remove('hidden');
    btnPlay.classList.add('hidden');
  }
}

function handleClick(event) {
  event.preventDefault();
  console.log(computerPlay());
  console.log(select.value);
  playGame();
  gameOver();
}

// manejadoras

btnPlay.addEventListener('click', handleClick);
