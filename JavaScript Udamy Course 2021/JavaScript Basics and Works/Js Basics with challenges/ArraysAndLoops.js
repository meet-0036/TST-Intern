// ******** Arrays *********

// colllections of variables that can even have different data tyoes.

let names = ["Meet", "Harsh", "Ravi"];
let years = new Array(1990, 2022, 2023);

console.log('names',names);
console.log('names.length : ',names.length);
console.log('names[0] : ',names[0]);

names[0] = "mark"; // mutate a data.
names[5] = "jerry";
console.log(names);

let john = ["John", "Smith", 1990, "teacher", false];

john.push("blue"); // add data at last by push().
console.log(john);

console.log(john.push("blue"));   // return length : 6

john.unshift("Mr."); // add data at first by push().
console.log(john);

john.pop(); // remove data at last by pop().
console.log(john);

john.shift(); // remove data at First by pop().
console.log(john);

// search element index
console.log(john.indexOf("1990")); // 2 
console.log(john.indexOf("good")); // -1 => not found in array

console.log(john.includes("1990"));
console.log(john.includes("notTHere")); // check element exists (strictly)

// ***********  Loops  **********
let jonas = ["John", "Smith", 1990, "teacher", false];

// for (let i = 0; i < john.length; i++) // for loop
// {
//     console.log(john[i]);
// }

// let i = 0;
// while (0  < john.length) { // while loop
//     console.log(john[i]);
//     i++;
// }

// for loop with continue and break loop
for (let i = 0; i < jonas.length; i++) {
  if (jonas[i] == 1990) {
    console.log("John is age is :" + (2023 - jonas[i]));
    continue;
  }
  console.log('Execute element in for : ',jonas[i]);  
}

for (let i = 0; i < jonas.length; i++) {
  if (jonas[i] == 1990) {
    console.log("John is age is :" + (2023 - jonas[i]));
    break;
  }
  console.log('Execute element in for : ',jonas[i]);
}

// Looping Backword
for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

//  while loop
let dice = Math.floor(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

// continue statement : Exit in current iretion and move to next iteration.
// break statement : Exit to the loop.
