function quickSort(arr){
    // base case if array is shorter than 2 elements return the array
    if(arr.length < 2){
        return arr;
    }
    // capture pivot (using last element here), left array & right array
    let pivot = arr[arr.length -1];
    let left = [];
    let right = [];
    // loop through whole array
    for(let i = 0; i < arr.length - 1; i++){
        // if current loops element is less than pivot
        if(arr[i] < pivot){
            // add it to the left array
            left.push(arr[i]);
        // if current loops element is more than pivot
        } else {
            // add it to the right array
            right.push(arr[i]);
        }
    }
    // return recursive call to quicksort (breaking down left & right arrays till 1 element is left)
    // as arrays reach 1 element & start returning back up the list, concat left elements, pivot, then right elements into one whole array
    // returning back up to original length of array
    return [...quickSort(left), pivot, ...quickSort(right)];
    // return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [3,6,2,4,7,33,6,4,7634,6,3,68,4,2,6,86,0];
console.log(quickSort(array));
