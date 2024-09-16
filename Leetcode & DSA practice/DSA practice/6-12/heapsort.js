// remember parameters vvvv
function heapify(arr, length, parentI){
    let largest = parentI;
    // remember how to get children
    const lChildI = parentI * 2 + 1;
    const rChildI = lChildI + 1;
    if(arr[lChildI] > arr[largest] && lChildI < length){
        largest = lChildI;
    } else if(arr[rChildI] > arr[largest] && rChildI < length){
        largest = rChildI;
    }
    if(largest !== parentI){
        [arr[largest], arr[parentI]] = [arr[parentI], arr[largest]];
        heapify(arr, length, largest);
    }
    return arr;
}

function heapsort(arr){
    let length = arr.length;
    // remember how to get last parent vvvv
    let lastParentI = Math.floor((length / 2) - 1);
    let lastChildI = length - 1;
    // build heap
    while(lastParentI >= 0){
        heapify(arr, length, lastParentI)
        lastParentI--;
    }
    // sorting portion of heapsort
    while(lastChildI >= 0){
        [arr[0], arr[lastChildI]] = [arr[lastChildI], arr[0]];
        heapify(arr, lastChildI, 0);
        lastChildI--;
    }
}

function addNode(arr, value){
    let length = arr.length;
    arr[length] = value;
    length++;
    heapify(arr, length, length - 1);
    return length;
}

function deleteRoot(arr){
    let length = arr.length;
    length--;
    arr[0] = arr[length];
    heapify(arr, length, 0);
    return length;
}
// T- BW nlogn  S- O(1) | AD - n log n