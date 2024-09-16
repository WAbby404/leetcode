function binarySearch(arr, target){
    let leftI = 0;
    let rightI = arr.length - 1;
    while(leftI < rightI){
        let middleI = Math.floor(leftI + rightI / 2);
        if(arr[middleI] === target){
            return middleI;
        } 
        if(arr[middleI] > target){
            rightI = middleI - 1;
        } else {
            leftI = middleI + 1;
        }
    }
}
// BW log n S O(1)