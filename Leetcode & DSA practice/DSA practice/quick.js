function quickSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let pivot = Math.floor(( 0 +  arr.length -1) / 2);
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length -1; i++){
        if(arr[i] < arr[pivot]){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), ...pivot, ...quickSort(right)];
}
// T- BW(n log n)  | S- O(n)
// WRONG: B&A - n log n  W - (n^2) | S - log n