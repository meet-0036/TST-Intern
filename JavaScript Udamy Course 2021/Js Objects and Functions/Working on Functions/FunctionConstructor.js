
// Global object
var john = {

    name : 'John',
    yearOfBirth : 1990,
    job : 'teacher'

};

console.log(john);

// Function Constructor : newly created object inherits from the constructor's prototype property.

var Person = function(name1, yearOfBirth, job) {   // Empty Object is created.(Constructor)

    this.name = name1;                             // this variable of the function points to the empty object  (not points to the global object) that was created in the begining by the new operator.
    this.yearOfBirth = yearOfBirth;
    this.job = job;

    // this.calculateAge = function () {
        
    //     console.log(this.name + ' age is : ' + (2023 - this.yearOfBirth));

    // } 
}

Person.prototype.lastName = 'smith';
Person.prototype.calculateAge = function() { // also we can use it : it's in the prototype property of our function constructor.
    
    console.log(this.name + ' age is : ' + (2023 - this.yearOfBirth));

} 

// These instances inherit properties & methods from "Person.prototype"
var john = new Person('John',1990 , 'teacher');  // new : create new john Object/Instance (Use empty person object) 
var jane = new Person('Jane', 1992, 'designer');
var mark = new Person('Mark', 1994,  'retired');

john.calculateAge(); 
jane.calculateAge(); 
mark.calculateAge(); 

console.log(john.lastName);  // use Person property(lastName) by inherit it.
console.log(jane.lastName);  //               ||
console.log(mark.lastName);  //               || 



// Object.create
var personProto = {
    calculateAge : function(){
        console.log(2023 - this.yearOfBirth);
    }
};

var leo = Object.create(personProto,);  // object.create builds an object that inherits directly from the one that we passed into the first argument.
leo.name = 'Leo';
leo.yearOfBirth = 1998;
leo.job = 'teacher';

console.log(leo);

var jane = Object.create(personProto,
    {
        name : {value : 'jane'},;
        yearOfBirth : {value : 1988},;
        job : {value : 'designer'},;
    }
);
console.log(jane);


// useful infromation
console.log(john); // show hierarchy of inherited Objects.
console.log(Person.prototype);
console.log(john._proto_ === Person.prototype);
console.log(john.hasOwnProperty('job'));  //true
console.log(john.hasOwnProperty('lastName')); // false
console.log(john instanceof Person);  // true
console.log(Person instanceof Object);  // true  

var x = [1,2,3,4,5];

console.log(console.info(x));  // JS creates as Object-Array[]
console.log(x.length);




/*

JS prototype-based language,inheritance works by this called prototypes.
It means that each and every JS object has a prototype property.
John to inherits Person object we have to add that Person's prototype property

Any other object created by the Person constructor would inherit this method and then call it.
 
Person prototype is not the prototype of the person itself,but of all instances that I createdthrough the Person blueprint,like john.

the Person's prototype property is the prototype of John.
Person object itself is an instance of an even bigger constructor, which is the Object object.
Each and every object that we ever create is an instance of the Object constructor
which has a bunch of methods in its prototype property.

Person object inherits these methods and can call them. + the john object also inherits these methods and can also use them -> prototype chain.

prototype chain 
When we try to access a certain method or property on an object, JS will first try to find that method on that exact object.
But if it cannot find it, it will look in the object's prototype, which is the prototype property of its parent.
So it moves up in the prototype chain.
If the method is still not there,this continues until there is no more prototype to look at, which is null.
that has no prototype,and is therefore the final link in the prototype chain.undefined is returned.

example,john object could call the hasOwnProperty() 
that is stored in the Object Prototype property.

*/