function heapify(arr, length, parentI){
    let largest = parentI;
    const lChildI = parentI * 2 + 1;
    const rChildI = lChildI + 1;
    if(lChildI < length && arr[largest] < arr[lChildI]){
        largest = lChildI;
    }
    if(rChildI < length && arr[largest] < arr[rChildI]){
        largest = rChildI;
    }
    if(largest !== parentI){
        [arr[largest], arr[parentI]] = [arr[parentI], arr[largest]];
        heapify(arr, length, largest);
    }
    return arr;
}
// T log n
function heapSort(arr){
    let length = arr.length;
    let lastParentI = Math.floor(length / 2 - 1);
    let lastChildI = length - 1;
    // builds heap (heapifys bottom up)
    while(lastParentI >= 0){
        heapify(arr, length, lastParentI);
        lastParentI--;
    }
    // 
    while(lastChildI >= 0){
        [arr[0],[arr[lastChildI]]] = [arr[0], arr[lastChildI]];
        heapify(arr, length, 0);
        lastChildI--;
    }
    return arr;
}
// T BW n log n S O(1)