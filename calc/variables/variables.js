const numberButtons = document.querySelectorAll("#number");
const operationButtons = document.querySelectorAll("#operation");
const equalsButton = document.querySelector("#equals");
const deleteButton = document.querySelector("#delete");
const allClearButton = document.querySelector("#all-clear");
const previousComputeElementContent =
  document.querySelector("#previous-operand");
const currentComputeElementContent = document.querySelector("#current-operand");

export {
  numberButtons,
  operationButtons,
  equalsButton,
  deleteButton,
  allClearButton,
  previousComputeElementContent,
  currentComputeElementContent,
};
