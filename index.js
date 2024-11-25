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
      if(operand2 === 0) {
        return "ERR";
      }
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
      newNumber = true;
      display.textContent = "";
      operand1 = null;
      operand2 = null;
      operator = null;
    } else if(target.id.includes('op')) {
      newNumber = true;
      if(operand1 && operator) {
        console.log("Here");
        // check if there is an existing value on the screen
        operand2 = Number(display.textContent);
        operand1 = operate(operator, operand1, operand2);
        display.textContent = operand1;
        if(operand1 === "ERR") {
          operand1 = null;
        }
        operand2 = null;
        if (target.textContent === "="){
          operator = null
        } else {
          operator = target.textContent; 
        }
      } else if (!operand1) {
        if(display.textContent !== "") {
          operand1 = Number(display.textContent);
          if(target.textContent !== "=") {
            operator = target.textContent;
          }
        }
      } else if ((!operator)) {
        if(target.textContent !== "=") {
          operator = target.textContent;
        }
      }
    } else { 
      if(newNumber) {
        display.textContent = target.textContent;
        newNumber = false;
      } else { 
        display.textContent += target.textContent;
      }
    }
  } 
  console.log(`Operand 1: ${operand1}`);
  console.log(`Operand 2: ${operand2}`);
  console.log(`Operator: ${operator}`);
});

