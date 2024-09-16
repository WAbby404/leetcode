function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let middleI = Math.floor(arr.length / 2);
    let left = arr.splice(0, middleI);
    let right = arr.splice(middleI);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let sortedArray = [];
    if(left[0] < right[0]){
        sortedArray.push(left.shift());
    } else {
        sortedArray.push(right.shift());
    }
    return [...sortedArray, ...left, ...right];
}
// T - BW n log n  | S - O(n)