function selectionSort(arr) {
    // loop through whole array, current loop index getting compared
    for(let i = 0; i < arr.length; i++){
        // capture the index we are comparing to be the smallest
        let minIndex = i;
        // loop through remaining elements
        for(let j = i + 1; j < arr.length; j++){
            // if current inner loops value at index is smaller than minIndex value
            if(arr[minIndex] > arr[j]){
                // reassign minIndex to be the index of inner loop
                minIndex = j;
            }
        }
        // swapping occurs here (inner loop will always find the smallest value for that loop)
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
// Time C: B-O(n^2) W-O(n^2) | Space C: O(1)

const arr = [5,3,1,4,2];
console.log(selectionSort(arr));