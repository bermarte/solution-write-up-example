# Remix 1

I will use the `reduce` function, which is probably the most difficult high-order function in JavaScript.

```JavaScript
const count_true5 = (lst) => {
  return lst.reduce((count, value) => count + (value === true ? 1 : 0), 0);
};
```

## Strategy

I will use ChatGPT to analize the different solutions.

## Implementation

This implementation uses the reduce method to iterate over the array lst and accumulate the count of true values. The initial value of count is set to 0, and for each element in the array, it checks if the value is true. If it is, it increments the count by 1; otherwise, it adds 0. The result is the total count of true values in the array.

## Possible refactors

- Use an arrow function
- Move all the test functions in a separated folder and import them
- Clean up the tests

## References

[ChatGPT](https://chat.openai.com/)
