function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }    
    let middle = Math.floor(arr.length /2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge( mergeSort(left), mergeSort(right));
}   

function merge(left, right){
    let sortedArray = [];
    while(left.length && right.length){
        if(left[0] <= right[0]){
            sortedArray.push(left.shift());
        } else {
            sortedArray.push(right.shift());
        }
    }
    return [ ...sortedArray, ...left, ...right];
}

// T-  | S- O(n)
// WRONG: T&S
// B n log n W n^2