let isResult = false;

/**
 * function to append a value to the display
 */
function appendToDisplay(inputValue) {
    const display = document.getElementById('display');
    
    let lastCharacter = display.value[display.value.length - 1];
    const isInputNumber = Number(inputValue) || inputValue === '0';

    if (isResult) {
        if (isInputNumber) { // if the input is a number and the result is displayed, we clear the display
            display.value = inputValue;
        } else { // if the input is not a number and the result is displayed, we append the input to the display
            display.value = (display.value === 'Division by zero is not allowed' || display.value === 'Invalid operation') ? '0' + inputValue : display.value + inputValue;
        }
    } else {
        if (isInputNumber) { // if the input is a number and the result is not displayed, we append the input to the display
            display.value = display.value === '0' ? inputValue : display.value + inputValue;
        } else { // if the input is not a number and the result is not displayed, we append the input to the display
            display.value = (Number(lastCharacter) || lastCharacter === '0') ? display.value + inputValue : display.value.slice(0, -1) + inputValue;
        }
    }

    isResult = false;
}

/**
 * function to clear the display
 */
function clearDisplay() {
    document.getElementById('display').value = '0';
    isResult = false;
}

/**
 * function to calculate the result
 */
function calculateResult() {
    const display = document.getElementById('display');

    isResult = true;

    try {
        if (eval(display.value) === Infinity || eval(display.value) === -Infinity) {
            display.value = 'Division by zero is not allowed';
            return;
        }

        if (isNaN(eval(display.value))) {
            display.value = 'Invalid operation';
            return;
        }

        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Invalid operation';
    }
}
