function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }
    let middleI = Math.floor(arr.length / 2);
    const leftA = arr.slice(0, middleI);
    const rightA = arr.slice(middleI);
    return merge(...mergeSort(leftA), ...mergeSort(rightA));
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
    return [...sortedArray, ...leftA, ...rightA];
}

// T B&W n log n | S - n