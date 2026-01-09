//1. Array.prototype.flat() and flatMap()

const nested = [1, 2,[3, 4, [5, 6]]]

console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]]

//for deeper level
console.log(nested.flat(2));   // [1, 2, 3, 4, 5, 6]

//2 .Object.fromEntries()
const entries = [['name', 'Alice'], ['age', 25]];
const userObject = Object.fromEntries(entries);

console.log(userObject); // { name: 'Alice', age: 25 }

//3 String.prototype.trimStart() and trimEnd()
const greeting = "   Hello World!   ";
console.log(greeting.trimStart()); // "Hello World!   "
console.log(greeting.trimEnd());   // "   Hello World!"

// 4. Optional Catch Binding

// Old Way
try {
  
} catch (error) { // The 'error' variable is required here
  console.log("Something went wrong");
}

// ES10 Way
try {
  
} catch { // No parentheses needed!
  console.log("Something went wrong");
}

//5 Symbol.prototype.description

const mySymbol = Symbol("This is a secret ID");
console.log(mySymbol.description); // "This is a secret ID"


//6. stable sort method

const array = [4,3,3,5]

console.log(Array.sort(array)) // [3, 3, 4, 5]


