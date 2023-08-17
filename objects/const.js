// When to use const. If the value is not going to reassign use const
// When to use const. If the value is going to reassign use let

let name = "Kenneth";
console.log("let: ", name);
name = "Divine";

console.log("let: ", name);

//Using const
const person = {
  age: 45,
  name: "woman"
}

// person = {}: You cannot reassign const
// But you can reassign the property of person when uses const variable

person.age += 1;

console.log(person);