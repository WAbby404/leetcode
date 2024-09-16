function quickSort(arr){
    if(arr.length < 2){
        return arr;
    }
    // choose a pivot (we pick the end), left array & right array
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    // loop through whole array
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot ){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    } 
    return [...quickSort(left), pivot, ...quickSort(right)];
    // largerL will find first element larger than pivot 
    // let largerL = 
    // smallerR will find first element smaller than pivot (starting from the right)
    // swap them & start again
    // when largerL index is larger than smallerR index
    // swap pivot with next largerL
    // pivot is then in the right place
    // break array down to left & right of pivot
    // recurvisely call quicksort again on left & right
}

const array = [3,6,2,4,7,33,6,4,7634,6,3,68,4,2,6,86,0];
console.log(quickSort(array));
    // Time C: B- O(log n)  O(n log n) | Space C: O(n)

    // wrong: so much - need to study code more, got explanation sort of correct
            // time c: worst - O(n^2) | Space C: O(log(n))