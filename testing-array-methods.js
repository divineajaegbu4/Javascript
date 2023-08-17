const indices = [];
const array = ["a", "b", "a", "c", "a", "d"];
const element = "a";
let idx = array.indexOf(element);
// while (idx !== -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1);
// }
// console.log(indices);
// [0, 2, 4]
//

// for(; idx !== -1; idx++) {
//   indices.push(idx);
//   idx = array.indexOf(element)
// }
//
// console.log(indices);
//
// while(idx !== -1) {
//   indices.push(idx);
//   idx = array.indexOf(element, idx + 1)
// }
// console.log(indices);

//
// array.forEach((arr, index)=> {
//   if(idx !== -1) {
//     indices.push(idx);
//     idx = arr.indexOf(element)
//   }
// })
//
// console.log(indices);

let findIndexMethod = array.findIndex((arr, element) => {
  return arr === "a"
})

