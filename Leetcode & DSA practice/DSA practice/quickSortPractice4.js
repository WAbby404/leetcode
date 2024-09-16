function quickSort(arr){
    // base case
    if(arr.length < 2){
        return arr;
    }
    // select pivot (last element)
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
    // have two vars
    // left will look for first element larger than pivot
    // right will look for first element (from right) smaller than element
    // swap left & right till lefts index is larger than right
    // next largest item, swap pivot with it (pivot is now in the right place)
    // recursively call this fn on left & right portions of the array
}

// need to practice this one & separate it in my brain from other algos
// Time C: Ω(n log(n)) O(n^2) | Space C: O( log(n))