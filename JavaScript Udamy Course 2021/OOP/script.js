'use strict';

// 3 Way of implementing prototypal inheritance/delegation
// Function constructor
// ESX Classes
// Object.create

///////////////////////////////////////////////////////////////////////////////////////

console.log('Constructor Functions and the new Operator ::-- \n');

// Js not allow to create classes ,but use as...

// Constructor function (blueprint) : arrow not works (it's not own this)

const Person = function (fName, birthYear) {
  // console.log(this);

  // Instance properties
  this.firstName = fName;
  this.birthYear = birthYear;
  // console.log(this);

  // Never to  this! (can't create inside the constructor)
  // this.calcAge = function () {
  //   console.log(2024 - this.birthYear);
  // };
};

// console.log(Person.prototype);

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Static method (only for Person) // not in prototype(Break hierarchy)
Person.hey = function () {
  console.log('(Static) Hey there 👋');
  console.log(this);
};
Person.hey();

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nPrototypes ::-- \n');

console.log('Person.prototype : ',Person.prototype);

// Add common method in Person
Person.prototype.calcAge = function () {
  console.log(`${this.firstName}\'s Age : `, 2024 - this.birthYear);
};

jonas.calcAge(); // each object can access all methods of its Prototype
matilda.calcAge(); // Prototypal Inheritance/Deligation(provides by Person.prototype)

console.log('jonas.__proto__ (Prototype of jonas) : ', jonas.__proto__); // take copy from Person using 'new' (it creates by step 3)
console.log(
  'jonas.__proto__ === Person.prototype : ',
  jonas.__proto__ === Person.prototype
);

console.log(
  'Check prototype of linked Object : ',
  Person.prototype.isPrototypeOf(jonas)
); 

// .prototyeOfLinkedObjects
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// Add attribute
Person.prototype.species = 'Homo Sapiens';
// jonas.species = "";
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nPrototypal Inheritance on Built-In Objects ::-- \n');

console.log('jonas.__proto__ : ', jonas.__proto__); // Object.prototype (top of prototype chain)
console.log('jonas.__proto__.__proto__. : ', jonas.__proto__.__proto__);
console.log(
  'jonas.__proto__.__proto__.__proto__ : ',
  jonas.__proto__.__proto__.__proto__
); // null end of the prototype chain

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 9]; // new Array === []
console.log('\narr.__proto__ : ', arr.__proto__);
console.log(
  'arr.__proto__ === Array.prototype : ',
  arr.__proto__ === Array.prototype
);

console.log('arr.__proto__.__proto__ : ', arr.__proto__.__proto__);

Array.prototype.unique = function () {
  // add method in Array() Object
  return [...new Set(this)];
};

console.log('Unique number : ', arr.unique());

const h2 = document.querySelector('h2');
console.dir(h2);

console.dir(x => x + 1);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nCoding Challenge #1 ::-- \n');

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nES6 Classes ::-- \n');

// Class : Just a special type of function
// 1. Classes are NOT hoisted (compare to function)
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

// 1. Class expression
// const PersonCl = class {}

// 2. Class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    // called by new operator (Instance : new Object)
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(`${this.fullName}'s Age : `, 2024 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2024 - this.birthYear;
  }

  // Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method (Not available in Instance methods)
  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

// PersonCl.prototype.greet = function () {    // Create method of Outside of class
//   console.log(`Hey ${this.firstName}`);
// };

// Instance
const jessica = new PersonCl('Jessica Davis', 1996);
console.log('Jessica Object : ', jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

jessica.greet();

const walter = new PersonCl('Walter White', 1965);

console.log(Array.from([1, 3, 4, 3, 4])); // from() is Array's static method
// console.log([1,3,4,3,4].from([1,4])); // error

PersonCl.hey(); // Static method

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nSetters and Getters ::-- \n');

const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nObject.create ::-- \n');

// No prototype property, No Constuctor fuction, No new operator
// Manually set the prototype of an object to any oher oject

const PersonProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__); // Exact same as PersonProto
console.log(PersonProto.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nCoding Challenge #2 ::-- \n');

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    /// initializer
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(`Ford is going at ${ford.speedUS} mi/h`);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nInheritance Between "Classes": Constructor Functions ::-- \n');

// Using constructor functions
const Person2 = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person2.prototype.calcAge = function () {
  console.log(2024 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person2.call(this, firstName, birthYear); // when call regular function this=undefined , using call(pointTo , _ , _)
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person2.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike);
console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person2);
console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nCoding Challenge #3 ::-- \n');

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Carr = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Carr.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Carr.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Carr.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Carr.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();
tesla.accelerate();

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nInheritance Between "Classes": ES6 Classes ::-- \n');

class PersonnCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    // get value out of object
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    // set a value of with new property
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method  : Only for class
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonnCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first!
    super(fullName, birthYear); // similar PersonnCl.call(this)
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2024 - this.birthYear
      } years old, but as a student I feel more like ${
        2024 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
console.log(martha);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nInheritance Between "Classes": Object.create ::-- \n');

const PersonnProto = {
  calcAge() {
    console.log(2024 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const stevn = Object.create(PersonnProto);

const StudentProto = Object.create(PersonnProto);

// build the initial Function
StudentProto.init = function (firstName, birthYear, course) {
  PersonnProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const jay = Object.create(StudentProto);

jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nAnother Class Example ::-- \n');

class AccountCL {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc = new AccountCL('Jonas', 'EUR', 1111);

// here all methods and attribute are easy to access this not worth it.

// acc.movements.push(250);
// acc.movements.push(-140);

acc.deposit(250);
acc.withdraw(140);

acc.approveLoan(1000);
acc.requestLoan(1000);

console.log(acc);
console.log(acc.pin);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nEncapsulation: Private Class Fields and Methods ::-- \n');

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// STATIC version of these 4

// suppose we noted as private fields _movement for unique identification etc

class Account {
  // 1. public fields  (Instances)
  locale = navigator.language;

  // 2. private fields (Instances) (denoted #)
  bank = 'Bankist';
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    // unique for each Object
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // this.movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // Public interface (API)
  getMovements() {
    return this.#movements;
    // Not chaninable
  }

  deposit(val) {
    this.#movements.push(val);
    return this; // for chaining methods
  }

  withdraw(val) {
    this.deposit(-val);
    // console.log(this);  // Account
    return this;
  }

  // Fake method ("Fake" alternative : _ instand of #)
  #approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
    return this;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc.deposit(300);
// acc.withdraw(100);

// chaining in class methods (all have return class)
const movements = acc1
  .deposit(300)
  .withdraw(100)
  .withdraw(50)
  .requestLoan(25000)
  .withdraw(4000)
  .getMovements();

console.log(acc1);

// Not accessible
// console.log(acc.#movements);
// Account.#approveLoan();

console.log(movements); // read only

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nCoding Challenge #4 ::-- \n');

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarrCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarrCl {
  #charge; // private field

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  // public API method
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);

// console.log(rivian.#charge);

// Chaining methods using return this
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(`Rivian is going at ${rivian.speedUS} mi/h in US`);
