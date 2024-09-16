function binarySearch(arr, target){
    let lIndex = 0;
    let rIndex = arr.length -1;
    while(lIndex <= rIndex){
        let middleI = Math.floor((lIndex + rIndex) / 2);
        if(arr[middleI] === target){
            return middleI;
        }
        if(target < arr[middleI]){
            rIndex = middleI - 1;
        } else {
            lIndex = middleI + 1;
        }
    }
    return -1;
}
// T log n  | S O(1)