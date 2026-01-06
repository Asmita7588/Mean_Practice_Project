//Delaration 

let data = 10;
const fixedValue = 23;

// Promises

// promise represent future available data

let promise = new Promise((resolve, reject) =>{

    resolve("success promise");
});

// with condition

let promises1 = new Promise((resolve, reject)=>{
    let isResult = true;

    if(isResult){
        resolve("got the result");
    }else{
        reject("failed to get result");
    }
});


//how to consume Promises

promises1.then(result=>{
    console.log(result)
})
.catch(error =>{
    console.log(error);
})


// with time

let promise2 = new Promise((resolve, reject) =>{
    setTimeout(()=>{resolve("Data laded after 3 seconds");},3000)
})

promise2.then(data =>{
    console.log(data);
})


//scoping
const globalVar = "I am global";

function outerFunction() {
    const outerVar = "I am outer";

    function innerFunction() {
        console.log(globalVar, outerVar, "and I am inner");
    }
    
    innerFunction();
}

// function Hoisting
greet(); 

function greet() {
    console.log("Hello miss!");
}

//variable hoisting

//Variable Hoisting (var)
//Variables declared with var are hoisted, but their assignment is not. JavaScript knows the variable exists, but initializes it as undefined.

console.log(myUser); // Output: undefined
var myUser = "Asmita";
console.log(myUser);


//blocking and non-blocking
const fs = require('fs');

const data3 = fs.readFileSync('/file.md'); 

console.log(data3);
console.log("I have to wait for the file to finish reading!");


// non-blocking

fs.readFile('/file.md', (err, data) => {
    if (err) throw err;
    console.log(data); 
});

console.log("run immediately! didn't wait for the file.");


//call()
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + " from " + city + ", " + country;
  }
}

const user1 = { firstName: "asmita", lastName: "girhepunje" };

// usage: function.call(object, arg1, arg2...)
console.log(person.fullName.call(user1, "India", "USA"));

//apply()

// usage: function.apply(object, [arg1, arg2])
console.log(person.fullName.apply(user1, ["London", "UK"]));

//bind()

const user2 = {firstName : "Asmita", lastName : "Girhepunje"};

const bindFunction = person.fullName.bind(user2, "praris", "France");

console.log(bindFunction());


//before with promises
function getUserData() {
    fetch('https://api.example.com/user')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
}


//after with async/await

async function getUserData() {
    try {
        const response = await fetch('https://api.example.com/user'); // Waits here
        const data = await response.json(); // Waits here too
        console.log(data);
    } catch (err) {
        console.error("Something went wrong!", err);
    }
}


//function currying

function curriedAdd(a) {
    return function(b) {
        return a + b;
    };
}
console.log(curriedAdd(2)(3));   