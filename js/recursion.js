// fetch water from the well
function fetchWaterFromTheWell() {
  console.log("fetching water from the well");
  fetchWaterFromTheWell();
}
// fetchWaterFromTheWell(); // fetching water from the well
// fetching water from the well..
// this recursion causes infinite loop, which will crash the browser/impact the call stack while execution.
//
//
// To solve this, we need to add a base condition which controls the number of execution/execution of the recursion Point.
// here's an example of recursion in JavaScript with a base condition
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(3)); // 6
console.log(factorial(2)); // 2
console.log(factorial(1)); // 1
console.log(factorial(0)); // 1
