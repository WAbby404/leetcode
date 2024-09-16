function selectionSort(arr){
    for( let i = 0; i < arr.length; i++){
        let numIndex = i;
        for(let j = i + 1; j < arr.length; i++){
            if(arr[numIndex] > arr[j]){
                numIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[numIndex];
        arr[numIndex] = temp;
    }
}
// T- B&W (n^2)  | S- O(1)