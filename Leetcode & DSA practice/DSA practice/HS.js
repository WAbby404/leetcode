function heapify(arr, length, parentI){
    let largestI = parentI;
    const lChildI = largestI * 2 + 1;
    const rChildI = lChildI + 1;
    if(lChildI < length && arr[lChildI] > arr[largestI]){
        largestI = lChildI;
    }
    if(rChildI < length && arr[rChildI] > arr[largestI]){
        largestI = rChildI;
    }
    if(largestI !== parentI){
        [arr[parentI], arr[largestI]] = [arr[largestI], arr[parentI]];
        heapify(arr, length, largestI);
    }
    return arr;
}

function heapSort(arr){
    let length = arr.length;
    let lastParentI = Math.floor((length / 2) - 1);
    let lastChildI = length - 1;

    while(lastParentI >= 0){
        heapify(arr, length, lastParentI);
        lastParentI--;
    }

    while(lastChildI >= 0){
        [arr[0], arr[lastChildI]] = [arr[lastChildI], arr[0]];
        heapify(arr, lastChildI, 0);
        lastChildI--;
    }
    return arr;
}

function insertNode(arr, value){
    // capture length
    let length = arr.length;
    // put node at end of array
    arr[length] = value;
    // adjust heap size
    length++;
    // call heapify on array with fixed length, bottom up
    heapify(arr, length, length - 1);
    // return new hap size
    return length;
}

function deleteRoot(arr){
    // capture length
    let length = arr.length;
    // replace root with first element
    arr[0] = arr[length - 1];
    // fix length
    length--;
    // make sure heapify properties are followed with new heap
    heapify(arr, length, 0);
    // return new length
    return length;
}