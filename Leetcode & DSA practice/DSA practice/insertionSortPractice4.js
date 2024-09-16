function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let numToInsert = arr[i];
        let j = i -1;
        // let j = j - 1;
        while( j >=0 && arr[numToInsert] < arr[j]){
        // while( j <=0 && arr[numToInsert] < arr[j] ){
            // 
            arr[j+1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numToInsert;
    }
}
// Time C: B-O(n) W-O(n^2) Space C: O(1)
