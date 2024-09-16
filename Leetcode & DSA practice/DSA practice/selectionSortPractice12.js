function selectionSort (arr){
    for(let i = 0; i < arr.length; i++){
        let minIndex = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[minIndex] > arr[j]){
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}
// Time C: B & W - O(n^2) | Space C: O(1)

// wrong: j = 0;
let corn = [2,4,6,3,7,44];
console.log(selectionSort(corn));