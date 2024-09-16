function selectionSort(arr){
    // loop trhough each element in the array
    for(let i = 0; i< arr.length; i++){
        // capture the current loops element (and assume that it is smallest)
        let minIndex = i;
        // loop through elements beyond the sorted array
        for(let j = i + 1; j < arr.length; j++){
            // if old min is smaller than current inner loops min
            if(arr[j] < arr[minIndex]){
                // reassign it to the min
                minIndex = j;
            }
        }
        // where the swap happens
        let temp = arr[minIndex];
        arr[minIndex] = arr[j];
        arr[j] = temp;
    }
}

// Time C: B- O(n^2) W- O(n^2)  Space C: O(1)
// wrong: if(arr[minIndex] < arr[j])
//       initialized J outside of for loop to i-1
//          time C best O(n)