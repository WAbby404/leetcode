function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        // capture number to insert & capture the index of where the sorted array starts
        let numToInsert = arr[i];
        let j = i-1;
        // looping through sorted array starts at element lower than current element
        // loop down through sorted array & move bigger elements right once
        // will overwrite old elements that moved, putting insertNum into correct spot will also overwrite moved elements
        while(j >= 0 && arr[j] > numToInsert){
            arr[j + 1] = arr[j];
            j = j-1;
        }
        // set numberToInsert to its correct spot
        arr[j + 1] = numToInsert;
    }
}

let arr = [2,4,3,1];
insertionSort(arr);
console.log(arr);

// Time C: O(n^2) worst, O(n) best, Space C: O(1)
// for while