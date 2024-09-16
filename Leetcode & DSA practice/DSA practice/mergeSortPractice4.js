function mergeSort(arr){
    // base case, if array has 1 element left, return array to start merging
    if(arr.length < 2){
        return arr;
    }
    // find middle of array
    const middle = Math.floor(arr.length / 2);
    // capture left array (start to mid)
    const leftArr = arr.slice( 0, middle );
    // capture right array (middle to end)
    const rightArr = arr.slice( middle );
    // return a call to merge the sorted left & right arrays (recursivly executes)
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr){
    // define a sorted array
    const sortedArr = [];
    // while there are still elements in the arrays
    // if(leftArr.length && rightArr.length){
    while(leftArr.length && rightArr.length){
        // if left first element is smaller than right first element
        // if(leftArr[0] < rightArr[0]){
        if(leftArr[0] <= rightArr[0]){
            //  add it to the list
            sortedArr.push(leftArr.shift());
        // if opposite is true 
        } else {
            // add it to the list
            sortedArr.push(rightArr.shift());
        }
    }
    // merge the last element to list no matter where it is (for uneven array nums)
    return [...sortedArr, ...leftArr, ...rightArr];
}

// Time C: B-O(log n)  W-O(n log n)   Space C: O(n)
// wrong: B & W - O(n ,log n) 
//      had an if statement instead of while in second fn
//      forgot <= in if in second fn