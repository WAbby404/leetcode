function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let numToInsert = arr[i];
    let sortedArrayIndex = i - 1;
    while (sortedArrayIndex >= 0 && numToInsert < arr[sortedArrayIndex]) {
      arr[sortedIndex + 1] = arr[sortedIndex];
      sortedIndex = sortedIndex - 1;
    }
    arr[sortedIndex + 1] = numToInsert;
  }
}
