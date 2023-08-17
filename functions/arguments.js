// Multiple Argument

const multipleArgument = function(a, b, c) {
  return a + b * c;
}

const multipleArgumentValue = multipleArgument(2, 5, 7);

console.log(multipleArgumentValue);


// Default Arguments

const defaultArguments = function (name = "Divine", age= 6) {
  return "Name: " + name + "  Age: " + age;
}

const defaultArgumentsValue = defaultArguments(undefined, 50);

console.log(defaultArgumentsValue)


// Challenge area

const getTip = function(total = 40, tipPercent) {
   // return total * tipPercent + "%" + "  tip";
   let percent = tipPercent * 100;
   let tip = total * tipPercent;

  return `A ${percent}% tip on $${total} would be $${tip} `
}


const tipValue = getTip(undefined, .25);
const otherTipValue = getTip(undefined, .3);

console.log(tipValue);
console.log(otherTipValue);