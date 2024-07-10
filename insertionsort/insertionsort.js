function insertionsort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // numToInsert will be sorted next
    let numToInsert = arr[i];
    // sortedIndex is the index of when the sorted array starts
    let sortedIndex = i - 1;
    // when index is in the list and current number is bigger than number to insert
    while (sortedIndex >= 0 && arr[sortedIndex] > numToInsert) {
      // set number sorting equal to num bigger than it
      // this portion shifts number to the right
      arr[sortedIndex + 1] = arr[sortedIndex];
      //move j to the next element (moving left) in sorted portion of array
      //checks each element in sorted array to place numToInsrt in correct spot
      sortedIndex = sortedIndex - 1;
    }
    //now that we have the correct position (for num we are inserting)
    // assign it the correct number
    arr[sortedIndex + 1] = numToInsert;
  }
}
// Insertion sort video
// https://www.youtube.com/watch?v=JU767SDMDvA
