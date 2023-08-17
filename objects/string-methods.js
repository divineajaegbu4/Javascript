const name = " Divine Ajaegbu ";

// Length property
console.log("length: ", name.length);

// Convert to uppercase method
console.log("toUpperCase: ", name.toUpperCase());

// Convert to lowercase method
console.log("toLowerCase: ", name.toLowerCase());

// Includes method
console.log("includes: ", name.includes("ne"));

// Trim - removes whitespace
console.log("trim: ", name.trim());

console.log("------------------------------------");
// Challenge Area
const isValidPassword = function(password) {
  return {
    length: password.length,
    includes: password.includes("password"),
  }
}

console.log("length: ", isValidPassword("divine").length);
console.log("includes: ", isValidPassword("ldkjfkdjf@password$").includes);

console.log("----------------------------------");
const isValidPasswords = function(password) {
  return password.length >= 8 && !password.includes("password");

}

console.log(isValidPasswords("adfd"));
console.log(isValidPasswords("divineruth43"));
console.log(isValidPasswords("kjfdk35password34343$"));