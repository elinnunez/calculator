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

const calctainer = document.querySelector(".calculator");
const calcscreen = document.querySelector(".screen");
const numgrid = document.querySelector(".numbergrid");

// const createGrid = () => {
//   for (let i = 0; i < 18; i++) {
//     let numbtn = document.createElement("button");
//     numbtn.textContent = `${i + 1}`;
//     numbtn.classList.add("numbtn-grid");
//     numgrid.appendChild(numbtn);
//   }

//   let equalbtn = document.createElement("button");
//   equalbtn.textContent = "=";
//   equalbtn.classList.add("equalSign");
//   equalbtn.style.gridColumnStart = "3";
//   equalbtn.style.gridColumnEnd = "5";
//   numgrid.appendChild(equalbtn);
//   numgrid.style.gridTemplateColumns = `repeat(4, auto)`;
// };

// createGrid();

// console.log(add(1,3));
// console.log(subtract(1,3));
// console.log(multiply(2,3));
// console.log(divide(1,3));

console.log(operate(1, "+", 3));
