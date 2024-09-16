function binarySearchR(arr, target){
    return search(arr, target, 0, arr.length -1);
}

function search(arr, target, leftI, rightI){
    // while(leftI < rightI){
    //     let middleI = Math.floor((leftI + rightI) / 2);
    //     if(target === arr[middleI]){
    //         return middleI;
    //     }
    //     if(target < arr[middleI]){
    //         rightI = middleI - 1;
    //     } else {
    //         leftI = middleI + 1;
    //     }
    // }
    // return -1;
}
// T- log n | S- O(log n)