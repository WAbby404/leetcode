function insertionSort(arr){
    // loop over whole array
    for(let i = 0; i < arr.length; i++){
        // grab the number we are sorting
        let numToInsert = arr[i];
        // index of start of sorted numbers
        let j = i-1;
        // while we are in the array & while j is bigger than numtoinsert
        while(j >= 0 && arr[j] > numToInsert){
            // replace number to insert with num that is bigger than insert
            arr[j+1] = arr[j];
            // rotate down to next element
            j = j-1;
        }
        // place num to insert in its correct spot
        arr[j+1] = numToInsert;
    }
}