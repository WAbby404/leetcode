function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let middleI = Math.floor(arr.length - 1 / 2);
    let left = arr.slice(0, middleI);
    let right = arr.slice(middleI);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(lArray, rArray){
    let sortedArray = [];
    while(lArray.length && rArray.length){
        if(lArray[0] <= rArray[0]){
            sortedArray.push(lArray.shift());
        } else {
            sortedArray.push(lArray.shift());
        }
    }
    return [...sortedArray, ...lArray, ...rArray];
}
// T B W n log n | S n