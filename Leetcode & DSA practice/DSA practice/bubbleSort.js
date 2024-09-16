function bubbleSort(arr){
    // swapped will watch for if no elements are swapped, meaning the array is already in order
    let swapped;
    do{
        // start with swap as false
        swapped = false;
        // loop through array,
        for(let i = 0; i < arr.length - 1; i ++){
            // if current element is bigger than next element
            if(arr[i] > arr[i + 1]){
                // switch elements (using a temp variable)
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                // if elements get swapped, loop gets repeated
                swapped = true;
            }
        }
        // when elements have been swapped in this loop, repeat above code
    } while(swapped)
    
    console.log(arr);
}

const arr = [5,1,4,2,8];
const arr2 = [9,5,3,2,4,6];
bubbleSort(arr);
bubbleSort(arr2);