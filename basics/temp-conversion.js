const fahrenheit = 32;

// Convert 32 degrees fahrenheit to 0°C;
const calculateCelsius = (fahrenheit - 32) / (5/9);
const celsius = calculateCelsius + ' ' + "°C";

// Print out the Celsius
console.log("Celsius", celsius);

// Convert 32 degrees fahrenheit to 273.15k
const calculateKelvin = (fahrenheit + 459.67) * 5/9;
const kelvin = calculateKelvin + ' ' + "K";

// Print out the Kelvin
console.log("Kelvin", kelvin);


