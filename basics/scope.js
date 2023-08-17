// Lexical scope (static scope)
// Global scope - Defined outside all code blocks
// Local scope - Defined inside a code block

// In a scope you can only access variables define in that scope or any nested code block

// Global scope(variable) - varOne
     // Local scope(variable) - varTwo
         // Local scope(variable) - varTwo
    // Local scope(variable) - varTwo

const varOne = "Var one";

const isVar = true

if(isVar) {
  console.log(varOne);
  let varTwo = "Var Two"
  console.log(varTwo)
  let varThree = "Var Three"

  if(isVar) {
    let varTwo = "New York"
    let varFour = "Baby Divine"
    console.log("Nested", varTwo)
    console.log("Nested", varThree)
  }

}

if(isVar) {
  let varTwo = "New Var Two"
  console.log(varTwo)
}

// console.log(varTwo)