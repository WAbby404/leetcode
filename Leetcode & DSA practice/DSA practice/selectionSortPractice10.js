function selectionSort (arr){
    // loop through whole array
    for(let i = 0; i < arr.length; i++){
        // grab current iterations value
        let minIndex = i;
        // for each element past outside iterations value
        for(let j = i + 1; j < arr.length; j++){
            // check if its smaller than our minIndex
            if(arr[minIndex] > arr[j]){
                // if it is, change the minIndex to current inner loops index
                minIndex = j;
            }
        }
        // swap values here to sort the new smallest element we found with the current iterations place"
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }

}
// Time C: Ω(n^2) O(n^2) | Space C: O(1)
