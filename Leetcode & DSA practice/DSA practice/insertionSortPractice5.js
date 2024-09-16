function insertionSort(arr){
    // for while
    // loop through whole array
    for(let i = 0; i < arr.length; i++){
        // capture the number we are going to insert
        let numToInsert = arr[i];
        // capture the index of the start of the sorted list before the numToInsert
        let j = i - 1;
        // while J is still in the array & number to insert is smaller than sorted portion number
        while(j >= 0 && numToInsert < arr[j]){
            // first replace the numToInsert position
            arr[j + 1] = arr[j]; 
            // then work down the rest of the sorted array replacing numbers to put numToInsert in its spot
            j = j - 1;
        }
        // finally when we get to the place where numtoinsert should be, put it there
        arr[j + 1] = numToInsert;
    }
    return arr;
}
// Time C: B-O(n) W-O(n^2) | Space C: O(1)

const arr = [2,3,4,1];
console.log(insertionSort(arr));