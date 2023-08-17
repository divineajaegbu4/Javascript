// Global scope (convertFahrenheitToCelsius, convertFahrenheitToCelsiusValue, otherConvertFahrenheitToCelsius)
    // Local scope (calculateCelsius, fahrenheit)
        // Local scope(isFreezing)

// Scope are the variables you defined both global and local.


const convertFahrenheitToCelsius = function(fahrenheit) {
  let calculateCelsius = (fahrenheit - 32) * 5/9

  if(calculateCelsius <= 0) {
    let isFreezing = true;
    console.log(isFreezing)
  }
  return  calculateCelsius + " " + "°C";

}

const convertFahrenheitToCelsiusValue = convertFahrenheitToCelsius(32);
const otherConvertFahrenheitToCelsiusValue = convertFahrenheitToCelsius(68);

console.log(convertFahrenheitToCelsiusValue)
console.log(otherConvertFahrenheitToCelsiusValue)