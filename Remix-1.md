# Remix 1

I will use a map function instead of writing a for loop.

```JavaScript
const count_true2 = (lst) => {
  let count = 0;
  lst.map((item) =>
    typeof item === "boolean" && item === true ? count++ : null
  );
  return count;
};
```

## Strategy

It will es6 syntax, all the false values will return 0 as value, I want the code to be shorter.

## Implementation

First i'll use a map function and then a if then function to check if the item of the array is true or false, if it is true it will add 1 to a storing variable, the process will be iterated for all the elements of the array.

I will implement a type check to be sure that all the values of the array are booleans, this wasn't required by Edabit.

**typeof _ !== _**: I use typeof and strict inequality to check the argument’s type.

I will use the same tests provided with the first implementation.

## Possible refactors

- write an arrow function
- make the callback function be an external function

## References

later
