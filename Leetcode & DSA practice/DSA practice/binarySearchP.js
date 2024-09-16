function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length -1;
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((arr.length /2));
        if(target === arr[middleIndex]){
            return middleIndex;
        }
        if(target < arr[middleIndex]){
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1; 
    // not found
}
//B- O(1) W- O(log n) | S O(1)
// WRONG:  Time & space (T- W- O(n log n) | S O(n))
