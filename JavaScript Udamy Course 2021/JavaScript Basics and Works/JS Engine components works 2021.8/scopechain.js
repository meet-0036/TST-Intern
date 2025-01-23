// execution context practices (variable environments, scopechains, this)

// ******* Scoping in Practice *******

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT!';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);       // outside the scope
    console.log(millenial);    // var not support block scope
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// console.log(age);
// printAge();

// ******* Hoisting and TDZ in Practice *******

// Variables
console.log(me); // undifined
// console.log(job);    // reference error
// console.log(year);   // reference error

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
console.log(addDecl(2, 3)); // 5
// console.log(addExpr(2, 3));       // reference error
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b; // hoisting undefined, when call TypeError

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(window);

console.log(x === window.x); // var creates a property of "window"
console.log(y === window.y);
console.log(z === window.z);

// *******  The this Keyword in Practice *******

console.log(this); // point to window object

const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calAge(1991); // no any parameter assigned to this : undefined

const calcAgeArrow = birthYear => {
  // doesn't its own this
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980); // laxical this : take parent function(scope) this : window

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // object's name
    console.log(2037 - this.year); // object's property
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // mathod borrowing
matilda.calcAge(); //

const f = jonas.calcAge;
f(); // regular function not any owner : undefined(dose not exist)

// ******** Regular Functions vs. Arrow Functions ********

// var firstName = 'Matilda';

const jonasen = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // problem : this undefined
    // const isMillenial = function() {
    //     console.log(this);
    //     console.log(this.year >= 1981 && this.year <= 1996);
    //   };
    //   isMillenial();

    // Solution 1
    // const self = this; // self or that (referance of object)
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this); // take parent scope
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`); // this not own by arrow so gives global scope
  },
};
jonas.greet;
jonas.calcAge();

// arguments keyword : take more args as array
const addExpre = function (a, b) {
  console.log(arguments);
  console.log(arguments[2]);
  return a + b;
};
addExpre(2, 5);
addExpre(2, 5, 8, 12);
console.log(addExpre(2, 5, 8, 12)); // but it takes only first 2

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArrow(2, 5, 8); // but arrow dosen't take it : error

//  ****** Object References in Practice (Shallow vs. Deep Copies) ******

// primitive types
let a = 10;
let oldA = a;
let newA = 12;
console.log('a : ', a, '\noldA : ', oldA, '\nnewA : ', newA);

// reference type
const oldJessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// function marryPerson(originalPerson, newLastName) {
//   originalPerson.lastName = newLastName;
//   return originalPerson;
// }

// const marriedJessica = marryPerson(jessica1, 'Davis');

// const marriedJessica = oldJessica;
// marriedJessica.lastName = 'Davis';
// console.log('primitive types \nBefore marriage: ', oldJessica);
// console.log('After marriage: ', marriedJessica);

// Copying objects  (shallow copy by assign() : only copy first level property)
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
  friends: {
    close: ['cat', 'sheep'],
  },
};

const jessicaCopy = Object.assign({}, jessica); // copy actual values
jessicaCopy.lastName = 'Davis';
jessicaCopy.friends.close.push('itChange');  // 
console.log('Shallow copies by assign() \nBefore marriage: ', jessica);
console.log('After marriage: ', jessicaCopy);

// Shallow copy
const jessicaCopy2 = { ...jessica };

jessicaCopy2.family.push('Mary');
jessicaCopy2.family.push('John');
jessicaCopy2.salary = 10000;

console.log('Shallow copies by spread operator \nBefore marriage :', jessica);
console.log('After marriage :', jessicaCopy2);

// Deep copy/clone
const jessicaClone = structuredClone(jessica);
jessicaClone.family.push('haio');
jessicaClone.family.push('ajax');

console.log('Original:', jessica);
console.log('Clone:', jessicaClone);

// DeepClone with no chages 
const jessica3 = JSON.parse(JSON.stringify(jessica)); 

jessica3.firstName = "exam";
jessica3.friends.close.push('example');

console.log('DeepClone : (before)',jessica)
console.log('DeepClone : (after)',jessica3)