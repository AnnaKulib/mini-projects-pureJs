import {
  numberButtons,
  operationButtons,
  equalsButton,
  deleteButton,
  allClearButton,
} from "../variables/variables.js";
import { calculator } from "../index.js";

function buttonActions() {
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.appendNumber(button.innerText);
      calculator.updateDisplay();
    });
  });

  operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      calculator.chooseOperation(button.innerText);
      calculator.updateDisplay();
    });
  });

  equalsButton.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
  });

  allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
  });

  deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
  });
}

export default buttonActions;
