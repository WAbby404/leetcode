function bubbleSort(arr){
    // declare swapped first (this is an optimized version of bubblesort, can possibly get O(n) time)
    let swapped;
    // do this code first
    do{
        // first set swapped to false
        swapped = false;
        // loop through whole array
        // for( let i = 0; i < arr.length; i++){
        for( let i = 0; i < arr.length - 1; i++){
            // if current value is bigger than the value next to it (moving right), 
            if(arr[i] > arr[i + 1]){
                // swap the values here
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                // set swapped to true to show that we have swapped elements this iteration (to save us time if it is already sorted)
                swapped = true;
            }
        }
    // check that swapped is true, do loop again if true
    } while(swapped)
    // return array when done;
    return arr;
}
// Space C: B- O(n) W- O(n^2) | Space C: O(1)
const arr = [4,3,2,1];
console.log(bubbleSort(arr));
const array = [4,3,2,1,6,7,3,8];
console.log(bubbleSort(array));

// forgot array.length -1