var isAnagram = function(original, isAnagram) {
    const oArray = original.split('').sort();
    const aArray = isAnagram.split('').sort();
    // console.log(oArray);
    // console.log(aArray);
    let aIndex = 0;
    let isEqual = true;
    // console.log(oArray);
    // console.log(aArray);
    if(oArray.length !== aArray.length){
        return false;
    }
    oArray.forEach(letter => {
        // console.log(letter);
        // console.log(aArray[aIndex]);
        if(letter.includes(aArray[aIndex])){
            // console.log(`compared: ${letter} & ${aArray[aIndex]}`);
            aIndex++;
        } else {
            // console.log('else reached');
            isEqual = false;
        }
    })
    return isEqual;
};

// console.log(isAnagram('anagram', 'nagaram'));
// console.log(isAnagram('rat', 'car'));
console.log(isAnagram('a', 'ab'));