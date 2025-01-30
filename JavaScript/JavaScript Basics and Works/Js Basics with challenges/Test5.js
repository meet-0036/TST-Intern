let john = {
  fullName: "John Smith",
  bills: [124, 48, 268, 180, 42],
  totalBill: 0,
  totalTip: 0,
  calcTips: function () {
    this.tips = [];
    this.eachFinalBill = [];

    for (let i = 0; i < this.bills.length; i++) {
      let percentage;
      if (this.bills[i] <= 50) {
        percentage = 0.2;
      } else if (this.bills[i] > 50 && this.bills[i] <= 200) {
        percentage = 0.15;
      } else if (this.bills[i] > 200) {
        percentage = 0.1;
      }

      this.tips[i] = percentage * this.bills[i];
      this.eachFinalBill[i] = this.bills[i] + this.tips[i];
      this.totalBill += this.eachFinalBill[i];
      this.totalTip += this.tips[i];

      // console.log('Bill amount $' + this.bills[i] + ' and tip is $'+ this.tips[i]);
    }

    // console.log("Total bill amount is $" + this.totalBill+ " and tip is $" + this.totalTip);
  },
};

let mark = {
  fullName: "Mark Miller",
  bills: [77, 375, 110, 45],
  totalBill: 0,
  totalTip: 0,
  calcTips: function () {
    this.tips = [];
    this.eachFinalBill = [];

    for (let i = 0; i < this.bills.length; i++) {
      let percentage;
      if (this.bills[i] <= 100) {
        percentage = 0.2;
      } else if (this.bills[i] > 100 && this.bills[i] <= 300) {
        percentage = 0.1;
      } else if (this.bills[i] > 300) {
        percentage = 0.25;
      }

      this.tips[i] = percentage * this.bills[i];
      this.eachFinalBill[i] = this.bills[i] + this.tips[i];
      this.totalBill += this.eachFinalBill[i];
      this.totalTip += this.tips[i];

      // console.log('Bill amount $' + this.bills[i] + ' and tip is $'+ this.tips[i]);
    }

    // console.log("Total bill amount is $" + this.totalBill+ " and tip is $" + this.totalTip);
  },
};

john.calcTips();
mark.calcTips();
console.log(john, mark);

function calcAvg(tips) {
  let sum = 0;
  for (let i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

john.average = calcAvg(john.tips);
mark.average = calcAvg(mark.tips);

if (john.average > mark.average) {
  console.log(
    john.fullName +
      "'s family pays higner tips with an average of $" +
      john.average
  );
} else if (john.average < mark.average) {
  console.log(
    mark.fullName +
      "'s family pays higner tips with an average of $" +
      mark.average
  );
} else {
  console.log("Both family pays same tips.");
}

/* Implement by me.

function tipCalculator(amount) {

    let percentage;
    if (amount  <= 50) {
        percentage = 0.2;
        
    } else if (amount > 50 && amount <= 200) {
        percentage = 0.15;
        
    }else if (amount > 200) {
        percentage = 0.1;   
    }
    return percentage*amount;
}

let bills = [124, 48, 268, 180, 42];
let tip = 0;
let finalValue = 0;

for (let i = 0; i < bills.length; i++) {
    
    tip += tipCalculator(bills[i]);
    finalValue +=  (bills[i] + tip);     
    console.log('Bill amount $' + bills[i] + ' and tip is $'+ tip);                    
}
 
console.log('Total bills is $' + finalValue);      

*/

// js fundamental 2 challange #4 (2021)
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log("Bills : " + bills);
console.log("Tips : " + tips);
console.log("Totals : " + totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log("The Average of Totals is : " + calcAverage(totals));
console.log("The Average of Tips is : " + calcAverage(tips));
