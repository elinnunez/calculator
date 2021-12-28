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
let result = undefined;
let getResult = false;

let oldScreen = "";

let isOperatorChosen = false;

const calctainer = document.querySelector(".calculator");
const calcscreen = document.querySelector(".screen");
const prevScreen = document.querySelector(".prev-screen");
const curScreen = document.querySelector(".cur-screen");
const numgrid = document.querySelector(".numbergrid");

const buttons = document.querySelectorAll("button");
const operatorBtns = document.querySelectorAll(".operator");
const numBtns = document.querySelectorAll(".num");
const eqBtn = document.querySelector(".equal-sign");

numBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    // if(result != undefined) {
    //   dispNum1 = e.target.value;
    //   oldScreen = e.target.value;
    //   prevScreen.textContent = oldScreen;
    //   curScreen.textContent = `${dispNum1}`;
    //   return;
    // }
    if (isOperatorChosen == false) {
      if(dispNum1.includes('.') && e.target.value == '.') {
        return;
      }
      oldScreen+= e.target.value;
      prevScreen.textContent = oldScreen;
      dispNum1 += e.target.value;
      curScreen.textContent = `${dispNum1}`;
    } else {
      if(dispNum2.includes('.') && e.target.value == '.') {
        return;
      }
      oldScreen+= e.target.value;
      prevScreen.textContent = oldScreen;
      dispNum2 += e.target.value;
      curScreen.textContent = `${dispNum2}`;
    }
  });
});

operatorBtns.forEach((opera) => {
  opera.addEventListener("click", (e) => {
    oldScreen+= " " + e.target.value + " ";
    prevScreen.textContent = oldScreen;
    isOperatorChosen = true;
    operator = e.target.value;
    console.log(operator);
  });
});

eqBtn.addEventListener("click", (e) => {
  if(isOperatorChosen == true && dispNum1 != "" && dispNum2 != "") {
    result = operate(parseInt(dispNum1), operator, parseInt(dispNum2));
    prevScreen.textContent = result.toString();
    curScreen.textContent = `${result}`;
    isOperatorChosen = false;
    dispNum1 = result.toString();
    dispNum2 = "";
    operator = "";
    oldScreen = result.toString();
    // dispNum1 = "";
  }
})

// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     let curEVal = e.target.value;
//     // console.log(e.target.value);
//     calcscreen.textContent = dispNum2;
//     if (!isNaN(curEVal)) {
//       if (isOperatorChosen == false) {
//         dispNum1 = curEVal;
//         console.log("Number 1: " + dispNum1);
//         calcscreen.textContent = `${dispNum1}`;
//       } else {
//         dispNum2 += curEVal;
//         console.log("Number 2: " + dispNum2);
//         calcscreen.textContent = `${dispNum2}`;
//       }
//     } else {
//       // console.log(e.target.classList.value);
//       if (dispNum1 != "" && e.target.classList.value == "operator") {
//         isOperatorChosen = true;
//         operator = curEVal;
//         console.log("Cur Operator: " + operator);
//         operatorBtns.forEach((opera) => {
//           opera.classList.remove('selected');
//         });

//         button.classList.toggle("selected");
//       }

//       if (!dispNum1 == "" && e.target.classList.value == "operator" && !dispNum2 == "") {
//         operatorBtns.forEach((opera) => {
//           opera.disabled = true;
//         });
//       }

//       if (isOperatorChosen && curEVal == "=") {

//         // if (curEVal == "=") {
//           if (dispNum1 != "" && dispNum2 != "") {
//             result = operate(parseInt(dispNum1), operator, parseInt(dispNum2));
//             // console.log(typeof result);
//             calcscreen.textContent = `${result}`;
//             dispNum1 = result.toString();
//             dispNum2 = "";
//             isOperatorChosen = false;
//             operatorBtns.forEach((opera) => {
//               opera.disabled = false;
//               opera.classList.remove('selected');
//             });
//           } else {
//             calcscreen.textContent = `${dispNum1}`;
//             return;
//           }
//         // }
//       } else {
//         if (curEVal == "all-clear") {
//           dispNum1 = "";
//           operator = "";
//           dispNum2 = "";
//           result = 0;
//           console.log("Cur Operator: " + operator);
//           isOperatorChosen = false;
//           calcscreen.textContent = "0";

//           operatorBtns.forEach((opera) => {
//             opera.enabled = true;
//           });
//         } else if (curEVal == "±") {
//         }
//       }
//     }
//   });
// });

// const disableOperators = operatorBtns.forEach((opera) => {
//   opera.disabled = true;
// });

// const enableOperators = operatorBtns.forEach((opera) => {
//   opera.enabled = true;
// });

const displayVal = 0;
const maxDisplaySize = 11;
// alert(maxDisplaySize);

// calcscreen.textContent = `${displayVal}`;
