/**
 * function to convert decimal to binary
 */
function convertToBinary() {
  let decimal = document.getElementById('decimalInput').value;
  const binaryResult = document.getElementById('binaryResult');
  binaryResult.innerHTML = '';

  // test if decimal is not a number and not an integer 
  if (!Number(decimal) || decimal % 1 !== 0) {
    return;
  } else {
    // convert decimal to binary
    let binary = Number(decimal).toString(2);

    binaryResult.innerHTML = binary;
  }
}