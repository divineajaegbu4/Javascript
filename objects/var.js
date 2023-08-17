// var is pretty much similar to let
// You can reassign var
//  is a function scope not a block scope
// You can declare two variables with the same name using var

//Examples

// A function scope not a block scope
if(10 === 10) {
  var active = 1
  console.log(active);
}

console.log("var: ", active);

// for let: is not a block scope
// if (10 === 10) {
//   let name = "Divine"
// }
//
// console.log("let: ", name);

// var is not a function scope
// let functionScope = function() {
//   var firstName = "Louis"
// }
//
// functionScope()
// console.log(firstName);

// let is not a function scope
n

// declare two variables with the same using var
var car = "Camry";
console.log(car);
var car = "Toyota";
console.log(car);

// // You cannot declare two variables with the same using let and const
// const house = "white";
// const house = "red";
//
// console.log(house);

// Another examples of using var
age = 90;
console.log("age: ", age);
var age;

console.log("another age: ", newAge);
var newAge = 10;



