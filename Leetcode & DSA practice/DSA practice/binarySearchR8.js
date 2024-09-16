function binarySearchR(arr, target){
    return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftI, rightI){
    if(leftI > rightI){
        return -1;
    }
    let middleI = Math.floor((leftI + rightI) /2);
    if(arr[middleI] === target){
        return middleI;
    }
    if(arr[middleI] < target){
        search(arr, target, middleI + 1, rightI);
    } else {
        search(arr, target, leftI, middleI -1);
    }
}
// T log n | S log n