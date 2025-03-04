// console.log("hello");

// create a function to add two numbers
function add(a, b) {
  return a + b;
}

// call this function with two numbers
console.log(add(1, 2));

// call the add function using user-input
let num1 = parseInt(prompt("Enter a number: "));
let num2 = parseInt(prompt("Enter another number: "));
console.log(add(num1, num2));

// create a function to find the pallindrome of a string
function isPallindrome(str) {
  return str === str.split("").reverse().join("");
}

//take user string input and check if it is a pallindrome
let str = prompt("Enter a string: ");
if (isPallindrome(str)) {
  console.log(`${str} is a pallindrome`);
} else {
  console.log(`${str} is not a pallindrome`);
}
