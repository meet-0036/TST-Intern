// ********************** Working With Strings - Part 1  **********************

console.log('\n\nWorking With Strings - Part 1 ::-- \n');

const airline = 'TAP Air Portugal';
const plane1 = 'A320';

console.log(plane1[0], plane1[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); // to first
console.log(airline.lastIndexOf('r')); // to last
console.log(airline.indexOf('Portugal')); // if not found [-1]

console.log(airline.slice('Slice at 4 :', 4)); // can't change original String
console.log(airline.slice('Slice at 4 to 7 :', 4, 7));
// first is include and end value is not includes in result, length 7-4 = 3

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
  else console.log('You got lucky 😎');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Boxing : string is primitive, but a js automatically change in String Object so it's provides a methods
// and object will autoamatically change in string
console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

// ********************** Working With Strings - Part 2  **********************

console.log('\n\nWorking With Strings - Part 2 ::-- \n');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const p1 = 'jOnAS'; // Jonas
function passengerName(name) {
  const correctName =
    name.toLowerCase()[0].toUpperCase() + name.toLowerCase().slice(1);
  console.log(correctName);
  return correctName;
}
passengerName(p1);

// Comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim(); // trim() remove whitespace (start,end)
console.log(normalizedEmail);
console.log(email === normalizedEmail); // cehck valid or not

// replacing
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.'); // replace(prev , new)
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));

// Alternative solution to replaceAll with regular expression g for (global)
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const plane2 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Airbus'));

if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// ********************** Working With Strings - Part 3  **********************

console.log('\n\nWorking With Strings - Part 3 ::-- \n');

// Split and join
console.log('a+very+nice+string'.split('+')); // in array of words
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' '); // array to string
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// Padding(add)
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));

// Repeat at multiple times
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

// ********************** Strings methods Practice **********************

console.log('\n\nString methods practice  ::-- \n');

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  //   console.log(type, from, to, time);
  console.log(
    `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
      '_',
      ' '
    )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
      ':',
      'h'
    )})`.padStart(44)
  );
}

// padStart() default add " " space but we add other padStart(23,'-')
