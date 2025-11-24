let currentInput = 0;
let previousInput = 0;
let operator = " + ";
let currentResult = 0;

const displayL = document.getElementById("display-L");
const displayS = document.getElementById("display-S");
const resultWay = document.getElementById("result-way");
const resultRes = document.getElementById("result");

function clickNumber(number) {
  currentInput = currentInput * 10 + number;
  updateInput();
}

function updateInput() {
  displayL.innerHTML = currentInput;
}

function updatePreInput() {
  displayS.innerHTML = previousInput + operator;
}

function performOperator() {
  if (previousInput === 0) {
    previousInput = currentInput;
  } else {
    if (operator === " + ") {
      previousInput = previousInput + currentInput;
    } else if (operator === " - ") {
      previousInput = previousInput - currentInput;
    } else if (operator === " * ") {
      previousInput = previousInput * currentInput;
    } else if (operator === " / ") {
      previousInput = previousInput / currentInput;
    }
  }
  currentInput = 0;
}

function add() {
  performOperator();
  operator = " + ";
  updatePreInput();
  updateInput();
}

function substract() {
  performOperator();
  operator = " - ";
  updatePreInput();
  updateInput();
  console.log(previousInput, currentInput);
}

function multi() {
  performOperator();
  operator = " * ";
  console.log(previousInput, currentInput);
  updatePreInput();
  updateInput();
  console.log(previousInput, currentInput);
}

function divi() {
  performOperator();
  operator = " / ";
  updatePreInput();
  updateInput();
}

function getResult() {
  if (operator === " + ") {
    currentResult = previousInput + currentInput;
  } else if (operator === " - ") {
    currentResult = previousInput - currentInput;
  } else if (operator === " * ") {
    currentResult = previousInput * currentInput;
  } else if (operator === " / ") {
    currentResult = previousInput / currentInput;
  }
  resultWay.innerHTML = previousInput + operator + currentInput + " = ";
  resultRes.innerHTML = currentResult;
  displayS.innerHTML = "";
  currentInput = 0;
  previousInput = 0;
  updateInput();
}

function clearAll() {
  currentInput = 0;
  previousInput = 0;
  currentResult = 0;
  resultWay.innerHTML = "";
  resultRes.innerHTML = "";
  displayS.innerHTML = "";
  updateInput();
}

function clearEntry() {
  currentInput = 0;
  updateInput();
}
