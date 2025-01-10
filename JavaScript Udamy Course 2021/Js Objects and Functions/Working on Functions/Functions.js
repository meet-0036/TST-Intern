// ****************First class function ****************
var years = [1992, 1998, 2000, 2004, 2008, 2012];

// 1. Function pass as argument
function arrayCalc(array , func) {  // func  callback function
    
    var arrayResult = [];
    for (let i = 0; i < array.length; i++) {
        arrayResult.push(func(array[i]));   
    }
    return arrayResult;
}

// multiple function can use at similar places.
function calculateAge(element) {
    return 2023 - element;
}

function isfullAge(element) {
    console.log(element);
    return (element >= 18);  // return true or false.
}

function maxHeartRate(element) {
    
    if (element >= 18 && element <= 81) {
        return Math.round(206.9 - (0.67 * element));
    } 
    else {
        return -1;
    }
}

var ages = arrayCalc(years , calculateAge);  // calculateAge is a callback function
console.log('Ages : ' + ages);

var fullAge = arrayCalc(ages , isfullAge);
console.log('Age is FullAge or not : ' + fullAge);

var heartRate = arrayCalc(ages , maxHeartRate); 
console.log('heartRate : ' + heartRate);






// 2. Functions returning functions
function interviewQuestion(job) {

    if (job === 'designer') {
        return function(name) {
            console.log(name , ', can you explain what UX design is ?');
        }
    } 
    else if(job === 'teacher'){
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else {
        return function(name) {
            console.log('Hello '+ name + ', what do ypu do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');  // pass in Function
teacherQuestion('John');                             // pass in returning function 

var designerQuestion = interviewQuestion('designer'); 
designerQuestion('Mark');

interviewQuestion('teacher')('Jonas');               //  returning Function(actual function(start execution))






// 3. IIFE : Immediately Invoked Function Expression  ()(); => Data privacy.

// for (let I = 0; I < 10; I++) {  // extra for try.
    
(function() {
    let score = Math.random() * 10;
    console.log(score >= 5);
})();

(function(goodLuck) {
    let score = Math.random() * 10;
        console.log(score >= 5 - goodLuck);
    })(5);  //

    // }

// () => Inside this a Js known as function declaration.
    

    


    

