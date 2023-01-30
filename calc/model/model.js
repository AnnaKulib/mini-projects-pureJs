class Calculator {
  constructor(previousComputeElementContent, currentComputeElementContent) {
    this.previousComputeElementContent = previousComputeElementContent;
    this.currentComputeElementContent = currentComputeElementContent;
    // this.currentOperand = "";
    // this.previousOperand = "";
    // this.operation = undefined;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
    console.log("whole display cleared");
  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
    console.log(`number ${number} appended`);
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    console.log("character deleted");
  }

  chooseOperation(operationToCompute) {
    if (this.currentOperand === "") return;
    if (this.previousOperand !== "") {
      this.compute();
    }
    console.log(`chosen operation ${operationToCompute}`);
    this.operation = operationToCompute;
    this.previousOperand = this.currentOperand;
    this.currentOperand = "";
  }

  compute() {
    let result;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    switch (this.operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "÷":
        result = prev / current;
        break;
      default:
        return;
    }
    console.log(`operation '${this.operation}' is executed`);
    this.currentOperand = result;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getNumber(number) {
    return number.toLocaleString("en", { maximumFractionDigits: 8 });
  }

  updateDisplay() {
    let {
      currentComputeElementContent,
      previousComputeElementContent,
      currentOperand,
      previousOperand,
      operation,
    } = this;
    currentComputeElementContent.innerText = this.getNumber(currentOperand);
    if (operation != null) {
      previousComputeElementContent.innerText = `${this.getNumber(
        previousOperand
      )} ${operation}`;
    } else {
      previousComputeElementContent.innerText = "";
    }
  }
}

export default Calculator;
