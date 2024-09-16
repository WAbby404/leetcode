function selectionSort(arr){
    // loops through array to do the sorting
    for(let i = 0; i < arr.length - 1; i++){
        // grabs starting index to loop to find smallest
        let minIndex = i;
        // grabs all elements in a loop after first element to start switching which element is the smallest
        // j searchest for the smallest element index
        // minIndex IS the smallest element index
        for(let j = i + 1; j < arr.length - 1; j++){
            // if new small element is smaller than smallest
            if(arr[j] < arr[minIndex]){
                // then change the smallest element
                minIndex = j;
            }
        }
        // swap elements
        let temp = arr[minIndex];
        arr[minIndex] = arr[j];
        arr[j] = temp;
    }
}

// Time C: B & W- O(n^2) | Space C: O(1)

// was initially correct that this is the sort with minIndex & for for
// got most else wrong