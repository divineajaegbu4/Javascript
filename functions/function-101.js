// function - input {argument}, code, output{return value}


const greetUser = function() {
  console.log("Welcome User!")
}

greetUser()
greetUser()
greetUser()

const square = function(num) {
  return num * num

}

const value = square(3);
const otherValue = square(20);

console.log(value)
console.log(otherValue)


// Challenge Area

const convertFahrenheitToCelsius = function(fahrenheit) {
   let calculateCelsius = (fahrenheit - 32) * 5/9
   return  calculateCelsius + " " + "°C";

}

const convertFahrenheitToCelsiusValue = convertFahrenheitToCelsius(32);
const otherConvertFahrenheitToCelsiusValue = convertFahrenheitToCelsius(68);

console.log(convertFahrenheitToCelsiusValue)
console.log(otherConvertFahrenheitToCelsiusValue)