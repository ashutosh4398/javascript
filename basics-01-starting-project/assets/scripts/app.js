const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

// enums for operations
const operations = {
    ADD: 'ADD',
    SUBTRACT: 'SUBTRACT',
    MULTIPLY: 'MULTIPLY',
    DIVIDE: 'DIVIDE'
};

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteLogOutput(operator, calcBefore, newNumber) {
    const description = `${calcBefore} ${operator} ${newNumber}`;
    // currentResult is global variable
    outputResult(currentResult, description);
}


function writeToLog(
    operation, 
    prevResult, 
    newNumber, 
    newResult
) {
    const logEntry = {
        operator: operation,
        prevResult: prevResult,
        newNumber: newNumber,
        newResult: newResult
    }
    logEntries.push(logEntry);
}


function calculateResult(calcOperation) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let calcSign;
    if (calcOperation === operations.ADD) {
        currentResult += enteredNumber;
        calcSign = '+';
    } else if (calcOperation === operations.SUBTRACT) {
        currentResult -= enteredNumber;
        calcSign = '-';
    } else if (calcOperation === operations.MULTIPLY) {
        currentResult *= enteredNumber;
        calcSign = '*';
    } else if (calcOperation === operations.DIVIDE) {
        currentResult /= enteredNumber;
        calcSign = '/';
    } else {
        throw "Unsupported operation passed";
    }
    createAndWriteLogOutput(calcSign, initialResult, enteredNumber);
    writeToLog(calcOperation, initialResult, enteredNumber, currentResult);
}

function addNumbers() {
    // function to add numbers
    calculateResult(operations.ADD);
}

function subtract() {
    // function to subtract numbers
    calculateResult(operations.SUBTRACT);
}

function multiply() {
    // function to multiply numbers
    calculateResult(operations.MULTIPLY);
}

function divide() {
    // function to divide numbers
    calculateResult(operations.DIVIDE);
}

addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// currentResultDescription = defaultResult + ' + 10';

// outputResult(currentResult, currentResultDescription);