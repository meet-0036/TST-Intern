var scores, currentScore, activePlayer, gamePlaying;

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById("dice-1").style.display = "none"; // change CSS of display to none. ,querySelector use as getter/setter with html/DOM.
  document.getElementById("dice-2").style.display = "none";

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
    var dice1, dice2;
    dice1 = Math.floor(Math.random() * 6 + 1);
    dice2 = Math.floor(Math.random() * 6 + 1);
    console.log(dice1, dice2);

    // 2.Display active player results
    var diceDOM1 = document.getElementById("dice-1");
    var diceDOM2 = document.getElementById("dice-2");

    diceDOM1.style.display = "block";
    diceDOM2.style.display = "block";

    diceDOM1.src = "images/dice-" + dice1 + ".png";
    diceDOM2.src = "images/dice-" + dice2 + ".png";

    // 3.Update the current score if the rolled number is not a 1.
    if (dice1 !== 1 && dice2 !== 1) {
      // add score
      currentScore += dice1 + dice2;
      document.getElementById("current--" + activePlayer).textContent =
        currentScore;
    } else {
      // Next player
      nextPlayer();
    }
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (gamePlaying) {
    // check game state

    // Set GLobal scores and change in UI
    scores[activePlayer] += currentScore;
    document.getElementById("score--" + activePlayer).textContent =
      scores[activePlayer];

    //check if player is won game
    if (scores[activePlayer] >= 100) {
      document.getElementById("name--" + activePlayer).textContent = "Winner!";
      document.getElementById("dice-1").style.display = "none";
      document.getElementById("dice-2").style.display = "none";
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

  document.getElementById("dice-1").style.display = "none";
  document.getElementById("dice-2").style.display = "none";
}
