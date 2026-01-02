const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      currentInput = "";
      display.value = "";
      return;
    }

    if (value === "=") {
      try {
        const result = eval(currentInput);

        if (result === Infinity || result === -Infinity) {
          display.value = "Cannot divide by 0";
          currentInput = "";
        } else if (isNaN(result)) {
          display.value = "Error";
          currentInput = "";
        } else {
          display.value = result;
          currentInput = result.toString();
        }
      } catch (error) {
        display.value = "Error";
        currentInput = "";
      }
      return;
    }

    currentInput += value;
    display.value = currentInput;
  });
});
