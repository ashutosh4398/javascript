const defaultResult = 0;
let currentResult = defaultResult;

function addNumbers() {
    // function to add numbers
    currentResult = currentResult + parseFloat(userInput.value);
    outputResult(currentResult, '');
}

addBtn.addEventListener('click', addNumbers);

// currentResultDescription = defaultResult + ' + 10';

// outputResult(currentResult, currentResultDescription);