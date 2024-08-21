/**
 * return a string of pairs of numbers between min and max
 * @param {Integer} start
 * @param {Integer} end
 * @returns {String} pairs of numbers
 */
function pairNumbers(start, end) { 
  // test if start and end are defined
  if (isNaN(start) || isNaN(end)) {
    return '';
  }

  // test if start and end are integers or strings with integers
  if (!Number.isInteger(parseInt(start)) || !Number.isInteger(parseInt(end))) {
    return '';
  }

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

// test
console.log(pairNumbers(1, 10)); // 2,4,6,8,10
console.log(pairNumbers('1', '10')); // 2,4,6,8,10
console.log(pairNumbers(1, 10)); // 2,4,6,8,10
console.log(pairNumbers(1, 10)); // 2,4,6,8,10

export default pairNumbers
