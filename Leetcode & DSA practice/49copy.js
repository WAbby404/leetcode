var groupAnagrams = function(strs) {
    let outputArray = [];
    while(strs.length){
        let innerArray = [strs[0]];
        let firstElement = strs.shift();
        let isAnagram;
        let strsIndex = 0;
        while(strsIndex <= strs.length - 1){
            isAnagram = true;
            if(firstElement.length !== strs[strsIndex].length){
                isAnagram = false;
            } else {
                let oArray;
                let aArray;
                if(firstElement.length > 1 && strs[strsIndex].length > 1) {
                    oArray = firstElement.split('').sort();
                    aArray = strs[strsIndex].split('').sort();
                    let eachLetter = 0;
                    oArray.forEach(letter => {
                        if(!letter.includes(aArray[eachLetter])){
                            isAnagram = false;
                        } else {
                            eachLetter++;
                        }
                    })
                } else {
                    if(!firstElement.includes(strs[strsIndex])){
                        isAnagram = false;
                    } else {
                        isAnagram = true;
                    }
                }
                }
            if(isAnagram === true){
                innerArray.push(strs[strsIndex]); 
                strs.splice(strsIndex, 1);
            } else {
                strsIndex++;
            }
        }
        outputArray.push(innerArray);
    }
    return outputArray;
};