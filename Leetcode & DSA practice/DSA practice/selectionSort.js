const selectionSort = arr => {
    // loop through array
    for( let i = 0; i < arr.length; i++){
        // find index of smallest element
        // grab an index, (start with one and move forward)
        let indexMin = i;
        // for each element in array past sorted portion of array (or past first element)
        for(let j = i + 1; j < arr.length; j++){
            // if the value is smaller than current smallest
            if(arr[j] < arr[indexMin]){
                // assign its index to indexMin (remember we are looking for smallest elements index here)
                indexMin = j;
            }
        }
        // swap current element with smallest element (using a temp var)
        let temp = arr[indexMin];
        arr[indexMin] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
}

let arr = [8,5,7,4];
selectionSort(arr);