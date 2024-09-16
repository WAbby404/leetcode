function quickSort (arr){
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[arr.length -1];
    let left = [];
    let right = [];
    for(let i = 0; arr.length -1; i++){
        if(pivot > arr[i]){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}
// T B(n log n) W(n^2) | S- n