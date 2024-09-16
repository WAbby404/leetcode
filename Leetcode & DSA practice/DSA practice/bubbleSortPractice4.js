function bubbleSort(arr){
    let swapped;
    do{
        swapped = false
        for(let i = 0; i < arr.length; i++){
            if(arr[i] < arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true; 
            }
        }

    }while(swapped)
    return arr;
}

// Time C: B-O(n) W-O(n^2) Space C: O(1)
// wrong: didnt return array