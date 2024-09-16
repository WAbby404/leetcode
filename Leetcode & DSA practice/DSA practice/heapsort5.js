function heapify(arr, length, parentI){
    let largest = parentI;
    const lChildI = parentI * 2 + 1;
    const rChildI = lChildI + 1;
    if(lChildI < length && arr[lChildI] > arr[largest]){
        largest = lChildI;
    }
    if(rChildI < length && arr[rChildI] > arr[largest]){
        largest = rChildI;
    }
    if(largest !== parentI){
        [arr[parentI], arr[largest]] = [arr[largest], arr[parentI]];
        heapify(arr, length, largest);
    }
    return arr;
}

function heapsort(arr){
    let length = arr.length;
    let lastParentI = Math.floor(length / 2 - 1);
    let lastChildI = length - 1;
    // creates the heap (heapifys)
    while(lastParentI >= 0){
        heapify(arr, length, lastParentI);
        lastParentI--;
    }

    //swaps last element with largest element to make it sorted
    while(lastChildI >= 0){
        [arr[0], arr[lastChildI]] = [arr[lastChildI], arr[0]];
        // maintain heap standards here
        heapify(arr, lastChildI, 0);
        lastChildI--;
    }
    return arr;
}
//  T B&W n log n  S O(1)
//  log n