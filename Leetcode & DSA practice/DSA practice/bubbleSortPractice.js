function bubbleSort(arr){
    // swapped will check if elements got swapped this iteration, if none swapped then array is sorted and FN ends
    // this is optimized version, runtime is O(n2) at worst, but swapped makes it not always be O(n2) (still equivelates as two nested loops)
    let swapped;
    do{
        // start swapped at false
        swapped = false;
        // loop over each element in array
        for(let i = 0;i < arr.length - 1; i++){
            // if current element is less than next element
            if(arr[i] > arr[i+1]){
                // place current element in a temp variable & swap it with the next
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                // since we swapped on this iteration, set swapped to true
                swapped = true;
            }
        }
    // while we have swapped numbers this iteration, do the above code
    }while(swapped)
console.log(arr);
}

let arr = [4,1,2,3];
let arr2 = [9,3,6,121,5,3225,3,6,334];
bubbleSort(arr);
bubbleSort(arr2);