/**
 * Returns the sum of a and b
 * @param {number} a a number
 * @param {number} b a number
 * @returns {number}
 */
function sum(a, b) {
  return a + b;
}

/**
 * Returns the multiplication of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number} Multiplication of a and b
 */
function mult(a, b) {
  return a * b;
}

/**
 * returns the string Hello + the input given
 * @param {string} somebody
 */
function sayHello(somebody) {
  if (typeof somebody !== "string") {
    console.log("input must be a string");
  }
  console.log("Hello " + somebody);
}

sayHello(true);

// function in function
/**
 *
 * @param {number} num
 * @param {boolean} bol
 */
function something(num, bol) {
  console.log(num);
  /**
   * Returns always true
   * @param {boolean} bol A boolean
   * @returns {boolean} true
   */
  function somethingElse(bol) {
    console.log(bol);
    return true;
  }
  return somethingElse(bol);
}

console.log(`returns ${something(1, false)}`);
console.log(`returns ${something(3444, true)}`);
