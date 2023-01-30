import Calculator from "./model/model.js";
import buttonActions from "./methods/methods.js";
import {
  previousComputeElementContent,
  currentComputeElementContent,
} from "./variables/variables.js";

buttonActions();

export const calculator = new Calculator(
  previousComputeElementContent,
  currentComputeElementContent
);
