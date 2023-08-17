// Types of Operator
// === - Equality Operator
// !== - not Equality Operator
// < - Less than
// > - Greater than
// <= - Less than or Equal to
// >= - Greater than or Equal to

// Example of Operator
let temp = 23;

// Using if statement for temp
if(temp <=10) {
    console.log("Hi, it is freezing");
}

if(temp >= 23) {
    console.log("Not sure!")
}

let isFreezing = temp !== 20;

// Print out the isFreezing value
console.log("isFreezing", isFreezing);

// Challenge area
let age = 20
let childAge = 7;
let seniorAge = 65;


let isChildAge = age >= childAge;
let isSeniorAge = age === seniorAge;


// Using if statement for age
if(age <= 18) {
    console.log("Wow!")
}

if(age >= 20) {
    console.log("Correct age for senior discount!")
}

// Print out the both senior and child age
console.log("childAge", isChildAge);
console.log("seniorAge", isSeniorAge);

