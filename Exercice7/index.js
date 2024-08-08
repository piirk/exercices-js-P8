/**
 * function to convert decimal to binary
 */
function convertToBinary() {
  let decimal = document.getElementById('decimalInput').value;
  const binaryResult = document.getElementById('binaryResult');
  binaryResult.innerHTML = '';

  // test if decimal is not a number
  if (isNaN(decimal) && isNaN(parseInt(decimal))) {
    return;
  } else {
    // convert decimal to binary
    let binary = '';
    while (decimal > 0) {
      binary = (decimal % 2) + binary;
      decimal = Math.floor(decimal / 2);
    }

    binaryResult.innerHTML = binary;
  }
}