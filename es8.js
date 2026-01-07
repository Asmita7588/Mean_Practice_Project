//1) async/ await

// The API we are calling
const API_URL = "https://jsonplaceholder.typicode.com/users/1";

// Implementation
async function getUserData() {
    try {
        console.log("Fetching...");
        
        const response = await fetch(API_URL); // wait until headers arrive
        const data = await response.json();    // wait until body is parsed
        
        console.log("User Name:", data.name);
    } catch (error) {
        console.error("Connection failed:", error);
    } finally {
        console.log("Process complete.");
    }
}

getUserData();

//2. Object.values() & Object.entries()
const cart = {
    laptop: 1200,
    mouse: 25,
    keyboard: 50
};

// 1. Use Object.values() to sum the prices
const prices = Object.values(cart); // [1200, 25, 50]
const total = prices.reduce((acc, price) => acc + price, 0);
console.log(`Total Cost: $${total}`);

// 2. Use Object.entries() to build a string list
Object.entries(cart).forEach(([item, price]) => {
    console.log(`Item: ${item.padEnd(10, '.')} Price: $${price}`);
});


//3. String Padding Implementation

// Clock Format (padStart)

const hours = 8;
const minutes = 5;
const seconds = 2;

const time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
console.log(time); // "08:05:02"

// Masking Credit Card (padStart)

const cardNumber = "1234567890124444";
const lastFour = cardNumber.slice(-4);
const masked = lastFour.padStart(cardNumber.length, "*");
console.log(masked); // "************4444"


//4. Trailing Commas
     const myProjectTeam = {
    lead: "Sarah",
    design: "Mike",
    dev: "Alex", 
};

function addEmployee(
    name,
    role,
    salary, 
) {
    // function logic
}  

//5. Object.getOwnPropertyDescriptors()

const person = {
    name : "asmita"
};

Object.defineProperty(person, name , {writable : false});

const clonedPerson = Object.defineProperties( {}, Object.getOwnPropertyDescriptors(person))

clonedPerson.name = "ankita" // it will failed

console.log(clonedPerson.name); //asmita