///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nArray Methods ::-- \n');

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE  unmutate array
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // at 2,3
console.log(arr.slice(-2)); // last 2 elements
console.log(arr.slice(-1)); // last element
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE  mutates array same as slice()
// console.log(arr.splice(2));
arr.splice(-1); // remove last element
console.log(arr);
arr.splice(1, 2); // (start index , number of elements for remove)
console.log(arr);

// REVERSE  mutates array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT - unmutate
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); // new array

// JOIN
console.log(letters.join(' - ')); // convert in string
console.log(typeof letters.join(' - '));

// The new AT Method
const ar = [23, 11, 64];
console.log(ar[0]);
console.log(ar.at(0));

// getting last array element
console.log(ar[ar.length - 1]);
console.log(ar.slice(-1)[0]);
console.log(ar.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nLooping Arrays: forEach ::-- \n');

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement in movements) {
for (const [i, movement] of movements.entries()) {
  console.log(
    movement > 0
      ? `Movement ${i + 1}: You deposited ${movement}`
      : `Movement ${i + 1}: You withdrew ${Math.abs(movement)}`
  );
}

console.log('\n----FOREACH ----');
movements.forEach(function (mov, i, arr) {
  // for function (iterate variable, index, arrayName)
  console.log(
    mov > 0
      ? `Movement ${i + 1}: You deposited ${mov}`
      : `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`
  );
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  // set no indexing so middle var is unneccessary
  console.log(`${value}`);
});

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nCoding challenge #1 ::-- \n');

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice(); // data assurity

  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old `);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nThe map Method ::-- \n');

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

const movementsUSD = movements.map(mov => mov * eurToUsd);
//  traverse on every element and each return with new array in movemensUSD

console.log('movements : ', movements);
console.log('Map() : ', movementsUSD);

// Using ForOf
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log('For Loop : ', movementsUSDfor);

// map(itractor, index, array)
const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log('Map() : ', movementsDescriptions);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\n The filter Method ::-- \n');

// filter : apply some filter on each element and combine result in new array
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log('movements : ', movements);
console.log('Filter() : ', deposits);

// Using forOf
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log('For Loop : ', depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log('Filter() : ', withdrawals);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nThe reduce Method ::-- \n');

console.log('movements : ', movements);

// reduce(accumulator, currentValue, currentIndex, array)
// accumulator -> SNOWBALL (initial value)
// currentValue -> value of the current element. (array[1])

// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);

const balance = movements.reduce((acc, cur, i) => {
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);
console.log('Reduce() : ', balance);

// using forOf
let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log('For Loop : ', balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]); // (function(){}, X) this x -> accumulator initalizes value
console.log('Max : ', max);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nCoding Challenge #2 ::-- \n');

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));

  const adults = humanAges.filter(age => age >= 18);

  console.log('Human ages : ', humanAges);
  console.log('Adult Human ages : ', adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3. (2+3)/2 = 2.5 ===> 2/2 + 3/2 = 2.5

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log('Avarages : ', avg1, avg2);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nThe Magic of Chaining Methods ::-- \n');

const eurToInr = 88.41;
console.log(movements);

// PIPELINE
const totalDepositsINR = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToInr;
  })
  // .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log('Total Indian Rupees : ', totalDepositsINR);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nCoding Challenge #3 ::-- \n');

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge2 = ages =>
  age
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg12 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg22 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log('Avarages(by Arrow and Chaining) : ', avg1, avg2);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nThe find and findIndex Methods ::-- \n');

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// find() : traverse on array and return pertucular value (searching)
const firstWithdrawal = movements.find(mov => mov < 0); // serach based on condition
console.log('movements : ', movements);
console.log('first negative Withdrawal : ', firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log('Find() result : ', account);

// using forOf
for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') console.log('For of Loop : ', acc);
  else continue;
}

console.log(
  'Search first index of negative amount : ',
  movements.findIndex(mov => mov < 0)
);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nThe New findLast and findLastIndex Methods ::-- \n');

console.log('movements : ', movements);
const lastWithdrawal = movements.findLast(mov => mov < 0); // find last element which satisfies conditions.
console.log('Last Negative withdrawal : ', lastWithdrawal);

// 'Your latest large movement was X movements ago'

const latestLargeMovementIndex = movements.findLastIndex(
  mov => Math.abs(mov) > 1000
);
console.log('latest Large Movement Index : ', latestLargeMovementIndex);
console.log(
  `Your latest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nSome and Every Methods ::-- \n');

// some and every
console.log('movements : ', movements);

// EQUALITY
console.log('includes() : ', movements.includes(-130)); // true/false

// SOME: EQUALITY with CONDITION
console.log(
  'some() : ',
  movements.some(mov => mov === -130)
); // true/false

const anyDeposits = movements.some(mov => mov > 0);
console.log('some() : ', anyDeposits);

// EVERY
console.log(
  'every() : ',
  movements.every(mov => mov > 0)
);
console.log(
  'every() : ',
  account4.movements.every(mov => mov > 0)
);

// Separate callback
const deposit = mov => mov > 0;
console.log('some() : ', movements.some(deposit));
console.log('every() : ', movements.every(deposit));
console.log('filter() : ', movements.filter(deposit));

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nflat and flatMap Methods ::-- \n');

// flat : makes array as linear(remove hierarchy)
const dual = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log('flat() default : ', dual.flat()); // default flat 1

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log('flat(2) : ', arrDeep.flat(2)); // 2 level nesting

// flat
const overalBalance = accounts
  .map(acc => acc.movements) // overalBalance = [{},{},{},{},]
  .flat() // overalBalance = [ALL ELEMENTS];
  .reduce((acc, mov) => acc + mov, 0);
console.log('Overal Balance (map, flat) : ', overalBalance);

// flatMap  : add flat() and map() both functionality
const overalBalance2 = accounts
  .flatMap(acc => acc.movements) // but gives only 1 nesting
  .reduce((acc, mov) => acc + mov, 0);
console.log('Overal Balance (flatMap) : ', overalBalance2);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nSorting Arrays ::-- \n');

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log('Owners Sort() : ', owners.sort()); // A to Z
console.log('Owners ', owners); // mutates actual owners

// Numbers
console.log(movements);
// console.log(movements.sort()); // not works - sort with first letter

// for Ascending
// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// sort(currentValue, nextValue)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });    /
//  or
movements.sort((a, b) => a - b);
console.log('Sort movements (asce) : ', movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });
// or
movements.sort((a, b) => b - a);
console.log('Sort movements (desc) : ', movements);

