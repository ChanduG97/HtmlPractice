// Data Types
let numberVar = 10;
let stringVar = "Hello, world!";
let booleanVar = true;
let nullVar = null;
let undefinedVar;

// Objects
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};

// Variables
let a = 5;
let b = 7;
let result;

// Conditional Statements
if (a < b) {
  result = "a is less than b";
} else if (a > b) {
  result = "a is greater than b";
} else {
  result = "a is equal to b";
}

// Loops
console.log("Numbers from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

console.log("Even numbers from 2 to 10:");
let j = 2;
while (j <= 10) { 
  console.log(j);
  j += 2;
}

console.log("Squares of numbers from 1 to 3:");
let numbers = [1, 2, 3];
for (let num of numbers) {
  console.log(num * num);
}