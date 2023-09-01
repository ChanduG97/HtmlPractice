// Regular function (creating function with function Keyword)
function add(a, b) {
  return a + b;
}

// Arrow function (with arrow function, for single line code, we need not to mention the {} braces )
const subtract = (a, b) => a - b;

// Anonymous function assigned to a variable
// An anonymous function is the function without the name

const multiply = function(a, b) {
  return a * b;
};

// Immediately Invoked Function Expression (IIFE)
// const result = (function() {
//   const num1 = 5;
//   const num2 = 3;
//   return add(num1, num2);
// })();


// Array declaration and initialization
const numbers = [1, 2, 3, 4, 5];

// Accessing array elements
const firstNumber = numbers[0]; // we are calling the array element with the index value
const lastNumber = numbers[numbers.length - 1]; //with length-1 gives the last element in the array


// Iterating over an array using a for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// Here using forloop, we print all the items in the array


// Iterating over an array using forEach
numbers.forEach(number => {
  console.log(number);
});

// Here we are using for.Each to print the array (name of array is -> numbers) elements 

// Mapping array elements to a new array
const doubledNumbers = numbers.map(number => number * 2);
// creating the new array doubledNumbers and using .map and assigning the array elements in new array by multipling the element with 2


// Filtering array elements based on a condition
const evenNumbers = numbers.filter(number => number % 2 === 0);
//Using filter function with arrow function to store only even numbers in new array evenNumbers


// Combining arrays
const moreNumbers = [6, 7, 8];
const combinedNumbers = numbers.concat(moreNumbers);
// we used the concat function to merge the two array elements. --> numbers array and moreNumbers array into combinedNumbers array


// Spreading arrays
const spreadNumbers = [...numbers, ...moreNumbers];

// In array, we call functions
const operations = [add, subtract, multiply];

// Calling functions from an array
const operationResults = operations.map(operation => operation(10, 5));

console.log("calling First number from the array by Index value : ",firstNumber);
console.log("Calling the last value from the array by numbers.length-1 : ",lastNumber);
console.log("DoubledNumbers array created and values stores by multipling numbers array with 2 : ",doubledNumbers);
console.log("Even numbers array is : ",evenNumbers);
console.log("BY using concat we added numbers and moreNumbers arrays : ",combinedNumbers);
console.log("...numbers,...moreNumbers ",spreadNumbers);
console.log("Calling functions in array and performing operations : ",operationResults);

