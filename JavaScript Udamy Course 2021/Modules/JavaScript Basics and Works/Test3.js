function tipCalculator(amount) {
  let percentage;
  if (amount <= 50) {
    percentage = 0.2;
  } else if (amount > 50 && amount <= 200) {
    percentage = 0.15;
  } else if (amount > 200) {
    percentage = 0.1;
  }
  return percentage * amount;
}

let bills = [124, 48, 268];
let tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

let finalValues = [
  bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2],
];

console.log("All tips is " + tips);
console.log("total tips is " + (tips[0] + tips[1] + tips[2]));
console.log("Total bills is " + finalValues);

// challenge #4 in 2021
let bill = 275; //40 , 430
let tip = bill >= 25 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  "bill : " + bill + " tip : " + tip + " final_value : " + (bill + tip)
);
