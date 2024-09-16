function selectionSort(arr){
    for(let i = 0; i < arr.length; i ++){
        let minIndex = i;
        for(let j = i + 1; i < arr.length; i++){
            if(arr[j] < arr[minIndex]){
                minIndex = i;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}
// T BWn^2 S O(1)