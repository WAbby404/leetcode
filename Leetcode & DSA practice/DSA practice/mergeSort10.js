function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let middle = Math.floor(arr.length - 1 /2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(...mergeSort(left), ...mergeSort(right));
}

function merge(lArray, rArray){
    let sortedArray = [];
    if(lArray[0] < rArray[0]){
        sortedArray.push(lArray.shift());
    } else {
        sortedArray.push(rArray.shift());
    }
    return [ ...sortedArray, ...lArray, ...rArray];
}
// T  BW n log n  S - n