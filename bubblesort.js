function bubbleSort(arr) {
  // has a var that will check values against current iterations # & bubble up the value to the end, switching spaces along the way
  let swapped;
  // if we swapped a value on this iteration, then check list again
  do {
    // start with swap as false
    swapped = false;
    // loop through array,
    for (let i = 0; i < arr.length - 1; i++) {
      // if current element is bigger than next element
      if (arr[i] > arr[i + 1]) {
        // switch elements (using a temp variable)
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;

        swapped = true;
      }
    }
    // if elements get swapped, loop gets repeated
  } while (swapped);
  console.log(arr);
}

// O:n^2
const arr = [5, 1, 4, 2, 8];
const arr2 = [9, 5, 3, 2, 4, 6];
bubbleSort(arr);
bubbleSort(arr2);
console.log(bubbleSort([4, 3, 5, 2, 1]));
