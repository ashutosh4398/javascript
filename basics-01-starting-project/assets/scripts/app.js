const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteLogOutput(operator, calcBefore, newNumber) {
    const description = `${calcBefore} ${operator} ${newNumber}`;
    // currentResult is global variable
    outputResult(currentResult, description);
}

function addNumbers() {
    // function to add numbers
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteLogOutput("+", initialResult, enteredNumber);
}

function subtract() {
    // function to subtract numbers
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteLogOutput("-", initialResult, enteredNumber);
}

function multiply() {
    // function to multiply numbers
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteLogOutput("*", initialResult, enteredNumber);
}

function divide() {
    // function to divide numbers
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteLogOutput("/", initialResult, enteredNumber);
}

addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// currentResultDescription = defaultResult + ' + 10';

// outputResult(currentResult, currentResultDescription);