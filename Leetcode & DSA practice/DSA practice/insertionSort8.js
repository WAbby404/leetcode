function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let numToInsert = arr[i];
        let j = i - 1;
        while( j >= 0 && numToInsert < arr[j]){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j] = numToInsert;
    }
}
// T Bn Wn^2 S O(1)