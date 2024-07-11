// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  let arrayWords = [];
  strs.forEach((string, index) => {
    arrayWords.push(string.split(""));
  });

  // 1 find shortest word in array of strings
  let shortestWord;
  for (let i = 0; i < strs.length; i++) {
    if (
      typeof shortestWord !== "string" ||
      strs[i].length < shortestWord.length
    ) {
      shortestWord = strs[i];
    }
  }
  console.log(shortestWord);

  // 2 check each letter, if all have that letter at that index, add it to prefix
  // loops over length of shortest word
  console.log(arrayWords);

  let currentLetterArray = [];
  let prefix = [];

  for (let letterIndex = 0; letterIndex <= shortestWord.length; letterIndex++) {
    // loops over each word

    for (let wordIndex = 0; wordIndex < strs.length; wordIndex++) {
      // push first letter of each to array, check array, if all letters are the same, add letter to output
      currentLetterArray.push(arrayWords[wordIndex][letterIndex]);
    }

    // currentLetterArray.every((val, i, arr) => val === arr[0]);
    console.log(currentLetterArray.every((val, i, arr) => val === arr[0]));
    if (currentLetterArray.every((val, i, arr) => val === arr[0])) {
      prefix.push(currentLetterArray[0]);
    } else {
      break;
    }
    // if all indexes of currentLetterArray === the same letter, add letter to prefix
    // if they dont == same letter, end loop
    console.log(currentLetterArray);
    currentLetterArray = [];
  }

  console.log(prefix);
  return prefix.join("");
};

// longestCommonPrefix(["flower", "flow", "flight"]);
// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["cir", "car"]));
