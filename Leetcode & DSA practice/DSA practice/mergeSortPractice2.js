function mergeSort(arr){
    // base case (fn size > 1)
    if(arr.length > 2) return arr;
    // find middle
    const mid = Math.floor(arr.length / 2);
    // capture left array
    const leftArr = arr.slice(0, mid);
    // capture right array
    const rightArr = arr.slice(mid);
    // call merge on both arrays togehter with merge sort seperately on arrays
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr){
    // declare sorted array;
    const sortedArr = [];
    // while there are elements left in both arrays
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}

// forgot <= (wrote <)
// peeked at start of merge, but got the rest (actually pretty easy to understand when you get used to it)