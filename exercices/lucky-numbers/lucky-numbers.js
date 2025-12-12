// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  return Number(array1.join.call(array1, '')) + Number(array2.join.call(array2, ''));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  // https://www.geeksforgeeks.org/javascript/reverse-a-string-in-javascript/
  return String(value).split('').reverse().join('') == String(value);
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (!Boolean(input)){
    return 'Required field';
  }
  else if (!Number(input)){
    return 'Must be a number besides 0';
  }
  else if (Boolean(Number(input))){
    return '';
  }
}
