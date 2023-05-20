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

function isValidOperation(calcOperation, enteredNumber) {
    return (
        calcOperation === operations.ADD ||
        calcOperation === operations.SUBTRACT ||
        calcOperation === operations.MULTIPLY ||
        calcOperation === operations.DIVIDE
    ) && (enteredNumber);
}


function calculateResult(calcOperation) {
   
    const enteredNumber = getUserNumberInput();
    if (!isValidOperation(calcOperation, enteredNumber)) {
        return;
    }
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
    }
    createAndWriteLogOutput(calcSign, initialResult, enteredNumber);
    writeToLog(calcOperation, initialResult, enteredNumber, currentResult);
}


addBtn.addEventListener('click', calculateResult.bind(this, operations.ADD));
subtractBtn.addEventListener('click', calculateResult.bind(this, operations.SUBTRACT));
multiplyBtn.addEventListener('click', calculateResult.bind(this, operations.MULTIPLY));
divideBtn.addEventListener('click', calculateResult.bind(this, operations.DIVIDE));

// currentResultDescription = defaultResult + ' + 10';

// outputResult(currentResult, currentResultDescription);