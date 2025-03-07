// it is a simple code that turns on a bulb when the switch is turned on and turns off the bulb when the switch is turned off.

// so the logic is:
// currently, the button is OFF. Once the user clicks the button, it says ON and bulb turn on.
// Next, the message says: Click the button to turn OFF the bulb. Next action is predictable

const bulb = document.getElementById("bulb");
const heading = document.querySelector("h2");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (button.innerHTML === "ON") {
    heading.innerHTML = "Click the button to turn OFF the bulb";
    button.addEventListener("click", () => {
      bulb.style.backgroundColor = "black";
      button.innerHTML = "OFF";
      heading.innerHTML = "Click the button to turn ON the bulb";
    });
  } else {
    bulb.style.backgroundColor = "black";
    button.innerHTML = "OFF";
    heading.innerHTML = "Click the button to turn ON the bulb";
  }
  bulb.style.backgroundColor = "yellow";
  button.innerHTML = "ON";
});
