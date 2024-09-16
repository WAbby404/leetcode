function binarySearch(arr, target){
    return searchRecursion(arr, target, 0, arr.length - 1);
}

function searchRecursion(arr, target, leftI, rightI){
    if(leftI > rightI){
        return -1;
    }
    let middleI = Math.floor( leftI + rightI / 2);
    if(target === arr[middleI]){
        return middleI;
    }
    if(target < arr[middleI]){
        searchRecursion(arr, target, leftI, middleI - 1);
    } else {
        searchRecursion(arr, target, middleI + 1, rightI);
    }
}
// T  log n  S log n