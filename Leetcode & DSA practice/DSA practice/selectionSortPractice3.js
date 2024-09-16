function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        // swap
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp; 
    }
}

// Time C: O(n^2) W & B, Space C: O(1)
// for for