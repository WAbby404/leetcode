function quickSort(arr){
    // base case, array has less than two elements
    if(arr.length < 2){
        return arr;
    }
    // capture pivot, left & right arrays
    let pivot = arr[arr.length - 1];
    let leftArr = [];
    let rightArr = [];

    // loop through whole array
    for(let i = 0; i < arr.length -1; i++){
        // if current element is less than pivot
        if(arr[i] < pivot){
            // push that number onto the sorted array
            leftArr.push(arr[i]);
        // if current element is larger than pivot
        } else {
            rightArr.push(arr[i]);
        }
    }
    // return recursive calls down to last elements in arrays, merge arrays back up through calls to form a whole sorted array
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [-6, 8, 20, -2, 4];
console.log(quickSort(arr));

const array = [3,6,2,4,7,33,6,4,7634,6,3,68,4,2,6,86,0];
console.log(quickSort(array));