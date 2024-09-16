function bubbleSort(arr){
    let swapped;
    do{
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i + 1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while(swapped)
    return arr;
}

let array = [9,2,6,3,1];
console.log(bubbleSort(array));
// did almost perfectly, looked at card before writing swap portion
// maybe also quiz myself on time & space complexity 
// Time C: O(n^2) W, O(n) B, Space C: O(1)
// do for