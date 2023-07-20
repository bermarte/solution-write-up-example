const mul = require("./mul");
//step 1
test("1 * 2 to equal 2", () => {
  expect(mul(1, 2)).toEqual(2);
});
test("5 * 2 to equal 10", () => {
  const test2 = mul(5, 2);
  expect(test2).toBe(10);
});

test("5 * 3 to equal 15", () => expect(mul(5, 3)).toEqual(15));

// step 2
describe("testing mul", () => {
  test("1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toEqual(2);
  });
  test("5 * 2 to equal 10", () => {
    const test2 = mul(5, 2);
    expect(test2).toEqual(10);
  });
});
