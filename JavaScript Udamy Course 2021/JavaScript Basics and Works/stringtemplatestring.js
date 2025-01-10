"use strict"; // strict mode :forbids us to do certain things and creates visible errors in developer console
//  other situations js would just fail silently.

// string

const fname = "jonas";
const job = "student";
const birthYear = 2003;
const nowYear = 2024;

const jonas =
  "I'm " + fname + ", a " + (nowYear - birthYear) + " Year old " + "!";
console.log(jonas);

// template literals (template string)
const john = `I'm ${fname}, a ${nowYear - birthYear} Year old ${job}!`;
console.log(john);

console.log(`string passed`);

console.log("String \nmultiple \nlines");

console.log(`String
multiple 
lines 😊`); // key : window + .

// Type conversions

const inputYear = "2003";
console.log(Number(inputYear), 18);
console.log(Number(inputYear) + 18);

console.log(Number("hello"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion : by automatically [string > number when + ]

console.log("I am " + 21 + " years old");
console.log("21" + "4" - 5);
console.log("23" > "18");
console.log("1" + 1); // "11"
console.log(2 + 3 + 4 + "5");
