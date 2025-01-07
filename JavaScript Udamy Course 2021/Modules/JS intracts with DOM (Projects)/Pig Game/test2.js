var scores, currentScore, activePlayer, gamePlaying, parameters, winningScore;

function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  // Get the values from the URL parameters
  parameters = new URLSearchParams(window.location.search);

  document.querySelector(".dice").style.display = "none"; // change CSS of display to none. ,querySelector use as getter/setter with html/DOM.

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

  let name1 = parameters.get("name1");
  let name2 = parameters.get("name2");

  if (name1 != null) {
    document.getElementById("name--0").textContent = name1;
    document.getElementById("name--1").textContent = name2;
    console.log(name1, name2);
  }
}
init();

document.querySelector(".btn--roll").addEventListener("click", function () {
  // anonymous function.

  if (gamePlaying) {
    // check game state

    // 1. Generate random number
    var dice;
    dice = Math.floor(Math.random() * 6 + 1);

    // 2.Display active player results
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "images/dice-" + dice + ".png";

    // 3.Update the current score if the rolled number is not a 1.
    if (dice !== 1) {
      // add score
      currentScore += dice;
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

    let input = document.querySelector(".final-score").value;

    // Undefined, 0, null, or "" are COERCED to false.
    // Anything else is COERCED to true
    if (input) {
      winningScore = input;
      console.log(winningScore);
    } else {
      winningScore = 20;
      console.log(winningScore);
    }

    //check if player is won game
    if (scores[activePlayer] >= winningScore) {
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

  document.querySelector(".dice").style.display = "none";
}
