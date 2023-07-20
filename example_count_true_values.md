# count trues values

Given an arry count how many true values there are in the given array.
From [Edabit-challenges on github](https://github.com/Muhammad-Tahir-S/Edabit-Challenges-Javascript)

## Syntax

```JavaScript
function count_true(lst) {
  let count = 0;
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] === true) {
      count++;
    }
  }
  return count;
}
```

## Parameters

**lst**: array of booleans

## Return value

number, returns how many true values are in the array

## Test Cases

```JavaScript
describe("given an array of booleans count how many true values there are", () => {
  it("count_true([true, false, true]) => 2", () => {
    expect(test1).toEqual(2);
  });
  it("count_true([true, false, true]) => 4", () => {
    expect(test2).toEqual(4);
  });
  it("count_true([true, false]) => 4", () => {
    expect(test3).toEqual(4);
  });
});
```

## Use cases

- Count how many students did their homework

- Count how many orders a shop has for a given customer

```JavaScript

const studentsWhoDidTheTests = [true, false, true, false, false, false, true];

const studentNames = [
  "john",
  "pam",
  "alfred",
  "jan",
  "ruben",
  "hanna",
  "tracy",
];
let students = [];
function count_true(lst) {
  let count = 0;
  for (let i = 0; i < lst.length; i++) {
    if (lst[i] === true) {
      count++;
      students.push(studentNames[i]);
    }
  }
  return count;
}

count_true(studentsWhoDidTheTests);
console.log(students); // john, alfred and tracy
```

## Retrospective
