//ES7 FEATURES

//1. Array.prototype.includes()

const pets = ['cat', 'dog', 'bat'];

// Old Way
if (pets.indexOf('cat') !== -1) {
    console.log("Found it!");
}

// ES7 way
if (pets.includes('cat')) {
    console.log("Found it!");
}

//2. Exponentiation Operator (**)


// Old Way

const cubic = Math.pow(2, 3); // 8 (2 * 2 * 2)

// ES7 Way
const cubicES7 = 2 ** 3; // 8

//shorthand supports assignment
let num = 2;
num **= 3; // num is now 8


//to add custome method in all arrays

Array.prototype.last = function() {
    return this[this.length - 1];
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.last()); // Output: 5

