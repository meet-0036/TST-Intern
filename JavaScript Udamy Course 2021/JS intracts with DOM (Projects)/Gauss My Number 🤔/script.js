'use strict';

const number = document.querySelector('.number');
const scoreUI = document.querySelector('.score');
const checkBtn = document.querySelector('.check');
const checkText = document.querySelector('.guess');
const again = document.querySelector('.again');
const highScoreUI = document.querySelector('.highscore');

// const message = document.querySelector('.message');
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

checkBtn.addEventListener('click', function () {
  const guess = Number(checkText.value);

  // no number
  if (!guess) {
    displayMessage('⛔ No number');

    //number is correct
  } else if (guess === secretNumber) {
    // message.textContent = '🎉 Correct number';
    displayMessage('🎉 Correct number');

    if (highScore < guess) {
      highScore = score;
      highScoreUI.textContent = highScore;
    }

    number.textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    // checkBtn.disabled = true;

    // number is not same
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // message.textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

      score--;
      scoreUI.textContent = score;
    } else {
      displayMessage('💥 You lost a game!');
      scoreUI.textContent = 0;
    }
  }

  //   else if (guess > secretNumber) {
  //     // check score
  //     if (score > 1) {
  //       message.textContent = '📈 To high!';
  //       score--;
  //       scoreUI.textContent = score;
  //     } else {
  //       message.textContent = '💥 You lost a game!';
  //       scoreUI.textContent = 0;
  //     }

  //     // number is to low
  //   } else if (guess < secretNumber) {
  //     // num
  //     if (score > 1) {
  //       message.textContent = '📉 To low!';
  //       score--;
  //       scoreUI.textContent = score;
  //     } else {
  //       message.textContent = '💥 You lost a game!';
  //       scoreUI.textContent = 0;
  //     }
  //   }
});

again.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreUI.textContent = score;
  //   checkBtn.disabled = false;
  displayMessage('🤔 Start guessing...');
  checkText.value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
  number.textContent = '?';
});
