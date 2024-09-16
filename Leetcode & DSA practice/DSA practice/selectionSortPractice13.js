function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = 0; j < arr.length; i++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
// T - B & W O(n^2)  S - O(1)