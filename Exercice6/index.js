let isResult = false;

/**
 * function to append a value to the display
 */
function appendToDisplay(inputValue) {
    const display = document.getElementById('display');
    let lastCharacter = display.value[display.value.length - 1];

    const isInputNumber = Number(inputValue) || inputValue === '0';

    if (isResult && isInputNumber) {
        display.value = '';
        isResult = false;
    }

    if (display.value === 'Division by zero is not allowed' || display.value === 'Invalid operation') {
        display.value = '0';
        lastCharacter = '0';
    }

    if (display.value === '0' && isInputNumber) {
        display.value = '';
    }

    if (display.value === '' && !isInputNumber) {
        display.value = '0';
        lastCharacter = '0';
    }

    if (!isInputNumber && (!Number(lastCharacter) && lastCharacter !== '0')) {
        display.value = display.value.slice(0, -1);
    }

    display.value += inputValue;
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

    try {
        if (eval(display.value) === Infinity) {
            display.value = 'Division by zero is not allowed';
            return;
        }

        display.value = eval(display.value);
        isResult = true;
    } catch (error) {
        display.value = 'Invalid operation';
    }
}
