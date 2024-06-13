// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(x) {
  console.log(x);
  console.log(Array.from(x.toString()).reverse().join(""));
  console.log(Array.from(x.toString()).reverse().join("") === x);
  console.log(Number(Array.from(x.toString()).reverse().join("")) === x);
  return Number(Array.from(x.toString()).reverse().join("")) === x;
}

isPalindrome(122);
isPalindrome(1221);
