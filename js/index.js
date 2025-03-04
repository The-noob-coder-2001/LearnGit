// example of a callback function
// function callbackFunction(callback) {
//   callback();
// }
// explain how a callback function works
// A callback function is a function that is passed as an argument to another function. The callback function is called inside the other function. This allows the other function to execute the callback function at a specific time or after a specific event. Callback functions are commonly used in asynchronous programming to handle tasks that depend on the completion of other tasks.

// give example of a callback function
// function sayHello() {
//   console.log("Hello!");
// }
// callbackFunction(sayHello);

// generate a real-life example considering callback functions
// An example of a real-life callback function is the `setTimeout` function in JavaScript. The `setTimeout` function takes a callback function as an argument and executes it after a specified delay. For example:
// setTimeout(() => {
//   console.log("Delayed message");
// }, 2000);

// my example of callback function
function timeout(sleep, time) {
  // sleep();
  //adding conditional statements here
  if (time >= 8) {
    sleep();
  } else {
    console.log("It's not time to sleep yet!");
  }
}
function sleep() {
  console.log("I'm sleeping...");
}
timeout(sleep, 10);

// create a function that takes a callback function as an argument and executes it after a specified time
function delay(callback, time) {
  setTimeout(callback, time);
}
