//shift option A creates multiline comment /* ... */

//JSDoc: creates scaffolds, snippets, annotations (type annotation) similar to what typescript does

/**
 * create a function which returns the number of true values there are in an array
 *
 * @param {Array.<boolean>} lst An array of booleans
 * @returns {number} How many true values are in the array
 */
function count_true(lst) {
  let count = 0;
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] === true) {
      count++; // count = count + 1
    }
  }
  return count;
}
