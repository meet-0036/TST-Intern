let year,
  birthJohn = 1993,
  birthSmith = 1996;
let currentYear = 2023;

// ******* let, var, const : immutable variable  *******

// let : function-scoped variable
// let : block-scoped variable
// const : immutable variable

johnAge = currentYear - birthJohn;
SmithAge = currentYear - birthSmith;

// Assignment operators

let x = 10;
x += 5;
console.log("X is : " + x);
x -= 2;
console.log("X is : " + x);
x--;
console.log("X is : " + x);
x++;
console.log("X is : " + x);

console.log(2 ** 3); // 2^3 = 8

//  ******* Logical operator *******
let olderperson = johnAge < SmithAge;

if (olderperson == true) {
  console.log("Smith is older than john.");
} else {
  console.log("john is older than smith.");
}

//  ****** typeof operator *******
let y;
let a = "meet";
let b = 23;
let c = true;
console.log(typeof johnAge);
console.log(typeof x);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof null); // error by js called "object"

//  ****** Operator Precedance : Which operator is execute first. ******

let isFullAge = currentYear - birthJohn >= johnAge; // check operator precedence table.
console.log(isFullAge);

//  ****** Boolean Logic : AND ,OR , NOT ******

let name = "Meet";
let age = 20;

if (age < 13) {
  console.log(name + " is a boy. ");
} else if (age >= 13 && age < 20) {
  console.log(name + " is a teenager. ");
} else if (age >= 20 && age < 30) {
  console.log(name + " is a young man. ");
} else {
  console.log(name + " is a man. ");
}
/*
1.AND (&&)  => TRUE if all are TRUE . 
2.OR (||)   => TRUE if one is TRUE .
3.NOT (!)   => Inverts TRUE->FALSE / FALSE->TRUE values  .
*/

//  ****** Ternary/conditional operator ******

age >= 18 ? console.log(" drinks beer. ") : console.log(" drinks juice. "); // three parts -> ternary
// or
// let drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// *********** Switch case ***********

switch (
  true // use as else if ladder statement.
) {
  case age < 13:
    console.log(name + " is a boy. ");
    break;
  case age >= 13 && age < 20:
    console.log(name + " is a teenager. ");
    break;
  case age >= 20 && age < 30:
    console.log(name + " is a young man. ");
    break;
  default:
    console.log(name + " is a man. ");
    break;
}

/* ************ Truthy and Falsy values *************

Falsy values : undefined , null , 0 , '' , NaN.
Truthy values : Not falsy values.

*/

let size;
size = 0 ? console.log("Defined") : console.log("Undefined"); // undefined
size || size === 0 ? console.log("Defined") : console.log("Undefined"); // === then defined when write in if else statement.
size = "" ? console.log("Defined") : console.log("Undefined");
size = null ? console.log("Defined") : console.log("Undefined");
size = 23 ? console.log("Defined") : console.log("Undefined");

// ********** tricktly Equality operatror === ()

if (age === "20") {
  console.log("The == operator does type coercion!");
} else {
  console.log("The === operator dose not type coercion!");
}

// use == then match but not match datatype equality
// use === then match datatype strictly equality
// !==, !=

let num1 = 4;
switch (num1) {
  case 1:
    console.log("one");

    break;
  case 2:
    console.log("two");
    break;
  case 3: // when multiple case with same result
  case 4:
    console.log("three or four");
    break;
  default:
    console.log("no selector matching");
    break;
}
