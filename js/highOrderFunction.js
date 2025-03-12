// this is a function that I will use as a paramter for my high order function
function carName() {
  return "Volvo";
}

function bikeName() {
  return "Honda";
}

// this I created is a HOF, which takes more than one function as an argument and returns the result as a function itself
function thisIsMyHighOrderFuncition(
  functionPassedAsArgument,
  secondFunctionAsArgument
) {
  return secondFunctionAsArgument();
}

// time to call
const resultAfterCallingHOF = thisIsMyHighOrderFuncition(carName, bikeName);
console.log(resultAfterCallingHOF); // Volvo

// write a callback function that takes 2 integers and returns its exponential value
function exponentialValue(num1, num2) {
  return num1 ** num2;
}

function callbackFunction(num1, num2, callback) {
  return callback(num1, num2);
}

const result = callbackFunction(2, 3, exponentialValue);
console.log(result); // 8