///////////////////////////////////////////////////////////////////////////////////////
// baKI CHE
console.log('\n\nArray Grouping ::-- \n');

console.log('movements : ', movements);

// const groupedMovements = Object.groupBy(movements, movement =>
//   movement > 0 ? 'depositSum' : 'withdrawalSum'
// );
// console.log('By groupBy()',groupedMovements);

// groupBy(Iterable_Array, callback )   ,  return groupName as a String
const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return 'very active';
  if (movementCount >= 4) return 'active';
  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});
console.log('Group of User Behaviour : ', groupedByActivity);

// const groupedAccounts = Object.groupBy(accounts, account => account.type);
const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log('Group by accType : ', groupedAccounts);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nMore Ways of Creating and Filling Arrays ::-- \n');

console.log(new Array(1, 2, 3, 4, 5, 6, 7)); // or arr = [1, 2, 3, 4, 5, 6, 7]

// Empty arrays + fill method
const x = new Array(7); // 7 - length of array
console.log('Array x : ', x);

// console.log(x.map(() => 5));   // not effects no change
x.fill(1, 3, 5); // set 1 in x with start 3 to 5, set(addNum, startI, endI)
console.log('x.Fill() : ', x);

x.fill(1); // [1,1,1,1,1,1,1]
console.log('By x.fill() : ', x);

// Array.from([lengh}, function(currentEle, currentIndex)) like map()
const y = Array.from({ length: 7 }, () => 1);
console.log('Array by from() : ', y);

const z = Array.from({ length: 7 }, (_, i) => i + 1); // _ for skip a parameter
console.log('Array by from() : ', z);

console.log(
  'diceresults : ',
  Array.from({ length: 100 }, () => Math.floor(Math.random() * 6) + 1)
);

// For bankist project
// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace('€', ''))
//   );
//   console.log(movementsUI);

// const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nArray Methods Practice ::-- \n');

// 1.
const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log('Total deposited amount : ', bankDepositSum);

// 2.
// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// or
const numDeposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log('Number of deposites which atleast 1000 : ', numDeposits1000);

// Prefixed ++ operator
let a = 10;
console.log('actual a :', a);

console.log('Prefixed ++a :', ++a, ' , a :', a);
console.log('Postfixed a++ :', a++, ' , a :', a);
console.log('Prefixed --a :', --a, ' , a :', a);
console.log('Postfixed a-- :', a--, ' , a :', a);

