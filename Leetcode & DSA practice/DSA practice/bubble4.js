function bubbleSort(array) {
    // bubble sort will compare value to the one next to it & 'bubble up' a value when it is bigger than the next till sorted
    let switched;
    do {
        switched = false;
        for(let i = 0; i < array.length - 1; i++){
            if(array[i] > array[i + 1]){
                let swap = array[i];
                array[i] = array[i + 1];
                array[i + 1] = swap;
                switched = true;
            }
        }
    } while (switched)
    return array;
}


let myArray = [8,3,6,2,7,1,5,4]
console.log(bubbleSort(myArray));