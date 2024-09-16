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
        [arr[largest], arr[parentI]] = [arr[parentI], arr[largest]];
    }
    return arr;
}

function heapSort(arr){
    let length = arr.length;
    let lastParentI = Math.floor((length / 2 )- 1);
    let lastChildI = length - 1;

    while(lastParentI >=0){
        heapify(arr, length, lastParentI);
        lastParentI--;
    }

    while(lastChildI >= 0){
        [arr[lastChildI], arr[0]] = [arr[0], arr[lastChildI]];
        lastChildI--;
    }
    return arr;
}

function insertNode(arr, value){
    let length = arr.length;
    arr[length] = value;
    length++;
    heapify(arr, length, length - 1);
    return length;
}

function deleteRoot(arr){
    let length = arr.length;
    arr[0] = arr[length - 1];
    length--;
    heapify(arr, length, 0);
    return length;
}
//  T n log n  S O(1)