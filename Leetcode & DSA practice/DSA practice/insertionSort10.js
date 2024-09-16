function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let numToInsert = i;
        let j = i - 1;
        while( j >= 0 && arr[numToInsert] < arr[j]){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = arr[numToInsert];
    }
}
//T - B n W n^2  S - (1)