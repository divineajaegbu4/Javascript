// && - True if both sides are true. otherwise False;
// || - True if at least one side is true. otherwise False;

const temp = 4;

if(temp >=20 && temp <= 100) {
  console.log("It's pretty nice.")
}else if (temp <=5 || temp >= 5) {
  console.log("It's funky cool!")
}else {
  console.log("Well done!")
}


// Challenge area

const isGuestOneVegan = true;
const isGuestTwoVegan = false;

if(isGuestOneVegan && isGuestTwoVegan) {
  console.log("Only offer one vegan dishes")
}else if(isGuestTwoVegan || isGuestOneVegan) {
  console.log("Make sure to offer up some vegan dishes")
}else {
  console.log("Offer up anything on the same menu")
}