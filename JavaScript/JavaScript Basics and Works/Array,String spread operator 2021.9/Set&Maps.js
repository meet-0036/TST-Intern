// ********************** SET (collection of unique value)  **********************

console.log('\n\nSet ::-- \n');

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(ordersSet);

console.log(new Set('jonas'));

console.log(ordersSet.size); // find length
console.log(ordersSet.has('Pizza')); // find is exists
console.log(ordersSet.has('Bread'));

ordersSet.add('Garlic Bread');
ordersSet.delete('Pizza');
// ordersSet.clear(); // clear the set (empty set)
console.log(ordersSet);
console.log(ordersSet.size);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

// helps to find how many data is unique
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('jonasschmedtmann').size);

// ********************** MAP (collection of dara in key-value pairs)  **********************

console.log('\n\nMaps Fundamentals ::-- \n');

// Maps: Fundamentals
const rest = new Map();
rest.set('name', 'Classico Italiano'); // set(key, value)
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :('); // add multiple entries

console.log(rest.get('name')); // get by keyName (name) with exject datatype
console.log(rest.get(true));
console.log(rest.get(1));

const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories')); // check is exists
rest.delete(2); // delete by key
// rest.clear();

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h2'), 'Heading');
console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));

// object key are string, but map keys are number,string,array and so on...

// ********************** MAP Iterations**********************

console.log('\n\nMaps Iterations ::-- \n');

// Entires in Maps
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Is correct 🎉'],
  [false, 'Sorry! Try again! 😞'],
]);
console.log(question);

// Object
const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Option ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
3;

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
