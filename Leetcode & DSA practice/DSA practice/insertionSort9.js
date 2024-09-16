function insertionSort(arr){
    for(let i = 0; i < arr.length - 1; i++){
        let numToInsert = arr[i];
        let j = i - 1;
        while( j >= 0 && arr[j] > numToInsert){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numToInsert;
    }
}
// T B n W n^2 | S O(1)