const selectionSort = arr => {
    // loop through whole array
    for(let i = 0; i < arr.length; i++){
        // grab first index, will be comparing this to rest of array to find smallest later
        let indexMin = i;
        // for each element past outerloop
        for(let j = i + 1; j < arr.length; j++){
            // if current iterations value is smaller than current min
            if(arr[j] < arr[indexMin]){
                // swap indexes
                indexMin = j;
            }
        }
        // swap elements once the element with smallest index is found
        let temp = arr[indexMin];
        arr[indexMin] = arr[i];
        arr[i] = temp;
    }
    console.log(arr);
}

let arr = [3,6,2,65,8,44];
selectionSort(arr);