let massOfMark, massOfJohn, heightOfJohn, heightOfMark;

massOfJohn = 70; // kg
heightOfJohn = 1.69; // meters
massOfMark = 75;
heightOfMark = 1.8;

// massOfJohn = prompt('Enter the mass of John : ');
// heightOfJohn = prompt('Enter the height of John : ');
// massOfMark = prompt('Enter the mass of Mark : ');
// heightOfMark = prompt('Enter the height of Mark : ');

BMIOfJohn = massOfJohn / heightOfJohn ** 2;
BMIOfMark = massOfMark / (heightOfMark * heightOfMark);

console.log("John's BMI " + BMIOfJohn + " \nMark's BMI and " + BMIOfMark);

let higherBMIs = BMIOfMark > BMIOfJohn;
console.log("Is Mark's BMIs higher than John's  ?  " + higherBMIs);

// or by if else
// if (higherBMIs == true) {
//     console.log(" Is Mark's BMIs higher then John's");
// } else {
//     console.log(" Is John's BMIs higher then Mark's");
// }
