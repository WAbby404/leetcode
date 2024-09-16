var groupAnagrams = function(strs) {
    let outputArray = [];
    while(strs.length){
        let innerArray = [strs[0]];
        // console.log(`strs length ${strs.length}`);
        let firstElement = strs.shift();
        // console.log(`strs length ${strs.length}`);
        // console.log('strs:');
        // console.log(strs);
        // console.log('innerArray: ');
        // console.log(innerArray);
        // console.log('firstElement:');
        // console.log(firstElement === '' ? "''" : firstElement);
        let isAnagram;
        let strsIndex = 0;
        // change to while & only increment j when is not anagram
        while(strsIndex <= strs.length - 1){
            isAnagram = true;
            // checks to see if anagram on length will result in t/f isAnagram
            if(firstElement.length !== strs[strsIndex].length){
                // console.log(`lengths: firstElement: ${firstElement.length} & current Element in innerloop:${strs[strsIndex].length} NOT ANAGRAM`);
                isAnagram = false;
            // checks to see if anagram will result in t/f isAnagram
            } else {
                // console.log(`i: ${firstElement} | j: ${strs[strsIndex]}`);
                let oArray;
                let aArray;
                // if more than 1 element
                if(firstElement.length > 1 && strs[strsIndex].length > 1) {
                    oArray = firstElement.split('').sort();
                    // console.log(oArray);
                    aArray = strs[strsIndex].split('').sort();
                    // console.log(aArray);
                    let eachLetter = 0;
                    oArray.forEach(letter => {
                        if(!letter.includes(aArray[eachLetter])){
                            isAnagram = false;
                        } else {
                            eachLetter++;
                        }
                    })
                // if 1 element
                } else {
                    if(!firstElement.includes(strs[strsIndex])){
                        isAnagram = false;
                    } else {
                        isAnagram = true;
                    }
                }
                // console.log(`isAnagram: ${isAnagram}`);
                }
            // push elements to inner array
            if(isAnagram === true){
                innerArray.push(strs[strsIndex]); 
                strs.splice(strsIndex, 1);
            } else {
                strsIndex++;
            }
            // console.log(`innerArray: ${innerArray}`);
        }
        outputArray.push(innerArray);
        // console.log(`strs: ${strs}`)
        // console.log(`outerArray: ${outputArray}`)
        // console.log('___-_-_-_---__----__');
    }
    // finally push inner array to outer array
    return outputArray;
};

let strs = ["eat","tea","tan","ate","nat","bat"];
// console.log(groupAnagrams(strs));
// console.log(groupAnagrams(["",""]));
console.log(groupAnagrams(["","",""]));