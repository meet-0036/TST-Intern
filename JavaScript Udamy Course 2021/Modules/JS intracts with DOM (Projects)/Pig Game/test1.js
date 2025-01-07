var score, currentScore, activePlayer, gamePlaying, holdScore;

function init() {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  // document.querySelector('.dice').style.display = 'none'; // change CSS of display to none. ,querySelector use as getter/setter with html/DOM.

  document.getElementById("score--0").textContent = 0;
  document.getElementById("score--1").textContent = 0;
  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;
  document.getElementById("name--0").textContent = "PLayer 1";
  document.getElementById("name--1").textContent = "PLayer 2";

  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--0").classList.remove("player--active");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
}

init();

document.querySelector(".btn--roll").addEventListener("click", function () {
  // anonymous function.

  if (gamePlaying) {
    // check game state

    // 1. Generate random number
    var dice;
    dice = Math.floor(Math.random() * 6 + 1);
    console.log("dice value : " + dice);

    // 2.Display active player results
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "images/dice-" + dice + ".png";

    // 3.Update the current score if the rolled number is not a 1.
    if (holdScore === 6 && dice === 6) {
      // looses Score
      score[activePlayer] = 0;
      document.querySelector("score--" + activePlayer).textContent = "0";
      nextPlayer();
    } else if (dice !== 1) {
      currentScore += dice;
      document.getElementById("current--" + activePlayer).textContent =
        currentScore;
    } else {
      // Next player
      nextPlayer();
    }

    holdScore = dice;
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (gamePlaying) {
    // check game state

    // Set GLobal score and change in UI
    score[activePlayer] += currentScore;
    document.getElementById("score--" + activePlayer).textContent =
      score[activePlayer];

    //check if player is won game
    if (score[activePlayer] >= 100) {
      document.getElementById("name--" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player--" + activePlayer)
        .classList.add("player--winner");
      document
        .querySelector(".player--" + activePlayer)
        .classList.add("player--active");
      gamePlaying = false;
    } else {
      // Next player
      nextPlayer();
    }
  }
});

document.querySelector(".btn--new").addEventListener("click", init); // callback function

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  currentScore = 0;

  document.getElementById("current--0").textContent = 0;
  document.getElementById("current--1").textContent = 0;

  document.querySelector(".player--0").classList.toggle("player--active"); // classList
  document.querySelector(".player--1").classList.toggle("player--active");

  // document.querySelector('.player--0').classList.remove('player--active');
  // document.querySelector('.player--1').classList.add('player--active');

  // document.querySelector('.dice').style.display = 'none';
}
