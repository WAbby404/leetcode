function binarySearchR (arr, target){
    return search(arr, target, 0, arr.length -1);
}

function search(arr, target, leftI, rightI){
    if(leftI > rightI){
        return -1;
    }
    let middleI = Math.floor((leftI + rightI) /2);
    if(target === arr[middleI]){
        return middleI;
    }
    if(target < middleI){
        return search(arr, target, leftI, middleI - 1);
    } else {
        return search(arr, target, middleI + 1, rightI);
    }
}
// T log n |S - log n