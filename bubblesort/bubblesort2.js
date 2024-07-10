function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

const arr = [5, 1, 4, 2, 8];
const arr2 = [9, 5, 3, 2, 4, 6];
bubbleSort(arr);
bubbleSort(arr2);
console.log(bubbleSort([4, 3, 5, 2, 1]));
