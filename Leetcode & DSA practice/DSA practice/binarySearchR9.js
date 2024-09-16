function binarySearchR(arr){
    return search(arr, target, 0, arr.length -1);
}

function search(arr, target, leftI, rightI){
    if(leftI > rightI){
        return -1;
    }
    let middleI = Math.floor((leftI + rightI) / 2);
    if(arr[middleI] === target){
        return middleI;
    }
    if(target < arr[middleI]){
        search(arr, target, leftI, middleI - 1);
    } else {
        search(arr, target, middleI + 1, rightI);
    }
}
//  T log n   S log n