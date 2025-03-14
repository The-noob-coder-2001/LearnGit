// it is a simple code that turns on a bulb when the switch is turned on and turns off the bulb when the switch is turned off.
// this is an example of DOM-manipulation with javsascripts
// so the logic is:
// currently, the button is OFF. Once the user clicks the button, it says ON and bulb turn on.
// Next, the message says: Click the button to turn OFF the bulb. Next action is predictable

const bulb = document.getElementById("bulb");
const heading = document.querySelector("h2");
const button = document.querySelector("button");

// here are two functions that are required to turn on and off the bulb
function ON() {
  heading.innerHTML = "Click the button to turn ON the bulb";

  button.addEventListener("click", () => {
    bulb.style.backgroundColor = "yellow";
    button.innerHTML = "ON";
    heading.innerHTML = "Click the button to turn OFF the bulb";
  });

  return "ON";
}

function OFF() {
  heading.innerHTML = "Click the button to turn OFF the bulb";
  button.addEventListener("click", () => {
    bulb.style.backgroundColor = "black";
    button.innerHTML = "OFF";
    heading.innerHTML = "Click the button to turn ON the bulb";
  });

  return "OFF";
}

// this is the main logic that checks the current state of the button
// we need to keep this in a continuos loop so that the button can be turned on and off
// without refreshing the page

function generator(message) {
  console.log("Generator is ON");
  if (message === "OFF") {
    return ON();
  } else {
    return OFF();
  }
}

let message = "ON";
generator(message);
