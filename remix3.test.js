/**
 * create a function which returns the number of true values there are in an array
 *
 * @param {[boolean]} lst An array of booleans
 * @returns {number} How many true values are in the array
 */
const count_true4 = (lst) => {
  return lst.filter((item) => item === true).length;
};

const test1 = count_true4([true, false, true]);
const test2 = count_true4([true, false, true, false, true, true, false, false]);
const test3 = count_true4([true, false]);

describe("given an array of booleans count how many true values there are", () => {
  it("count_true4([true, false, true]) => 2", () => {
    expect(test1).toEqual(2);
  });
  it("count_true4([true, false, true, false, true, true, false, false]) => 2", () => {
    expect(test2).toEqual(4);
  });
  it("count_true4([true, false]) => 1", () => {
    expect(test3).toEqual(1);
  });
});
