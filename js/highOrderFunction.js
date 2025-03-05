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
