// ******** Function ********

// Function declaration
function findAge1(birthyear) {
  return 2024 - birthyear;
}

// Function expression  (parameter)
const findAge2 = function (birthyear, name) {
  console.log(name + "'s age is " + (2024 - birthyear));
};

console.log('My Father Age is : ' + findAge1(1981)); // calling/invoking/runing
console.log('My Mother Age is : ' + findAge1(1984)); // (arguments)

findAge2(1981, 'Jagdishbhai');
findAge2(1984, 'Dayaben');

// Arrow functions : no this keyword

const findAge = birthYear => 2024 - birthYear;
console.log('Current  Age is : ' + findAge(1991));

const yearsUntilRetire = (birthYear, name) => {
  const age = 2024 - birthYear;
  return `${name} retires in ${65 - age} years`;
  //   return `${name} retires in ${65 - findAge(birthYear)} years`;  //function calling another
};
console.log(yearsUntilRetire(1991, 'monarch'));

// // ********** FUnction Statements And Expressions *********

// var whatDoYouDo = function(job , firstName){  // function expressions.

//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//             break;

//         case 'driver':
//             return firstName + ' drives a cab in Lisbon.';
//             break;

//             case 'designer':
//             return firstName + ' designs beautiful websites.';
//             break;

//             default:
//             return firstName + ' does something else.';
//             break;
//     }
// }
// console.log(whatDoYouDo('designer' , 'Meet'));
// console.log(whatDoYouDo('teacher' , 'John'));
// console.log(whatDoYouDo('worker' , 'Mike'));

// // Js Expression : Are pieces of code that always produce a value,and it dosen't matter how long they are as long as the code results in a single.
// console.log(4*3); // give some one result is a expression.

// /*
// bouring theory

// Exculation Context : All js code need runs in an environment
//                      A box or container which stores variables in ehich a piece of code is evaluated and executed.

// function Hoisting : In the creation phase of the execution context in ex-1 case, the global execution context.

// -The function declaration calculateAge is stored in the variable object and even before the code is executed.

// -then enter the execution phase,the calculateAge() is already available for us to use it.

// -(So we don't have to first declare the function and then use it, but we can also first use it like this and only later in our code declare it.)

// **which was that this only works for function declarations

// **but there is not works Function Expressions.  (ex-2)

// */

// // ex-1
// calculateAge(2004);
// function calculateAge(birthyear) {
//     return 2023 - birthyear;
// }

// // ex-2
// // leftYears(2004);  --> this function is not a function declaration but a function expression and Hoisting with functions only works for function declarations.
// var leftYears  = function(birthyear){
//     return 60 - calculateAge(birthyear);
// }

// leftYears(2004);  // it's works.

// /*
// In js wherever we create a not assigned variable this type -> always have the data type undefined.

// hoisting in variables : create an age variable, before we declare it so we have undefined.

// (ex-3)creation phase of the variable object what happens is that the code is scanned for variable declarations and the variables are then set to undefined.

// (ex-4)So imagine that we wouldn't even have this variable declaration here.
// If we then attempted to use the variable we wouldn't get undefined, but we would get  an error.
// Because then we wouldn't have any definition

// */

// // ex-3
// console.log(length);
// var length = 5 ;
// console.log(length);

// // ex-4
// // console.log(width);  -> throw error.
// // var length = 5 ;  => not gives a definition

// // ex-5
// console.log(a); // undefined
// var a = 10;  //global execution context object.
// console.log(a); // 10

// function abc() {

//     console.log(a); //undefined
//     var a = 20;
//     console.log(a); // 20

// }
// abc();
// console.log(a); // 10

// /*
// abc function here gets its own execution context object in which we can also store an age variable, and it can be the same name.

// It really doesn't matter because these are two completely different variables.

// This variable a is defined in the variable object

// of the execution context object of the a function

// while this a variable is defined in the variable object of the global execution context object.

// So each one gets its own variable object,we have two different variables,and so the results when we print them are different.

// And we can see that the Hoisting

// */

// // Scope chain read screenshots

// // First scoping example

// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);  // scoping chain

//     }
// }

// // diffrence btn execution stack and scope.

// var a = 'Hello!';
// one();

// function one() {
//     var b = 'Hi!';
//     two();

//     function two() {
//         var c = 'Hey!';
//         three();
//     }
// }
// function three () {
//     var d = 'John';
//     console.log(a + d );
//     // console.log(a + d + c + d );
// }

// this keyword. -> point to our object(default window object)

console.log(this); // window object

function add(a, b) {
  console.log(a + b);
  console.log(this); // window object
}
add(1, 2);

var white = {
  name: 'white',
  salary1: 10000,
  salary2: 20000,
  totalSalary: function () {
    console.log(this); // white object
    console.log('total salary is : ' + (this.salary1 + this.salary2));

    // function dummy(){
    //     console.log(this); // window object
    // }
    // dummy();
  },
};

white.totalSalary();

var honk = {
  name: 'honk',
  salary1: 15000,
  salary2: 18000,
};

honk.totalSalary = white.totalSalary;
honk.totalSalary();
