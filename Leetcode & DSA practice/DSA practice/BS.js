function binarySearch(arr, target){
    let leftI = 0;
    let rightI = arr.length -1;
    // what if we check these before we move on? ^
    while(leftI < rightI){
        let middleI = Math.floor(leftI + rightI /2);
        if(target === arr[middleI]){
            return middleI;
        }
        if(target < arr[middleI]){
            rightI = middleI - 1;
        } else {
            leftI = middleI + 1;
        }
    }
}
// T log n S O(1)