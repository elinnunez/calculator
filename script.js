const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const operate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);
    // break;
    case "-":
      return subtract(num1, num2);
    // break;
    case "*":
      return multiply(num1, num2);
    // break;
    case "/":
      return divide(num1, num2);
    // break;
    default:
      return "NaN";
  }
};

let dispNum1 = "";
let operator;
let dispNum2 = "";
let result = 0;

let isOperatorChosen = false;

const calctainer = document.querySelector(".calculator");
const calcscreen = document.querySelector(".screen");
const numgrid = document.querySelector(".numbergrid");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // console.log(e.target.value);
    calcscreen.textContent = "";
    if (!isNaN(e.target.value)) {
      if (isOperatorChosen == false) {
        dispNum1 += e.target.value;
        console.log("Number 1: " + dispNum1);
        calcscreen.textContent = `${dispNum1}`;
      } else {
        dispNum2 += e.target.value;
        console.log("Number 2: " + dispNum2);
        calcscreen.textContent = `${dispNum2}`;
      }
    } else {
      // console.log(typeof e.target.value);
      isOperatorChosen = true;
      if (e.target.value == "=") {
        if (dispNum1 != "" && dispNum2 != "") {
          result = operate(parseInt(dispNum1), operator, parseInt(dispNum2));
          // console.log(typeof result);
          calcscreen.textContent = `${result}`;
          dispNum1 = result.toString();
          dispNum2 = "";
          isOperatorChosen = false;
        } else {
          calcscreen.textContent = "";
        }
      } else if (e.target.value == "all-clear") {
        dispNum1 = "";
        operator;
        dispNum2 = "";
        result = 0;
        console.log("Cur Operator: " + operator);
        isOperatorChosen = false;
      } else {
        operator = e.target.value;
        console.log("Cur Operator: " + e.target.value);
      }
    }
  });
});

const displayVal = 0;
const maxDisplaySize = 11;
// alert(maxDisplaySize);

calcscreen.textContent = `${displayVal}`;
