function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(target === arr[middleIndex]){
            return middleIndex;
        }
        if(target < arr[middleIndex]){
            rightIndex = middleindex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }

    }
    return -1;
}
// T - B-O(1) W&A(log N) | S - O(1)