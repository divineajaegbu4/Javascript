let fahrenheit = 32;

// Convert 32 degrees fahrenheit to 0°C;
let calculateCelsius = (fahrenheit - 32) / (5/9);
let celsius = calculateCelsius + ' ' + "°C";

// Print out the Celsius
console.log("Celsius", celsius);

// Convert 32 degrees fahrenheit to 273.15k
let calculateKelvin = (fahrenheit + 459.67) * 5/9;
let kelvin = calculateKelvin + ' ' + "K";

// Print out the Kelvin
console.log("Kelvin", kelvin);


