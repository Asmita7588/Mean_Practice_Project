import multiply, { add } from './importExport.js';

//callbacks - is function passes as arguments to another function , intend to be excuted later
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); 
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);


//--------------------------------------
//ES6 features

//let and const

//2) arrrow function
//old way

function add1(a, b){
    return a + b;
}

//new way
const sub = (a, b) => a-b;

//3. Template Literals
//it inject variable directly in string
const name = "asmita";
console.log(`Hello, my name is ${name}!`); // "Hello, my name is asmita!"


// 4. Destructuring Assignment

const user = {firstName : "asmita", lastName : "Girhepunje", age : 23}

const {age, firstName} = user;
console.log(`we have unpacked users values from user object is ${age} ${firstName}`);

//5.module
// importExport.js
// import multiply, { add } from './importExport.js';

console.log(add(2, 3));     
console.log(multiply(2, 3)); 

//6 classes
// spread and rest operator

const original = [1, 2, 3]
const copy = [...original]

//meriging 

const newArr = ["banana", "apple"]

const newArr1 = ["potato", ...newArr, "papaya"]
console.log(`new merged array ${newArr1}`)


//rest operator

function sum(...numbers){
   return numbers.reduce((total, m)=> total + m, 0)  
}


console.log(sum(1, 2, 3, 4));


