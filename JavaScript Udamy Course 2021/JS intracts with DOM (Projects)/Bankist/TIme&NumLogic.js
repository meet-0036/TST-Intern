///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nConverting and Checking Numbers ::-- \n');

console.log('Check 23 === 23.0 : ',23 === 23.0);

// Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333
// Binary base 2 - 0 1
console.log('0.1 + 0.2 : ',0.1 + 0.2);
console.log('0.1 + 0.2 === 0.3 : ',0.1 + 0.2 === 0.3);

// Conversion
console.log('Number(\'36\') : ',Number('23'));
console.log(+'23');   // conversion by +

// Parsing
console.log('below all Number.Methods : ');

console.log('parseInt(\'30px\').parse',Number.parseInt('30px', 10));  // check decimal
console.log(Number.parseInt('e23', 10));

console.log(Number.parseInt('  2.5rem  '));
console.log(Number.parseFloat('  2.5rem  '));

// console.log(parseFloat('  2.5rem  '));

// Check if value is NaN
console.log('isNaN(20) : ',Number.isNaN(20));
console.log(Number.isNaN('20'));
console.log(Number.isNaN(+'20X'));
console.log(Number.isNaN(23 / 0));

// Checking if value is number
console.log('isFinite(20) : ',Number.isFinite(20));
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20X'));
console.log(Number.isFinite(23 / 0));

console.log('isInteger(23) : ',Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));


///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nMath and Rounding ::-- \n');

console.log('Math.sqrt(25) : ',Math.sqrt(25)); 
console.log('25 ** (1 / 2) : ',25 ** (1 / 2));
console.log('8 ** (1 / 3) : ',8 ** (1 / 3));

console.log('Math.max(5, 18, 23, 11, 2) : ', Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));          
console.log(Math.max(5, 18, '23px', 11, 2));

console.log('Min : ', Math.min(5, 18, 23, 11, 2));

console.log('Use Math.PI : ',Math.PI * Number.parseFloat('10px') ** 2);

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

console.log('random genarates in range of 10 to 20 : ',randomInt(10, 20));
console.log('random genarates in range of 3 to 3 : ',randomInt(0, 3));

// Rounding integers
console.log('round(23.3) : ',Math.round(23.3));
console.log(Math.round(23.9));

console.log('ceil(23.3) : ',Math.ceil(23.3)); // rounded up
console.log(Math.ceil(23.9));

console.log('floor(23.3) : ',Math.floor(23.3));  // rounded down
console.log(Math.floor('23.9'));

console.log('trunc(23.3) : ',Math.trunc(23.3));  // rounded down

console.log(Math.trunc(-23.3));   // not works rounded down
console.log(Math.floor(-23.3));   // rounded down

// Rounding decimals
console.log('(2.7).toFixed() : ',(2.7).toFixed(0));  // return string 3
console.log((2.7).toFixed(3));   // 2 decimal spaces
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));  // string to number ***

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nThe Remainder Operator ::-- \n');

console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

// uncomment when script.js also connected.
// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     // 0, 2, 4, 6
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     // 0, 3, 6, 9
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nNumeric Separators  ::-- \n');

// 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

console.log(Number('230_000'));
console.log(parseInt('230_000'));



///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nWorking with BigInt ::-- \n');


console.log('2 ** 53 - 1 : ',2 ** 53 - 1);
console.log('Biggest num of digit stored by js : ',Number.MAX_SAFE_INTEGER);
console.log('2 ** 53 + 1 : ',2 ** 53 + 1);
console.log('2 ** 53 + 2 : ',2 ** 53 + 2);
 
console.log(4838430248342043823408394839483204n); // tramsform regular number to bigInt number
console.log(BigInt(48384302));

// Operations
console.log('10000n + 10000n : ',10000n + 10000n);
console.log(36286372637263726376237263726372632n * 10000000n);
// console.log(Math.sqrt(16n));

const huge = 20289830237283728378237n;
const num = 23;
console.log(huge * BigInt(num));  // parse in big integer

console.log(huge + ' is REALLY big!!!');  // also string is higher is change it 
// Exceptions
console.log(20n > 15);
console.log(20n === 20);  // false
console.log(typeof 20n);
console.log(20n == '20');  //true

// Divisions
console.log(11n / 3n);   // cutoff decimal parts
console.log(10 / 3);


///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nCreating Dates ::-- \n');

// Create a date
const now = new Date();
console.log(now);

// call by 4 diff parameter
console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0])); 
// // uncomment when script.js is connected.

// month is 0 based -> jan-0 , feb-1 etc
console.log(new Date(2037, 10, 19, 15, 23, 5)); // year, month, day, hour, minute, second
console.log(new Date(2037, 10, 31)); 

console.log(new Date(1));
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // count as ... day * hours * minute * sec * miliseconds

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log('future : ',future);
console.log('future (year) : ',future.getFullYear());
console.log('future (month) : ',future.getMonth());
console.log('future (date) : ',future.getDate());
console.log('future (day) : ',future.getDay());  // day of week
console.log('future (hour) : ',future.getHours());
console.log('future (minute) : ',future.getMinutes());
console.log('future (second) : ',future.getSeconds());
console.log('future (String) : ',future.toISOString()); // international standard
console.log('future (time largeNum) : ',future.getTime());

console.log(new Date(2142256980000));

console.log('Current date : ',Date.now());
console.log('Current date : ',new Date(Date.now()));

future.setFullYear(2040);
console.log(future);


///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nOperations With Dates ::-- \n');

const future2 = new Date(2037, 10, 19, 15, 23);
console.log(+future2);

const calcDaysPassed = (date1, date2) =>
    Math.abs(date2 - date1) / (1000 * 60 * 60 * 24); // because in one day : 24h, 60m,60s,1000milisec

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);

///////////////////////////////////////////////////////////////////////////////////////

// console.log('\n\nInternationalizing Numbers (Intl) ::-- \n');
 
const num2 = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num2));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num2));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num2));
console.log(
    navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num2)
);


///////////////////////////////////////////////////////////////////////////////////////

// console.log('\n\nTimers ::-- \n');

// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
    3000,
    ...ingredients
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// setInterval
// setInterval(function () {
//     const now = new Date();
//     console.log(now);
// }, 1000);

