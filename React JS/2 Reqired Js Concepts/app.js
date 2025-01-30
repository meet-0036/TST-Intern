// import  apiKeydefault  from "./util.js"; // get default exported component aassigning name.
// console.log(apiKeydefault);

import { apiKey } from "./util.js";

import { abc as varia } from "./util.js";
console.log("vari :", varia);

import { apiKey1, apiKey2 } from "./util.js";
console.log(apiKey1, apiKey2);

import { obj } from "./util.js";
console.log(obj.name, obj.agent);

// also use get all exports with *

import * as util from "./util.js";
console.log(util.apiKey1, util.apiKey2, util.obj.name, util.obj.agent);

import { example } from "./util.js";
let exampleReturn = example();
console.log(exampleReturn);

import arrow from "./util.js";
console.log(arrow(4, 8));

console.log(1 === 1);

function display() {
  console.log("This is a app function");
}

display();

function addTwo(fname = "a", lname) {
  return fname + lname;
}

let add = addTwo("Meet", " Dhameliya");
console.log(add);

let sum = (a, b) => a + b;
console.log(sum(2, 3));

(function (name) {
  console.log("My name is " + name);
})("Meet");

// When parameter is only One [Example]
(userName = "Don") => console.log(userName);
(userName) => console.log(userName);

// both Same as [Example]
(number) => {
  return number + " * 3 = " + number * 3;
};
(number) => number * 3;

// number => { age: number }; // trying to return an object invalid
(number) => ({ age: number }); // Just returning an object [Special Case]

const user = {
  // Object
  name: "John",
  age: 23,
  greet() {
    console.log("Hello dear, My name is " + this.name + ". I'm " + this.age + " years old. ");
  },
};
console.log(user);
console.log(user.name);
user.greet();

// Blueprint of Object
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("I'm in greeting");
  }
}

let newUser = new User("Jonas", 28);
console.log(newUser);
console.log("User age = " + newUser.age);
newUser.greet();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
numbers.push(9); // popular function : map, find, filter, findIndex, reduce, concat, slice

const index = numbers.findIndex((item) => item === 2);
console.log("2 at index : " + index);

// const editNumber = numbers.map((item) => item +''+ 0);
// console.log(editNumber);

const setNew = numbers.map((item) => ({ Number: item }));
console.log(setNew);

// Destructing
// also define array with..
const [a1, a2, a3, a4] = ["Mere", "jay", "shree", "Ram"];
console.log(a2, a3, a4);

//also with object
let { name: uname, age: a } = { name: "Smith", age: 24 };
console.log("Hello dear, My name is " + uname + ". I'm " + a + " years old. ");

const hobbies = ["sports", "cooking", "Reading"];

const commonHobbies = ["coding"];

// Spread Opretor(...)
const newHobbies1 = [...hobbies];
console.log(newHobbies1);
const newHobbies2 = [...hobbies, ...commonHobbies];
console.log(newHobbies2);
const newHobbies3 = [hobbies, commonHobbies];
console.log(newHobbies3);

const extendedUser = {
  isAdmin: true,
  ...user,
};
console.log(extendedUser);

for (const hobby of newHobbies2) {
  console.log(hobby); // display all hobby
}

// Dom manuplation
// const list = document.querySelector("ul");
// list.remove();

function handleTimeout() {
  console.log("Timed out!");
}

const handleTimeout2 = () => {
  console.log("Timed out ... again!");
};

setTimeout(handleTimeout, 2000); 
setTimeout(handleTimeout2, 4000);
setTimeout(() => {
  console.log("More timing out...");
}, 6000);

// pass function as parameter
function functionCalling(greeter) {
  greeter();
}
functionCalling(() => console.log('I am calling inside functionCalling()'));


// Call function inside another function
function init() {
    const message = 'function automatic call inside greet()';
  function greet(m) {
    console.log(m);
  }
  greet(message);  
}
init();

const sports = [ 'Cricket', 'Vallyball']; // Object can modified it by stored memory address. 
sports.push('Football');  // Access sports address and add new element reference

let msg = 'notModified'; // primitive value
msg = msg.concat('it'); // when stored with new accesser(msg) [overrite value]
console.log(msg);


