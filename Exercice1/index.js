/**
 * return a string of pairs of numbers between min and max
 * @param {Integer} start
 * @param {Integer} end
 * @returns {String} pairs of numbers
 */
function pairNumbers(start, end) { 
  // test if min is greater than max
  if (start > end) {
    return '';
  }

  let result = '';
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      result += i + ',';
    }
  }
  return result.slice(0, -1);
}

export default pairNumbers
