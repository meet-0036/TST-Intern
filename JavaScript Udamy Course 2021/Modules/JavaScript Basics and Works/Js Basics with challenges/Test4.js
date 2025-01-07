let john = new Object();
john.fullName = "John Smith";
john.mass = 92;
john.height = 1.95;
// john.mass = prompt('Enter John mass in Kg : ');
// john.height = prompt('Ente JOhn height in meter : ');

john.calcBMI = function () {
  this.bmi = this.mass / this.height ** 2;
  return this.bmi;
};

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's bmi (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s bmi (${mark.bmi}) is higher than ${john.fullName}'s bmi (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s bmi (${john.bmi}) is higher than ${mark.fullName}'s bmi (${mark.bmi})`
  );
}
