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

const mod = (num1, num2) => {
  return num1 % num2;
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
    case "%":
      return mod(num1, num2);
      s;
    default:
      return "NaN";
  }
};

let dispNum1 = "";
let operator = "";
let dispNum2 = "";
let result = 0;
let getResult = false;

let isOperatorChosen = false;

const calctainer = document.querySelector(".calculator");
const calcscreen = document.querySelector(".screen");
const numgrid = document.querySelector(".numbergrid");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let curEVal = e.target.value;
    // console.log(e.target.value);
    calcscreen.textContent = dispNum2;
    if (!isNaN(curEVal)) {
      if (isOperatorChosen == false) {
        dispNum1 += curEVal;
        console.log("Number 1: " + dispNum1);
        calcscreen.textContent = `${dispNum1}`;
      } else {
        dispNum2 += curEVal;
        console.log("Number 2: " + dispNum2);
        calcscreen.textContent = `${dispNum2}`;
      }
    } else {
      // console.log(e.target.classList.value);
      if (dispNum1 != "" && e.target.classList.value == "operator") {
        isOperatorChosen = true;
        operator = curEVal;
        console.log("Cur Operator: " + curEVal);
      }

      if (!dispNum1 == "" && isOperatorChosen && !dispNum2 == "") {
        operatorBtns.forEach((opera) => {
          opera.disabled = true;
        });
      }


      if (isOperatorChosen) {

        // if (!dispNum1 == "" && isOperatorChosen && !dispNum2 == "") {
        //   operatorBtns.forEach((opera) => {
        //     opera.disabled = true;
        //   });
        // } else {

        // }




        if (curEVal == "=") {
          if (dispNum1 != "" && dispNum2 != "") {
            result = operate(parseInt(dispNum1), operator, parseInt(dispNum2));
            // console.log(typeof result);
            calcscreen.textContent = `${result}`;
            dispNum1 = result.toString();
            dispNum2 = "";
            isOperatorChosen = false;
            operatorBtns.forEach((opera) => {
              opera.disabled = false;
            });
          } 
          else {
            // calcscreen.textContent = `${dispNum1}`;
            return;
          }
        } else if (curEVal == "all-clear") {
          dispNum1 = "";
          operator = "";
          dispNum2 = "";
          result = 0;
          console.log("Cur Operator: " + operator);
          isOperatorChosen = false;
          calcscreen.textContent = "0";

          operatorBtns.forEach((opera) => {
            opera.disabled = false;
          });
        } else if (curEVal == "±") {

        } 
        // else {
        //   operator = curEVal;
        //  c
        // }
      }
    }
  });
});

const operatorBtns = document.querySelectorAll(".operator");

// const disableOperators = operatorBtns.forEach((opera) => {
//   opera.disabled = true;
// });

// const enableOperators = operatorBtns.forEach((opera) => {
//   opera.enabled = true;
// });

const displayVal = 0;
const maxDisplaySize = 11;
// alert(maxDisplaySize);

calcscreen.textContent = `${displayVal}`;
