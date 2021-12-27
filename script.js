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

// const dispNum1;
// const operator;
// const dispNum2;

const calctainer = document.querySelector(".calculator");
const calcscreen = document.querySelector(".screen");
const numgrid = document.querySelector(".numbergrid");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(typeof e.target.value);
    if(!isNaN(e.target.value)) {
      calcscreen.textContent = `${e.target.value}`;
    } else {
      alert(e.target.value);
    }
  })
})

const displayVal = 99999999999;
const maxDisplaySize = 11;
// alert(maxDisplaySize);

calcscreen.textContent = `${displayVal}`;

// console.log(add(1,3));
// console.log(subtract(1,3));
// console.log(multiply(2,3));
// console.log(divide(1,3));

// console.log(operate(1, "+", 3));
