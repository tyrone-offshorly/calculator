const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (operator, operand1, operand2) => {
  switch(operator) {
    case "+":
      return add(operand1, operand2);     
    case "-": 
      return subtract(operand1, operand2);     
    case "X":
      return multiply(operand1, operand2);     
    case "÷":
      return divide(operand1, operand2);     
    default:
      return "ERR";
  }
}

let operand1;
let operand2;
let operator;
let newNumber = true;

const buttons = document.querySelector('.buttons');
const display = document.querySelector('#display');
buttons.addEventListener('click', (event) => {
  const target = event.target;
  if(target.children.length === 0) {
    if(target.id === "op_cl") {
      display.textContent = "";
      operand1 = null;
      operand2 = null;
      operator = null;
    } else if(target.id.includes('op')) {
      newNumber = true;
    } else { 
      if(newNumber) {
        display.textContent = target.textContent;
        newNumber = false;
      } else { 
        display.textContent += target.textContent;
      }
    }
  } 
});

