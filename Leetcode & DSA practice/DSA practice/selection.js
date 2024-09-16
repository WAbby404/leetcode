function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let numIndex = i;
        for(let j = i + 1; j < arr.length; i++){
            if(arr[j] < arr[numIndex]){
                numIndex = j;
            }
        }
        let temp = arr[numIndex];
        arr[numIndex] = arr[i];
        arr[i] = temp;
    }
}
// T- B&W (n^2) | S- O(1)