let min = 50;
let max = 100;
let answer = Math.floor(Math.random() * (max - min) + 1) + min;
console.log(answer);

let attempt = 0,
  guess,
  isRunning = true;

while (isRunning) {
  guess = Number(window.prompt("Guess a number between " + min + " - " + max));
  console.log(typeof guess, guess);

  // check input condition
  if (isNaN(guess)) {
    window.alert("Please enter a valid number");
  } else if (guess < min || guess > max) {
    window.alert("Please enter a valid number");
  } else {
    attempt++;

    // check input asumptions
    if (guess < answer) {
      window.alert("TOO LOW! TRY AGAIN!");
    } else if (guess > answer) {
      window.alert("TOO HIGH! TRY AGAIN!");
    } else {
      window.alert("CORRECT! The answer was " + answer + ". It took you " + attempt);
      isRunning = false;
    }
  }
}
