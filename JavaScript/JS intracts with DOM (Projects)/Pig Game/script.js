"use strict";

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let scores, currentScore, activePlayer, gamePlaying;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  document.querySelector("#name--0").textContent = "player 1";
  document.querySelector("#name--1").textContent = "player 2";
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

// switch to next player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Rolling dice functionality
btnRoll.addEventListener("click", function () {
  if (gamePlaying) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceEl.classList.remove("hidden");
    diceEl.src = `images/dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (gamePlaying) {
    // check game state

    //  1. Add currentScore to activePlayer's score and change UI
    scores[activePlayer] += currentScore;
    // scores[1] += currentScore

    diceEl.classList.add("hidden");
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if player is won game
    if (scores[activePlayer] >= 10) {
      // Finish the game
      gamePlaying = false;
      diceEl.classList.add("hidden");

      document.querySelector(`#name--${activePlayer}`).textContent = "Winner!";
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init); // callback function (init)

//
//
//
//

// Using 'gamePlaying' variable as state variable of a game.

// document.querySelector('#current--' + activePlayer).textContent = dice; // querySelector use as getter/setter with html/DOM.
// document.querySelector('#current--' + activePlayer).innerHTML = '<em>'+dice+'</em>';

// change the content of the selection, there are actually two ways.
// 1 .textContent : we have here can only set plain text, so no HTML.
// 2 .innerHTML : we want to put some HTML in the selected element,
//                instead of the textContent.

// classList : access & modify classname with html content.
// toggle : we want to add classname is present then remove it.or not present then attech it.

// Callback function : The function that we pass into another function as an argument(Event Listener to call the function for us.)
// function clickHandler(){
//     // callback function
// }
// document.querySelector('.btn btn--roll').addEventListener('click', clickHandler);

// Anonymous function : Doesn't have a name. So, it cannot be reused.
