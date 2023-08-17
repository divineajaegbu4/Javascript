// Challenge Area

const todos = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"];

// Print the todos array
console.log("Todos: ", todos);

// Get the length property of not todos array
console.log("Length: ", `You have ${todos.length} todos`);

// Get the first todos and second to last todos array by index
console.log("First-todos: ", `Walk the ${todos[0]}`);

// Using length property to print the second to last todos array
console.log("SecondToLastTodos: ", `Walk the ${todos[todos.length - 2]}`);

// Challenge Area for Manipulating Arrays

// I can use shift and unshift to remove first array and replace it

todos.shift();
todos.unshift("Wow!")


// I can use pop and push to remove and replace the last array

todos.pop();
todos.push("I am blessed by the power of God!")


// I can use normal todos array indexes to remove and add

todos[2] = "The grace of God is with me!"


console.log("Manipulate-todos-array1: ", todos);

// I can use splice array method to start, deleteCount, and replace items

todos.splice(1, 3, "My God has signed it that I ought to have money!", "My Lovely Father");

// Challenge area for using forEach loop method array
todos.forEach((todo, i)=> {
  const num = i + 1
  console.log(`${num}. ${todo}`);

})

// Using for loop
for(let i = 0; i <= todos.length - 1; i++) {
  const num = i + 1;
  console.log(`for-loop: ${num}. ${todos[i]}`);
}

console.log("-------------------------");
// Reverse the todos array
for(let i = todos.length - 1; i >= 0; i--) {
  const num = i + 1;
  console.log(`for-loop: ${num}. ${todos[i]}`);
}

console.log("Manipulate-todos-array: ", todos);

// Challenge Area
const newTodos = [
  {
    todo: "Buy food",
    completed: true
  },

  {
    todo: "Ice cream",
    completed: false
  },

  {
    todo: "Travel to lagos",
    completed: true
  },

  {
    todo: "Order a meal",
    completed: false
  },
];


// Challenge Area
console.log("------------------------------------Filter");

const filteredTodos = (todo) => {
  return todo.filter((todo) => !todo.completed);
}

const filteredTodosValues = filteredTodos(newTodos);

console.log("Filter: ", filteredTodosValues);


console.log("-------------------------------------");

// const deleteTodo = newTodos.splice(0, 1);



const myTodos = ["todo 1", "todo 2", "todo 3", "todo 4", "todo 5"];

const todo = function(todo, todoText) {
  const todoFn = (todo) => todo.todo === todoText
  const index = todo.findIndex(todoFn);


  if(index > - 1) {
    newTodos.splice(index, 1, {todo: "Changed", completed: true})
  }
  // return {
  // //   byIndex: index,
  // //   byText: todo[index]
  // // };
}



// Find by text using find
const findTodoByText = function(todo, todoText) {
  const todoTextFn = (todo) => todo.todo === todoText;
  return todo.find(todoTextFn);
}

// Using indexOf
const findByIndexOf =  function(todo, todoText) {
  const newTodoIndex = todo.indexOf(todoText);

  return myTodos[newTodoIndex];
}



const todoArr = newTodos;

todo(todoArr, "Travel to lagos");
console.log("findIndex: ", newTodos);

const findTodoByTextValue = findTodoByText(todoArr, "Order a meal");
console.log("find: ", findTodoByTextValue);

const findByIndexOfValue = findByIndexOf(myTodos, "todo 5");
console.log("indexOf: ", findByIndexOfValue);

