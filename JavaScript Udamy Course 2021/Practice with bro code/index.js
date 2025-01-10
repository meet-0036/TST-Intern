// // var vs let behavior
// // const : can't change it.
// function change() {
//   let a = "a";
//   var b = "b";

//   {
//     let a = "new let"; // block scope
//     var b = "new var"; // function scope
//     console.log("Inside block - " + a);
//     console.log("Inside block - " + b);
//   }

//   console.log("Inside function - " + a);
//   console.log("Inside function - " + b);
// }
// change();

// let square = 4 ** 2; // find power of 4
// // document.write(square);
// console.log(`square of 4 is ${square}`);

// let title = "Welcome";
// document.getElementById("title").innerHTML = title; // .textContent

// let result = (12 % 5) + 8 / 2;
// console.log(" result is " + result);

// // handle button click
// let name;
// document.getElementById("submit").onclick = function () {
//   name = document.getElementById("name").value;
//   document.getElementById("displayName").textContent = `Mr. ${name}`;
// };

// // Two way binding
// // document.getElementById("name").addEventListener('input', function () {
// //     name = document.getElementById("name").value;
// //     document.getElementById("displayName").textContent = `Hey , ${name}`;
// // });

// // type conversion
// let num = 10;
// console.log(num, typeof num);
// num = String(num); // achive conversion
// console.log(num, typeof num);

// // check all conditions
// let x = 1,
//   y = 2,
//   z = 3;
// // let x = "", y= "", z = "";
// // let x = "rec", y= "dlf", z = "rcf";
// // let x , y, z;
// console.log(x, typeof x, y, typeof y, z, typeof z);

// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x, y, typeof y, z, typeof z);

// const decreaseBtn = document.getElementById("decrease");
// const resetBtn = document.getElementById("reset");
// const increaseBtn = document.getElementById("increase");
// const resultNumber = document.getElementById("result");
// let number = 0;

// decreaseBtn.onclick = function () {
//   number--;
//   resultNumber.textContent = number;
// };
// reset.onclick = function () {
//   number = 0;
//   resultNumber.textContent = number;
// };
// increaseBtn.onclick = function () {
//   number++;
//   resultNumber.textContent = number;
// };

// // Math : built-in Object that provides mathatical properties/functions

// const printRandom = document.getElementById("random");
// document.getElementById("handleRandom").onclick = function (params) {
//   printRandom.textContent = Math.floor(Math.random() * 6) + 1; // provide random btn 1 to 6
//   // printRandom.textContent = Math.floor(Math.random() * 10) +  4; // provide random btn 4 to 10
// };

// console.log(Math.PI);
// console.log(Math.E);

// let ex = 34.23452;
// console.log("round  -  " + Math.round(2.435453));
// console.log("floor  -  " + Math.floor(4.864523));
// console.log("Number(ex.toFixed(2)) -  " + Number(ex.toFixed(3)));  // 34.23
// console.log("ceil  -  " + Math.ceil(234.423));
// console.log("truncate  -  " + Math.trunc(5.2423)); // truncate/delete
// console.log("power(2, 3)  -  " + Math.pow(2, 3)); // 2^3 = 8
// console.log("squareroot  -  " + Math.sqrt(16)); // square root
// console.log("log( -  " + Math.log(10)); // loge(10)
// console.log("absolute  -  " + Math.abs(10)); // absolute value
// console.log("sign  -  " + Math.sign(-123.34)); // -1  0  1
// console.log("max(5,3,7)  -  " + Math.max(5, 3, 7));
// console.log("min(5,3,7)  -  " + Math.min(5, 3, 7));
// console.log("sin(45)  -  " + Math.sin(45));
// console.log("cos(45)  -  " + Math.cos(45));
// console.log("tan(45)  -  " + Math.tan(45));

// const msg = document.getElementById("msg");
// const clickable = document.getElementById("clickable");
// clickable.onclick = () => {
//   // by ternary operator
//   msg.textContent = clickable.checked ? "Check button Done!!" : "Try again";

//   // if (clickable.checked) {
//   //     msg.textContent = "Check button Done!!";
//   // } else {
//   //     msg.textContent = "Try again";
//   // }
// };

// let n = 1;
// switch (n) {
//   case 1:
//     console.log("Number is One");
//     break;

//   default:
//     console.log("Enter Number of 1");
//     break;
// }

// // switch (score) {
// //     case score => 200:
//         //  any modifucations
// //         break;
// // }

// // String Manupilation

// let interest = "Reading a book  ";

// console.log(interest.charAt(0));
// console.log(interest.indexOf('o'));  // comes first 'o'
// console.log(interest.lastIndexOf('o')); // comes last 'o'
// console.log(interest.length);
// console.log(interest.trim());
// console.log(interest.toUpperCase());
// console.log(interest.toLowerCase());
// console.log(interest.includes("R")); // check is available
// console.log(interest.includes(" ")); // check is available
// console.log(interest.repeat(2)); // 2 times
// console.log(interest.startsWith('R'));
// console.log(interest.endsWith('o'));
// console.log(interest.slice(0 , 4)); // provide 0 to 4 index, slice(1) 1 to end
// // console.log(interest.slice(start , end)); // provide 0 to 4 index

// let phoneNumber = '123-456-7890';
// let result1 = phoneNumber.replaceAll('-', ' ');
// console.log(result1);

// let result2 = phoneNumber.padStart(15, '0'); // add start
// console.log(result2);

// let result3 = phoneNumber.padEnd(15, '0');
// console.log(result3);

// let email = "test@gmail.com";

// console.log(email.slice(0, email.indexOf('@')));
// console.log(email.slice(email.indexOf('@') + 1));

// // handle invalid input [Mathod Chaining]
// // let fullName = window.prompt('Enter your name');
// // fullName = fullName.trim().charAt(0).toUpperCase() + fullName.trim().slice(1).toLowerCase();
// // console.log(fullName);

// // email is Valid or not
// let e = "test@example.com";
// function emailAuth(e) {
//   return e.includes("@") === true ? true : false;
// }
// console.log(emailAuth(e));

// // array with spread operator
// let numbers = [1, 2, 30, 4, 5];
// console.log("Array maximum Number is = " + Math.max(...numbers));

// // spread operator ( ... ) : allows an iterable such as an array/string/object to be expanded into seperate elements [unpacks the elements]
// let something = "hello unknown";
// let characters = [...something];
// console.log(characters);

// let fruits = ["Orange", "apple"];
// let vegitables = ["potatoes", "carrots", "celery"];
// console.log([...fruits, ...vegitables, "eggs", "milk"]);

// // rest parameter : (...rest) allow a function work with a variable number of arguments by bunding them into a array.
// // spread : expends an array into seperate elements
// // rest : bundles seperate elements into an array

// const food1 = "pizza";
// const food2 = "cold_cookies";
// const food3 = "cold_drinks";

// function openFridge(...foods) {
//   // take as no of args
//   console.log(foods);
//   console.log(...foods);
// }
// openFridge(food1, food2, food3);

// function sum(...numbers) {
//   let result = 0;
//   for (let num of numbers) {
//     result += num;
//   }
//   return result;
// }
// console.log(sum(45, 56, 2, 4));

// function combineStrings(...strings) {
//   return strings.join(" ");
// }
// console.log(combineStrings("Mr.", "Meet", "Dhameliya"));

