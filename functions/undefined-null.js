let name;
name = "Divine"

// Undefined for variables

if(name === undefined) {
  console.log("Value hasn't assigned to variable name")
}else {
  console.log(name)
}


// Undefined for functions
const square = function(num) {
  return num;
}

const value = square()
console.log(value)

let age = 45;

// age = undefined;
age = null

console.log(age)