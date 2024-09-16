function selectionSort(arr){
    // arr.length, for for, n2
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[j];
        arr[j] = temp;
    }
}

// Time C: Ω(n^2) O(n^2) | Space C: O(1)