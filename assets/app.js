const defaultResult = 0;
let currentResult = defaultResult;

function getuserInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, currentResult, initialValue, userInput) {
    let desp = `${initialValue} ${operator}  ${userInput}`
    outputResult(currentResult, desp)
}
function calculateResult(calculationType) {
    const userInputValue = getuserInput();
    let initialValue = currentResult;
    let mathOperator
    if (calculationType === "ADD") {
        currentResult += userInputValue;
        mathOperator = '+';
    }
    else if (calculationType === "SUBTRACT") {
        currentResult -= userInputValue;
        mathOperator = '-';
    }
    else if (calculationType === "MULTIPLY") {
        currentResult *= userInputValue;
        mathOperator = '*';
    }
    else if (calculationType === "DIVIDE") {
        currentResult /= userInputValue;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, currentResult, initialValue, userInputValue)
}

function add() {
    calculateResult("ADD")
}
function subtract() {
    calculateResult("SUBTRACT")
}
function multiply() {
    calculateResult("MULTIPLY")
}
function divide() {
    calculateResult("DIVIDE")
}

addBtn.addEventListener('click', add);
subBtn.addEventListener('click', subtract);
mulBtn.addEventListener('click', multiply);
divBtn.addEventListener('click', divide);