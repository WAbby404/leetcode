function selectionSort(arr) {
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[j];
        arr[j] = temp;
    }
}
// got how the sort pattern & general structure but had to look at card for specifics 
// forgot minIndex