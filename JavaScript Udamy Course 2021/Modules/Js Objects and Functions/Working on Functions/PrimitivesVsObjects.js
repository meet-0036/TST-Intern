// Primitives
var a = 22;
var b = a;        // copy value from a. and b stored at new memory.
a = 46;

console.log('Primitve a : ' + a);
console.log('Primitive b : ' + b);


// Objects
var o1 = {
    name : 'John',
    age : 21
};
var o2 = o1;        //  create a new reference which points to the first object,
o1.age = 23;
console.log('Object o1 age : ' + o1.age);
console.log('Object o2 age : ' + o2.age);



// Functions
var age = 23;

var obj = { 
    name : 'Jonas',
    city : 'Lisbon'
}

function change(a,b) {
    a = 27;
    b.city = 'San Francisco'
}

change(a, obj);
console.log("After pass Primitives & Objects inside the function.");
console.log('Primitive age : ' + a);
console.log('Object obj City : ' + obj.city);


/*
primitives actually hold that data inside of the variable itself.

Variables associated with objects that contain a reference to the place in memory

so the object one and object two variables both hold a reference that point to the exact same object in the memory.

*/