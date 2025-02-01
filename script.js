'use strict';
// Players
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
// Starting Condition
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let score = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  const changeInPlayers = activePlayer === 1 ? 0 : 1;
  activePlayer = changeInPlayers;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
//Rolling dice when user roll
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Generate Random number
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    // Showing Dice Correspendence to Random No.
    diceEl.src = `dice-${diceNumber}.png`;
    diceEl.classList.remove('hidden');

    // Adding Score to user

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Switching Players
      switchPlayer();
    }
  }
});
// Adding holding button

btnHold.addEventListener('click', function () {
  if (playing) {
    // Adding score to big score
    score[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    // Finish the game

    if (score[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
      playing = false;
    }
    //Switch the Players
    switchPlayer();
  }
});
// Resetting the game

// Adding restarting setting
btnNew.addEventListener('click', function () {
  activePlayer = activePlayer === 1 ? 0 : 1;
  console.log(activePlayer);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  console.log('working');
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  playing = true;
  currentScore = 0;
  score[0] = 0;
  score[1] = 0;
});
