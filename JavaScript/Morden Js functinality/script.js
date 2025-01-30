/////////////////////////////////////////////////////////////////////
// Exporting and Importing in ES6 Modules

// Importing module 
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
addToCart('bread', 5);
console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// import all the compoments
import * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 5);
console.log(ShoppingCart.totalPrice);
// console.log(ShoppingCart.shippingCost);

import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
console.log(price);

// for default 
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('apples', 4);

// take as live connections not only as copy
console.log('Cart : ',cart);
// /*


/////////////////////////////////////////////////////////////////////
// Top-Level Await (ES2022)

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // Not very clean
// // lastPost.then(last => console.log(last));

// const lastPost2 = await getLastPost();
// console.log(lastPost2);


/////////////////////////////////////////////////////////////////////
console.log('\n\n The Module Pattern  ::-- \n');


const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost is ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

// why this works out side the scope : closures (initial connection always there)
ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // this not returned (private)


/////////////////////////////////////////////////////////////////////
// console.log('\n\n CommonJS Modules  ::-- \n'); // NodeJs (Common Specification)

// // Export (it works only in node.js)
// export.addTocart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//   );
// };

// // Import
// const { addTocart } = require('./shoppingCart.js');


/////////////////////////////////////////////////////////////////////
// Introduction to NPM 

// this file run on parcel server
// fro lodash-es : npm i lodash-es
// Use parcel : npx parcel index.html
// Use package.json : starter list
// parcel autmatically converts/transpile in Babel(old support Js)
// manual need to add plugin & presets 
// also add polyfilling


// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';  // take all path by 'pacel'

// Coping nested objects (manually create a deep clone)
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateDeepClone);

// state holds only add new states
if (module.hot) {
  module.hot.accept();
}

// This ES6 convets by parcel in (ES5)babel as constructor function
class Person {
  #greeting = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.#greeting}, ${this.name}`);
  }
}
const jonas = new Person('Jonas');

console.log('Jonas' ?? null);

console.log(cart.find(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

// some dependencies write in parcel files it automatically install it
import 'core-js';
import 'core-js/stable/array/find';
import 'core-js/stable/promise';

// Polifilling async functions
import 'regenerator-runtime/runtime';


