/**
 * function to append a value to the display
 */
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

/**
 * function to clear the display
 */
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

/**
 * function to calculate the result
 */
function calculateResult() {
    const display = document.getElementById('display');
    if (eval(display.value) === Infinity) {
        display.value = 'Division by zero is not allowed';
        return;
    }
    display.value = eval(display.value);
}
