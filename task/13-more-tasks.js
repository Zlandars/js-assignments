/**
 * Takes two strings including only letters from a to z.
 * Returns a new sorted string containing distinct letters.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'azy', 'bk' => 'abkyz'
 *   'zxxlal','laxk'    => 'aklxz'
 *   'abcdefghijklmnop',  'lmnopqrstuvwxyz'  => 'abcdefghijklmnopqrstuvwxyz'
 */
export function distinctLettersString(value1, value2) {

  return [...new Set(value1 + value2)].sort().join('')

  /* implement your code here */
  // throw new Error('Not implemented');
}


/**
 * Takes a string with any characters.
 * Returns an object containing appearence of every distinct letters in lower case.
 * 
 * @param {string} value
 * @return {Object}
 * 
 * @example
 *  'Who you are, Buddy?' => { a:1, d:2, e:1, h:1, o:2, r:1, u:2, y:2 }
 *
 */

export function lowerLetters(value) {

  return value.match(/[a-z]/g).sort().reduce((acc, el) => {
    acc[el] = acc[el] ? acc[el] += 1 : 1
    return acc
  }, {})  

  /* implement your code here */
  // throw new Error('Not implemented');
}