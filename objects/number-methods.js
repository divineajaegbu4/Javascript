const num = 214343.8973;

// to fixed
console.log("toFixed: ", num.toFixed(2));

// math.ceil
console.log("math.ceil: ", Math.ceil(num));

// math.floor
console.log("math.floor: ", Math.floor(num));

// math.round
console.log("math.round: ", Math.round(num));

// math.random
console.log("math.random: ", Math.random());

// Calculate using math.random
let max = 20;
let min = 15;

const calc = Math.floor(Math.random() * (max - min)) + 2;
console.log("calc: ", calc);

//Challenge area
const makeGuess = function(guess) {
  let max = 9;

  let calcGuess = Math.floor(Math.random() * (max - guess) + 1);
  return guess === calcGuess;

  // return Math.floor(Math.random() * (max - guess) + 1);
}

console.log("guess: ", makeGuess(4));