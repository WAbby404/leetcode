// sorts bottom up.
function heapify(arr, length, parentI){
    // compare & swap targets
    // largest will find largest num, parent will point to old largest (parent)
    let largestI = parentI;
    const lChildI = largestI * 2 + 1;
    const rChildI = lChildI + 1;
    // if children exsist & are in array, compare against largest
    if(lChildI < length && arr[largestI] < arr[lChildI]){
        // set to largest if is bigger
        largestI = lChildI;
    }
    // again but with right
    if(rChildI < length && arr[largestI] < arr[rChildI]){
        largestI = rChildI;
    }
    // if largest is not the parent
    if(largestI !== parentI){
        // swap parent & largest
        [arr[largestI], arr[parentI]] = [arr[parentI], arr[largestI]];
        // sort elements to remain a heap
        heapify(arr, length, largestI);
    }
    // return array when done
    return arr;
}

function heapSort(arr){
    // start at bottom & heapify up to create the heap
    let length = arr.length;
    let lastParentI = Math.floor((length / 2) - 1);
    let lastChildI = length - 1;

    // create heap
    while(lastParentI >= 0){
        heapify(arr, length, lastParentI);
        lastParentI--;
    }

    // sort heap into a sorted array:
    // swap largest to end of array to indicate sorted & fix length
    while(lastChildI >= 0){
        [arr[0], arr[lastChildI]] = [arr[lastChildI], arr[0]]
        heapify(arr, lastChildI, 0);
        lastChildI--;
    }
    return arr;
}