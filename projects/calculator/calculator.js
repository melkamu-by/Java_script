let currentOperand = "0";
let previousOperand = "";
let operator = null;
let shouldResetScreen = false;

let currentDisplay = document.getElementById("current");
let previousDisplay = document.getElementById("previous");
let buttons = document.querySelectorAll(".btn");

function updateDisplay() {
    currentDisplay.textContent = currentOperand;
    if (operator && previousOperand) {
        previousDisplay.textContent = previousOperand + " " + getOperatorSymbol(operator);
    } else {
        previousDisplay.textContent = "";
    }
}

function getOperatorSymbol(op) {
    let symbols = { "+": "+", "-": "−", "*": "×", "/": "÷", "%": "%" };
    return symbols[op] || op;
}

function appendNumber(number) {
    if (shouldResetScreen) {
        currentOperand = "";
        shouldResetScreen = false;
    }
    if (number === "." && currentOperand.includes(".")) return;
    if (currentOperand === "0" && number !== ".") {
        currentOperand = number;
    } else {
        currentOperand += number;
    }
    updateDisplay();
}

function chooseOperator(op) {
    if (operator && !shouldResetScreen) {
        calculate();
    }
    operator = op;
    previousOperand = currentOperand;
    shouldResetScreen = true;
    updateDisplay();
}

function calculate() {
    if (!operator || previousOperand === "") return;

    let prev = parseFloat(previousOperand);
    let curr = parseFloat(currentOperand);
    let result;

    switch (operator) {
        case "+": result = prev + curr; break;
        case "-": result = prev - curr; break;
        case "*": result = prev * curr; break;
        case "/":
            if (curr === 0) {
                currentOperand = "Error";
                operator = null;
                previousOperand = "";
                updateDisplay();
                return;
            }
            result = prev / curr;
            break;
        case "%": result = prev % curr; break;
        default: return;
    }

    currentOperand = String(Math.round(result * 100000000) / 100000000);
    operator = null;
    previousOperand = "";
    shouldResetScreen = true;
    updateDisplay();
}

function clearAll() {
    currentOperand = "0";
    previousOperand = "";
    operator = null;
    shouldResetScreen = false;
    updateDisplay();
}

function deleteLast() {
    if (currentOperand.length <= 1) {
        currentOperand = "0";
    } else {
        currentOperand = currentOperand.slice(0, -1);
    }
    updateDisplay();
}

buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let action = btn.dataset.action;
        let value = btn.dataset.value;

        switch (action) {
            case "number": appendNumber(value); break;
            case "operator": chooseOperator(value); break;
            case "equals": calculate(); break;
            case "clear": clearAll(); break;
            case "delete": deleteLast(); break;
        }
    });
});

document.addEventListener("keydown", function (event) {
    if (event.key >= "0" && event.key <= "9") appendNumber(event.key);
    if (event.key === ".") appendNumber(".");
    if (event.key === "+") chooseOperator("+");
    if (event.key === "-") chooseOperator("-");
    if (event.key === "*") chooseOperator("*");
    if (event.key === "/") { event.preventDefault(); chooseOperator("/"); }
    if (event.key === "%") chooseOperator("%");
    if (event.key === "Enter" || event.key === "=") calculate();
    if (event.key === "Escape") clearAll();
    if (event.key === "Backspace") deleteLast();
});

updateDisplay();
