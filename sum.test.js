/* eslint-disable jsdoc/require-param-description */

// npm run test -- /test/arr.test.js
/** ...................
 * Returns the sum of a and b.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number} The sum of a and b.
 */
const sum = (a, b) => {
  return a + b;
};

describe("the text that we want to have for the test", () => {
  it("2 + 2", () => expect(sum(2, 2)).toEqual(4));
  it("5 + 6", () => expect(sum(5, 6)).toEqual(11));
});
