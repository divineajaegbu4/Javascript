let myBook = {
  title: "124",
  author: "George orwell",
  pageCount: 354
};

let otherBook = {
  title: "People's history",
  author: "Lukas ruth",
  pageCount: 678
}

// Use function to make the different object reusable
let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
  // console.log(`${book.title} by ${book.author}`);
}

let myBookValue = getSummary(myBook)
let otherBookValue = getSummary(otherBook)

// To get function object
console.log("myBook: ", myBookValue.summary);
console.log("otherBook: ", otherBookValue.pageCountSummary);

// Challenge Area
const conversionOfFahrenheitToCelsiusAndKelvin = function(fahrenheit) {
  let calculateCelsius = (fahrenheit - 32) / 5/9;
  let calculateKelvin = (fahrenheit + 459.67)  * 5/9;

   return {
     fahrenheit: fahrenheit,
     celsius: `${calculateCelsius}°C`,
     kelvin: `${calculateKelvin}K`
   }
}

const fahrenheitValue = conversionOfFahrenheitToCelsiusAndKelvin(32);

// To get the whole function object
console.log(fahrenheitValue);

// To get the function object
console.log("Celsius: ", fahrenheitValue.celsius);
console.log("Kelvin: ", fahrenheitValue.kelvin);

