function heapify(arr, length, parentI){
    let largest = parentI;
    const lChildI = Math.floor(parentI / 2 + 1);
    const rChildI = lChildI + 1;
    if(lChildI < length && arr[lChildI] > arr[largest]){
        largest = lChildI;
    }
    if(rChildI < length && arr[rChildI] > arr[largest]){
        largest = rChildI;
    }
    if(largest !== parentI){
        [arr[largest], arr[parentI]] = [arr[parentI], arr[largest]];
        heapify(arr, length, largest);
    }
}

function heapSort(arr){
    let length = arr.length;
    let lastParentI = Math.floor(length /2 - 1);
    let lastChildI = length - 1;

    // builds heap (maintains heap standards)
    while(lastParentI >= 0){
        heapify(lastParentI, length, lastParentI);
        lastParentI--;
    }
    // swaps largest (max heap, first element), to end to indicate sorted, & adjust length
    while(lastChildI >= 0){
        [arr[0], arr[lastChildI]] = [arr[lastChildI], arr[0]];
        heapify(arr, lastChildI, 0);
        lastChildI--;
    }
}
// T building n log n I&D log n  S - (1)