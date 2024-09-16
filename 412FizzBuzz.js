// Fizz Buzz
// Given an integer n, return a string array answer (1-indexed) where:
//  - answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
//  - answer[i] == "Fizz" if i is divisible by 3.
//  - answer[i] == "Buzz" if i is divisible by 5.
//  - answer[i] == i (as a string) if none of the above conditions are true.

const fizzBuzz = function (n) {
  // loop over 1 up to n, adding string of n to an array
  // if current number is divisible by 3, then add Fizz instead
  // if current number is divisible by 5, then add Buzz instead
  // if current number is divisible by both 3 and 5, then add FizzBuzz instead
  let output = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output.push("FizzBuzz");
    } else if (i % 5 === 0) {
      output.push("Buzz");
    } else if (i % 3 === 0) {
      output.push("Fizz");
    } else {
      output.push(`${i}`);
    }
  }
  return output;
};

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
