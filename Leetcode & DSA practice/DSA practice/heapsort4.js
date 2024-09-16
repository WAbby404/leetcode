function heapify(arr, length, parentI){
    // sort 3 values so max is at top, like a triangle
    let largestI = parentI;
    const lChildI = parentI * 2 + 1;
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
    // make heap (bottom up heapify) from an array
    while(lastParentI >= 0){
        heapify(arr, length, lastParentI);
        lastParentI--;
    }
    // swap sorted values (first item (min or max value heap), to last)
    while( lastChildI >= 0){
        [arr[lastChildI], arr[0]] = [arr[0], arr[lastChildI]];
        heapify(arr, lastChildI, 0);
        lastChildI--;
    }
    return arr;
}