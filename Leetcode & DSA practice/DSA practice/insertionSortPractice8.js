function insertionSort (arr){
    for(let i = 0; i < arr.length; i++){
        let numToInsert = arr[i];
        let j = i - 1;
        while( j >= 0 && numToInsert < arr[j]){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = numToInsert;
    }
    return arr;
}
// Time C: B-O(n) W-O(n^2) | Space C: O(1)
// Correct!

let corn = [2,4,1,3,7,44];
console.log(insertionSort(corn));