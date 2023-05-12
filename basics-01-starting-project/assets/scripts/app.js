const defaultResult = 0;
let currentResult = defaultResult;
const logEntries = [];

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

function addNumbers() {
    // function to add numbers
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteLogOutput("+", initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
    // function to subtract numbers
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteLogOutput("-", initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
    // function to multiply numbers
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteLogOutput("*", initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
    // function to divide numbers
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteLogOutput("/", initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', addNumbers);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// currentResultDescription = defaultResult + ' + 10';

// outputResult(currentResult, currentResultDescription);