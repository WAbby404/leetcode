function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let middle = Math.floor(arr.length - 1 / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    return merge(...mergeSort(left), ...mergeSort(right));
}

function merge(leftA, rightA){
    let sortedArray = [];
    while(leftA.length && rightA.length){
        if(leftA[0] <= rightA[0]){
            sortedArray.push(leftA.shift());
        } else {
            sortedArray.push(rightA.shift());
        }
    }
    return [...sortedArray, ...leftA, ...rightA];
}
// T BW n log n   S - n