// 3. Lets create an Object
// const sums = accounts
const { depositSum, withdrawalSum } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.depositSum += cur) : (sums.withdrawalSum += cur);
      sums[cur > 0 ? 'depositSum' : 'withdrawalSum'] += cur;
      return sums;
    },
    { depositSum: 0, withdrawalSum: 0 }
  );

// console.log('Objects of sums : ', sums);

console.log(
  'Total deposite : ',
  depositSum,
  'Total withdrawal : ',
  withdrawalSum
);

// 4.
// this is a nice title -> This Is a Nice Title (titlecase)
const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (exceptions.includes(word) ? word : capitalize(word)))
    .join(' ');

  return capitalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

///////////////////////////////////////////////////////////////////////////////////////

console.log(
  '\n\nNon-Destructive Alternatives: toReversed, toSorted, toSpliced, with ::-- \n'
);

console.log('movements : ', movements);
console.log('toReversed() : ', movements.toReversed());

// toSorted (sort), toSpliced (splice)

// movements[1] = 2000;
console.log('Add with() : ', movements.with(1, 2000));

console.log('movements : ', movements);

///////////////////////////////////////////////////////////////////////////////////////

console.log('\n\nCoding Challenge #4 ::-- \n');

/* 
Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
*/

console.log();

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 17, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
console.log('Dogs : ', dogs);

// 2.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog eats too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3.
const ownersTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

const ownersTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

console.log('Owners of dog eating too much : ', ownersTooMuch);
console.log('Owners of dog eating too little : ', ownersTooLittle);

// 4.
console.log(`${ownersTooMuch.join(' and ')}'s dogs are eating too much`);
console.log(`${ownersTooLittle.join(' and ')}'s dogs are eating too little`);

// 5.
console.log(
  'check eating equal food of recommadations : ',
  dogs.some(dog => dog.curFood === dog.recFood)
);

// 6.
const checkEatingOkay = dog =>
  dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;

console.log('Check value of eating OKAY food : ', dogs.every(checkEatingOkay));

// 7.
const dogsEatingOkay = dogs.filter(checkEatingOkay);
console.log('take OKAY food of each dog : ', dogsEatingOkay);

// 8.
const dogsGroupedByPortion = Object.groupBy(dogs, dog => {
  if (dog.curFood > dog.recFood) {
    return 'too-much';
  } else if (dog.curFood < dog.recFood) {
    return 'too-little';
  } else {
    return 'exact';
  }
});
console.log('Groups (Exact, Too-much, Too-little) : ', dogsGroupedByPortion);

// 9.
const dogsGroupedByOwners = Object.groupBy(
  dogs,
  dog => `${dog.owners.length}-owners`
);
console.log('Group by Num of Owners :', dogsGroupedByOwners);

// 10. Asce
const dogsSorted = dogs.toSorted((a, b) => a.recFood - b.recFood); // each intration : a first traversal element and b- next element
console.log(dogsSorted);

///////////////////////////////////////////////////////////////////////////////////////

// console.log('\n\nCoding Challenge #5 ::-- \n');

/*
This time, Julia and Kate are studying the activity levels of different dog breeds.

YOUR TASKS:
1. Store the the average weight of a "Husky" in a variable "huskyWeight"
2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
3. Create an array "allActivities" of all the activities of all the dog breeds
4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

TEST DATA:
*/

/*
const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];

// 1.
const huskyWeight = breeds.find(breed => breed.breed === 'Husky').averageWeight;
console.log(huskyWeight);

// 2.
const dogBothActivities = breeds.find(
  breed =>
    breed.activities.includes('fetch') && breed.activities.includes('running')
).breed;
console.log(dogBothActivities);

// 3.
// const allActivities = breeds.map(breed => breed.activities).flat();
const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

// 4.
const uniqueActivities = [...new Set(allActivities)];
console.log(uniqueActivities);

// 5.
const swimmingAdjacent = [
  ...new Set(
    breeds
      .filter(breed => breed.activities.includes('swimming'))
      .flatMap(breed => breed.activities)
      .filter(activity => activity !== 'swimming')
  ),
];
console.log(swimmingAdjacent);

// 6.
console.log(breeds.every(breed => breed.averageWeight > 10));

// 7.
console.log(breeds.some(breed => breed.activities.length >= 3));

// BONUS
const fetchWeights = breeds
  .filter(breed => breed.activities.includes('fetch'))
  .map(breed => breed.averageWeight);
const heaviestFetchBreed = Math.max(...fetchWeights);

console.log(fetchWeights);
console.log(heaviestFetchBreed);



///////////////////////////////////////////////////////////////////////////////////////

*/
