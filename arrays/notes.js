const notes = ["Note 1", "Note 2", "Note 3"];

// Print all the notes array
console.log("notes: ", notes);

// Get the length property array
console.log("length:", notes.length);

// Get the notes array by the index and it starts from 0
console.log("index 1: ", notes[0]);
console.log("index 2: ", notes[1]);
console.log("index 3: ", notes[2]);

// Get the index of a notes array that has not been declared
console.log("undefined-index: ", notes[5]);

// Get the index of a notes array using length property
console.log("length-index: ", notes[notes.length - 1]);

// Manipulate arrays
console.log("notes: ", notes);

// console.log(notes[1] = "Hello world!");

console.log("splice: ", notes.splice(0, 2, "Hello", "Hi"));

console.log("another-notes: ", notes);

console.log("add: ", notes.push("mine"));//Add the last name of the array
console.log("pop: ", notes.pop());  // Remove the last name of the array

console.log("remove-first-array: ", notes.shift());//Remove the first name of the array
console.log("add-first-array: ", notes.unshift("items"));//Add the first name of the array



console.log("all-notes: ", notes); //Print the latest notes array


// Exercise

let names = ["Chiding", "Rebuke", "Shed-rack", "Pinyin", "Divine"];

const guessNames = function(name) {
  const X = 30;
  const Y = 20;

  const CALC_RANDOM = Math.floor(Math.random() * (X - Y) +  1);

  return name.splice(1, 3, CALC_RANDOM);
}

const guessNamesValue = guessNames(names);

console.log("GuessNames: ", guessNamesValue);

console.log("guessNes: ", names);

// Using forEach
notes.forEach((note, index)=> {
  console.log("element: ", note);
})

for(let i = 0; i < notes.length; i++) {
  console.log(notes[i]);
}

// Counting reverse
for (let i = notes.length - 1; i >= 0; i--) {
  console.log("reverse: ", notes[i]);
}


const newNotes = [
  {
    title: "My new born baby",
    body: "My new born baby is so elegant!"
  },

  {
    title: "Our breakfast",
    body: "We normally eat our breakfast at the right time"
  },

  {
    title: "Focus on your studies",
    body: "Is good to focus on your studies so that you will not be distracted."
  },
];

console.log("-------------------------------------filter");
// Filter() method array
const filterNewNotes = (note, query) => {
  return note.filter((note, index) => {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());

    return isTitleMatch || isBodyMatch;
  })
}

const filteredNewNotesValues = filterNewNotes(newNotes, "Good")
console.log("filter: ", filteredNewNotesValues);

console.log("--------------------------------------");

console.log(newNotes[0]);

const findNote = function(notes, noteTitle) {
  return notes.find((note) => {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });

}

// const findNote = function(notes, noteTitle) {
//   const index = notes.findIndex((note) => {
//     return note.title.toLowerCase() === noteTitle.toLowerCase();
//   });
//
//   return notes[index]
// }

const findNoteValue = findNote(newNotes, "our breakfast");
console.log("findNote: ", findNoteValue);



