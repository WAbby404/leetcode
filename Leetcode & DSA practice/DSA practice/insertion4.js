function insertionSort (arr) {
    for( let i = 0; i < arr.length; i++){
        let numToInsert = arr[i];
        let j = i - 1;
        while( j >= 0 && numToInsert < arr[j]){
            // swap the righter value to lower
            arr[j + 1] = arr[j];
            // select position below righter value
            j = j - 1;
        }
        // swap lefter value to intertNum or current iteration num
        arr[j + 1] = numToInsert;
    }
    return arr;
}


[3, 2, 1, 4]
[2, 3, 1, 4] 
 - [2, 1, 3, 4]
 - [1, 2, 3, 4]