# Remix 1

I will replace the `for-loop` by using `for-of` loop.

```JavaScript
const count_true3 = (lst) => {
  let count = 0;
  for (const item of lst) {
    if (item === true) {
      count++;
    }
  }
  return count;
};
```

## Strategy

I will use ChatGPT to analize the different solutions

## Implementation

This implementation iterates over the array lst using a `for...of` loop, and for each element, it checks if the value is true. If it is, it increments the count by 1. Finally, it returns the total count of true values in the array.

## Possible refactors

- Use an arrow function

## References

[ChatGPT](https://chat.openai.com/)
