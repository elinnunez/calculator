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
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    case "%":
      return mod(num1, num2);
    default:
      return "ERROR";
  }
};

let dispNum1 = "";
let operator = "";
let dispNum2 = "";
let result = undefined;

let oldScreen = "";

let isOperatorChosen = false;

// const calctainer = document.querySelector(".calculator");
const calcscreen = document.querySelector(".screen");
const prevScreen = document.querySelector(".prev-screen");
const curScreen = document.querySelector(".cur-screen");
const numgrid = document.querySelector(".numbergrid");

const buttons = document.querySelectorAll("button");
const operatorBtns = document.querySelectorAll(".operator");
const numBtns = document.querySelectorAll(".num");
const eqBtn = document.querySelector(".equal-sign");
const allClearBtn = document.querySelector(".all-clear");
const curClearBtn = document.querySelector(".cur-clear");
const invertNumBtn = document.querySelector(".norp");

invertNumBtn.addEventListener("click", (e) => {
  console.log(curScreen.textContent);
  if (curScreen.textContent.value != "") {
    let oldNum = parseFloat(curScreen.textContent) * -1;

    if (isNaN(oldNum)) {
      oldNum = "";
    }

    if (dispNum2 != "") {
      dispNum2 = oldNum.toString();
      curScreen.textContent = `${dispNum2}`;
      prevScreen.textContent = dispNum1 + " " + operator + " " + dispNum2;
      oldScreen = dispNum1 + " " + operator + " " + dispNum2;
    } else {
      dispNum1 = oldNum.toString();
      curScreen.textContent = `${dispNum1}`;
      prevScreen.textContent = dispNum1 + " " + operator;
      oldScreen = dispNum1 + " " + operator;
    }
  }

  if (result != undefined) {
    result *= -1;
  }
});

const reset = () => {
  dispNum1 = "";
  operator = "";
  dispNum2 = "";
  result = undefined;
  oldScreen = "";
  isOperatorChosen = false;
  operatorBtns.forEach((btn) => {
    btn.disabled = false;
    btn.classList.remove("selected");
  });

  prevScreen.textContent = "";
  curScreen.textContent = "";
};

allClearBtn.addEventListener("click", (e) => {
  reset();
});

curClearBtn.addEventListener("click", (e) => {
  if(dispNum2 == "") {
    dispNum1 = "";
    oldScreen = "";
    operator = "";
    isOperatorChosen = false;
    prevScreen.textContent = "";
    operatorBtns.forEach((button) => {
      button.disabled = false;
      button.classList.remove("selected");
    });
  } else {
    oldScreen = dispNum1 + " " + operator + " ";
    dispNum2 = "";
    prevScreen.textContent = oldScreen;
    operatorBtns.forEach((button) => {
      button.disabled = false;
    });
  }
  curScreen.textContent = "";
}) ;

numBtns.forEach((button) => {
  button.addEventListener("click", (e) => {

    if (isOperatorChosen == false) {
      if (dispNum1.includes(".") && e.target.value == ".") {
        return;
      }

      if(dispNum1.length >= 10) {
        dispNum1 = Number.parseFloat(dispNum1).toExponential(2).toString();
        oldScreen = dispNum1;
      } else {
        oldScreen += e.target.value;
      }
      
      dispNum1 = oldScreen;
      prevScreen.textContent = oldScreen;
      
      curScreen.textContent = `${dispNum1}`;
    } else {
      if (dispNum2.includes(".") && e.target.value == ".") {
        return;
      }

      if(dispNum2.length >= 10) {
        let new2 = Number.parseFloat(dispNum2).toExponential(2).toString();
        dispNum2 = new2;
        oldScreen = dispNum1 + " " + operator + " " + dispNum2;
      } else {
        oldScreen += e.target.value;
      }
      
      prevScreen.textContent = oldScreen;
      dispNum2 += e.target.value;
      curScreen.textContent = `${dispNum2}`;
    }

    if (dispNum1 != "" && operator != undefined && dispNum2 != "") {
      operatorBtns.forEach((button) => {
        button.disabled = true;
      });
    }
  });
});

operatorBtns.forEach((opera) => {
  opera.addEventListener("click", (e) => {
    oldScreen = dispNum1 + " " + e.target.value + " ";
    console.log(oldScreen);
    if (dispNum1 == "" || dispNum1 == ".") {
      prevScreen.textContent = "";
      if (dispNum1 == ".") {
        oldScreen = ".";
      } else {
        oldScreen = "";
      }
      return;
    } else {
      prevScreen.textContent = oldScreen;
    }
    isOperatorChosen = true;
    operator = e.target.value;
    toggleColor(opera);
    // console.log(operator);
  });
});

eqBtn.addEventListener("click", (e) => {
  if (dispNum1 == "." || dispNum2 == ".") {
    reset();
    curScreen.textContent = "ERROR";
    return;
  }
  if (isOperatorChosen == true && dispNum1 != "" && dispNum2 != "") {
    result = operate(parseFloat(dispNum1), operator, parseFloat(dispNum2));

    if(result.toString().length >= 10) {
      result = result.toExponential(2);
    }

    prevScreen.textContent = result.toString();
    curScreen.textContent = `${result}`;
    isOperatorChosen = false;
    dispNum1 = result.toString();
    dispNum2 = "";
    operator = "";
    oldScreen = "";

    operatorBtns.forEach((button) => {
      button.disabled = false;
      button.classList.remove("selected");
    });
  }
});

const toggleColor = (btn) => {
  operatorBtns.forEach((opera) => {
    opera.classList.remove("selected");
  });

  btn.classList.toggle("selected");
};

const maxDisplaySize = 11;
