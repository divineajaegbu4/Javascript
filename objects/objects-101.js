let myBook = {
  title: "124",
  author: "George orwell",
  pageCount: 354
}

console.log(myBook);
console.log(`${myBook.title} by ${myBook.author}, pageCount ${myBook.pageCount}`);

// To redeclare an object
myBook.title = "Divine"
console.log(`Redeclaration: ${myBook.title} by ${myBook.author}, pageCount ${myBook.pageCount}`);

// Challenge area
const myPerson = {
  name: "Divine",
  age: 20,
  location: "Nigeria"
}

console.log(myPerson);
console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`);

// Redeclare myPerson and update age
myPerson.age = myPerson.age + 1;
console.log(`${myPerson.name} is ${myPerson.age} and lives in ${myPerson.location}`);