function mergeSort(arr){
    // base case, while array is smaller than 2 elements, return arr (exit recursive)
    if(arr.length < 2){
        return arr;
    }
    // capture the middle element
    const mid = Math.floor(arr.length / 2);
    // capture left array
    const left = arr.slice(0, mid);
    // capture right array
    const right = arr.slice(mid);
    // return a call to merge each sorted array ( that will get sorted down to 1 element left in each array )
    return merge(mergeSort(left), mergeSort(right)); 
}
// fn for merging the elements
function merge(arrL, arrR){
    // declare sorted array;
    const sortedArr = [];
    // while left & right array both have a length (1 or greater)
    while(arrL.length && arrR.length){
        // and if first element of L array is smaller than rights first element
        // if(arrL[0] < arrR[0]){
        if(arrL[0] <= arrR[0]){
            // remove the first element from left array & add it to sorted array
            sortedArr.push(arrL.shift());
        // same but opposite for R array
        } else {
            sortedArr.push(arrR.shift());
        }
    }
    // return sorted array + if any single element is left in either L or R
    return [...sortedArr, ...arrL, ...arrR];
}
// Time C: B- (n^2) -O(n^2) | Space C: O(n)

// wrong: Time C: O(n log n)
//         <=
 