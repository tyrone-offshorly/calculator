const operations = require('./scripts/operations');

let operand1;
let operand2;
let operator;

const operate = (operator, operand1, operand2) => {
  switch(operator) {
    case "+":
      return operations.add(operand1, operand2);     
    case "-": 
      return operations.subtract(operand1, operand2);     
    case "X":
      return operations.multiply(operand1, operand2);     
    case "÷":
      return operations.divide(operand1, operand2);     
    default:
      return "ERR";
  }
}

