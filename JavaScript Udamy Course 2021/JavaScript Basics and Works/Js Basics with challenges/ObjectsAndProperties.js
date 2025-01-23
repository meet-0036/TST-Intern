// *********** Object And properties **************

// obejct defines with key and values pair, which mean each values has a name which is called key.

// Object literals
let meet = {
  firstName: "Meet",
  lastName: "Dhameliya",
  birthyear: 2004,
  family: ["Vrati", "Jagdishbhai", "Dayaben"],
  bestFriend: "Michael",
  job: "Student",
  isMarried: false,
};

console.log(meet);
console.log(meet.firstName); // access using  . operator
console.log(meet["lastName"]); // access using key.

meet.job = "teacher"; // mutates a data by access key.
meet["isMarried"] = true; // mutates a data by access breckets.
console.log(meet);

console.log(`${meet.family[1]} is a father of ${meet.firstName}.`);

// when key is comes after some operation
const key = "job";
console.log(meet[key]); //provides dynamic value

// *********** Create Object *************

// new Object syntax
let nayan = new Object();
nayan.firstName = "Nayan";
nayan["lastName"] = "patel"; // set or change properties.
nayan.birthyear = 2003;

console.log(nayan);

let raj = {
  firstName: "Raj",
  lastName: "Kanani",
  birthyear: 2003,
  job: "ML Enthusiests",
  family: ["Priya", "Jayeshbhai", "Kiranben"],

  // calcAge: function(birthyear) {
  //     return 2024 - birthyear;
  // }

  // calcAge: function() {
  //     console.log(this);
  //     return 2024 - this.birthyear;
  // }

  calcAge: function () {
    this.age = 2024 - this.birthyear; // this : point to it self member.
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} year old ${
      this.job
    }, and he has ${this.isMarried ? "married" : "unmarried"}.`;
  },
};

// console.log(raj.calcAge(2003));
// raj.calcAge();

raj.calcAge();
console.log(raj);
console.log("Raj age : ", raj.age);
console.log(raj.getSummary());
