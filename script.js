let currentInput = 0;
let previousInput = 0;
let operator = " + ";
let currentResult = 0;
let resultHistory = 0;

const displayL = document.getElementById("display-L");
const displayS = document.getElementById("display-S");
const resultWay = document.getElementById("result-way");
const resultRes = document.getElementById("result");
const resultHis = document.getElementById("result-history");

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
      currentResult = previousInput + currentInput;
    } else if (operator === " - ") {
      currentResult = previousInput - currentInput;
    } else if (operator === " * ") {
      currentResult = previousInput * currentInput;
    } else if (operator === " / ") {
      currentResult = previousInput / currentInput;
    }
    resultHistory =
      previousInput + operator + currentInput + " = " + currentResult;
    toHistory(resultHistory);
    previousInput = currentResult;
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
}

function multi() {
  performOperator();
  operator = " * ";
  updatePreInput();
  updateInput();
}

function divi() {
  performOperator();
  operator = " / ";
  updatePreInput();
  updateInput();
}

function getResult() {
  if (previousInput === 0 && currentInput === 0) {
    currentInput = 0;
    updateInput();
  } else {
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
    resultHistory =
      previousInput + operator + currentInput + " = " + currentResult;
    displayS.innerHTML = "";
    currentInput = 0;
    previousInput = 0;
    toHistory(resultHistory);
    updateInput();
  }
}

function toHistory(resultHistory) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("history");
  newDiv.textContent = resultHistory;
  resultHis.prepend(newDiv);
}

function clearAll() {
  currentInput = 0;
  previousInput = 0;
  currentResult = 0;
  resultHistory = 0;
  resultWay.innerHTML = "";
  resultRes.innerHTML = "";
  displayS.innerHTML = "";
  resultHis.innerHTML = "";
  updateInput();
}

function clearEntry() {
  currentInput = 0;
  updateInput();
}
