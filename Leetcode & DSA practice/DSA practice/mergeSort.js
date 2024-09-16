function mergeSort(arr){
    // if array is only 1 sorted element return it (end recursive loop) - base case
    if(arr.length < 2){
        return arr;
    }
    // get middle element index
    const mid = Math.floor(arr.length/2);
    // capture first half of array (left half)
    const leftArr = arr.slice(0, mid);
    // capture second half of array (right half)
    const rightArr = arr.slice(mid);
    // call merge sort again on both halves (will happen until arrays are down to single items)
    // then on each step back up the Fn calls, merge the sorted arrays back together
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr){
    // declare an array that will store the merged & sorted incoming arrays
    const sortedArr = [];
    // while the arrays both have a length bigger than 0
    while(leftArr.length && rightArr.length){
        // if first element in left array is smaller than first element in right array
        if(leftArr[0] <= rightArr[0]){
            // push that element onto the sorted array & remove it from the left array
            sortedArr.push(leftArr.shift());
        // if first element in right array is smaller than first element in left array
        } else {
            // push that element onto the sorted array & remove it from the right array
            sortedArr.push(rightArr.shift());
        }
        
    }
    // return sorted array & whatever elements that are left in left & right array ( will only be one element from 1 (L or R) array )
    console.log(sortedArr);
    return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));
// 8 20       -1 4 -6 mergeSort
// 8    20       -1    4 -6 merge(mergesort(left1), mergesort(right1))
// 8   20   -1   4   -6 merge(merge(mergesort(left2), mergesort(right2)), merge((mergesort(left2), mergesort(right2)))
//now merge
// 8 20   -6 -1 4
// -6 -1 4 8 20