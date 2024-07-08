// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  let arrayWords = [];
  let tempWord = "";
  strs.forEach((string, index) => {
    tempWord = string.split("");
    arrayWords.push(tempWord);
    console.log(tempWord);
  });

  // track indexes, grab first, check against second, then third, add to an array if it passes
  // else none
  let tempLetter = "";
  let letterCounter = 0;
  let prefix = [];

  //   while letter counter is smalelr than or equal to the shortest word
  for (let i = 0; i < arrayWords.length; i++) {
    if (tempLetter === "") {
      tempLetter = arrayWords[i][letterCounter];
      prefix.push(arrayWords[i][letterCounter]);
      //   break?
    } else if (arrayWords[i][letterCounter] === tempLetter) {
      prefix.push(arrayWords[i][letterCounter]);
    }
  }

  console.log(prefix);
};

longestCommonPrefix(["flower", "flow", "flight"]);
