function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let middleI = Math.floor(arr.length / 2);
    let left = arr.slice(0, middleI);
    let right = arr.slice(middleI);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(leftA, rightA){
    let sortedArray = [];
    while(leftA.length && rightA.length){
        if(leftA[0] < rightA[0]){
            sortedArray.push(leftA.shift());
        } else {
            sortedArray.push(rightA.shift());
        }
    }
}
// T BW n log n S n 