function insertionSort(arr){
    // start a for loop at the second element in the array
    for(let i = 1; i < arr.length; i++){
        // capture the number that we're going to insert/sort
        let numToInsert = arr[i];
        // capture the index of the start of the sorted numbers in our array
        let j = i - 1;
        // only while we are still in the list 
        // and while current number is bigger than the number we want to insert
        while(j >= 0 && arr[j] > numToInsert){
            // set number we are sorting equal to number that is bigger than it 
            // this is the portion that shifts the number to the right
            arr[j + 1] = arr[j];
            // move j to the next element(moving left) in sorted portion of array
            j = j - 1;
        }
        // now that we are on the correct position of the number we are inserting
        // assign it in the array
        arr[j + 1] = numToInsert;

    }
}