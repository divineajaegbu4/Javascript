const isAccountLocked = false;
const userRole = "role";

if(isAccountLocked) {
    console.log("It is freezing outside!")
}else if (userRole === "admin") {
    console.log("It is user role of admin")
}else {
    console.log("Welcome!")
}


// Challenge area
const temp = 60;

if(temp <= 45) {
    console.log("It is freezing outside")
}else if (temp >= 100) {
    console.log("It is hot outside")
}else {
    console.log("Go for it. It is pretty nice.")
}
