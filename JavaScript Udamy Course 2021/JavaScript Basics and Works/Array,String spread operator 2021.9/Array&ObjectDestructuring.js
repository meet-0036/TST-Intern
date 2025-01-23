// Array destructuring(unpacking) : extract elements from Array

// ********************** Destructuring Arrays **********************

console.log('Destructuring Arrays ::-- \n');

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'thu', 'fri', 'sat'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  fri: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // for array
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // for object
  // Es6 inhanced object literals
  openingHours, // as entity of restaurant

  // same as orderDelivery: function(){} [new syntex for menthod]
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // for spread operator
  orderPasta: function (
    ing1 = 'mashrooms',
    ing2 = 'aspargus',
    ing3 = 'cheese'
  ) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  // for REST
  orderPizza(mainIngredient, ...otherIngredients) {
    // function
    console.log('Main Ingredient: ', mainIngredient);
    console.log('Other Ingredients: ', otherIngredients);
  },
};

const [first, second] = restaurant.categories; // categories[0,1]
console.log('categories : ' + first + ', ' + second);

let [main, , secondary] = restaurant.categories; // categories[0,2]
console.log('categories : ' + main, secondary);

// swap two values
[main, secondary] = [secondary, main];
console.log('categories : ' + main, secondary);

// nested destructuring
const ar = [1, 2, [5, 6]];
const [i, j, [k, l]] = ar;
console.log(i, j, k, l);

//Receive 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log('Selected order : ' + starter, mainCourse);

// default values
const [p = 1, q = 1, r = 1] = [7, 5];
console.log(p, q, r);

// ********************** Destructuring Objects **********************

console.log('\n\nDestructuring Objects ::-- \n');

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del land, 34',
  starterIndex: 1,
});

// take with actual names
const { name, openingHours: hour, categories } = restaurant;
console.log(name, hour, categories);

// take with different names
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values (if entity is not exist in object)
const { menu: menuList = [], starterMenu: starters = [] } = restaurant;
console.log(menuList, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log('Mutated values of a,b : ', a, b);

// Nested objects
const {
  fri: { open: openingTime, close: closingTime },
} = openingHours; // take with different names
console.log(openingTime, closingTime);

// ********************** The Spread Operator (...) [unpack elements] **********************

console.log('\n\nThe Spread Operator (...) ::-- \n');

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr); // 1,2,7,8,9

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log('New Menu : ', newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log('Full Menu : ', menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log('String Jonas : ', letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); // not valid

// Real-world example
const ingredients = [
  // prompt("Let's make pasta! Ingredient 1?"),
  // prompt('Ingredient 2?'),
  // prompt('Ingredient 3?'),
];
console.log('Take from promt: ', ingredients);
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy);
console.log(restaurant.name);

// **********************  Rest(pack in array) Pattern and Parameters **********************

console.log('\n\nRest pattern and parameters ::--  \n');

// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr1 = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [m, n, ...others] = [1, 2, 3, 4, 5];
console.log(m, n, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);
// REST is always last element and not take between missing elements

// Objects
const { fri, sat, ...weekday } = restaurant.openingHours; // when entity is not exist
console.log(fri, sat, weekday); // set: undifined

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(8, 2, 5, 3, 2, 1, 4);
const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

// ********************** short Circuiting  **********************

console.log('\n\nShort circuiting ::-- \n');

console.log('\n---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas'); // return immediately first truthy evaluated value
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1); // resturant.numGuests = undefined

restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// solution of OR operator
// The Nullish Coalescing Operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

// Nullish: check if null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

console.log('\n---- AND ----');
console.log(0 && 'Jonas'); // find first falsy value
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

// ********************** for of loop **********************

console.log('\n\nFOR OF loop ::-- \n');

for (const item of menu) console.log(item);

for (const item of menu.entries()) console.log(item);

for (const [index, element] of menu.entries()) {
  // item : 0,1 (0 -> index, 1 -> itemName)
  console.log(`${index + 1}: ${element}`);
}
// console.log(menu.entries());

// ********************** Optional Chaining (?) **********************

console.log('\n\nOptional Chaining (?) ::-- \n');

// Optional Chaining : problem when call property is undefined then next property is occur error
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open); // barier for occuring error

// console.log(restaurant.openingHours.mon.open);   // error

// WITH optional chaining ES2020
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // ?? nullish coalescing operator
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

// ********************** Looping Objects: Object Keys, Values, and Entries **********************

console.log('\n\nLooping Objects: Object Keys, Values, and Entries ::-- \n');

// Property NAMES as array
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);
console.log(values[0].open);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);
console.log(entries[0][0]);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
//key = day , value is object then destructuring {open ,close}
