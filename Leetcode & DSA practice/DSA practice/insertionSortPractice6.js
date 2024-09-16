function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let numToInsert = arr[i];
        let j = i - 1;
        while( j >= 0 && numToInsert > arr[j] ){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numToInsert;
    }
    return arr;
    // for while, numToInsert & j
}
// Time C: Ω(n) O(n^2) Space C: O(1)
// Wrong: had to look at arr.length & make sure it wasnt arr.length - 1
//      had to look at J, found out it goes j - 1, j + 1, j - 1, j + 1, - + - +