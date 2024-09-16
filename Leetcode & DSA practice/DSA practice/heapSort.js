// will sort from bottom up
function heapify ( arr, length, parentI ){
    // comparison & swap target 
    // upon recursive call will still refer to the place where the old largest was, 
    // so we can use that as the parent for the recursive call
    let largest = parentI;
    // left & right children in relation to parent
    const leftChild = parentI * 2 + 1;
    const rightChild = leftChild + 1;

    // comparing child to length ensures that as we get to bottom of heap 
    // we arnt checking elements that already popped off our heap & sorted
    // and that they exsist

    // if left child is larger than current largest
    if(leftChild < length && arr[leftChild] > arr[largest]){
        // reassign the largest to this child
        largest = leftChild;
    }

    // if right child is larger than current largest
    if(rightChild < length && arr[rightChild] > arr[largest]){
        // reassign largest to this child
        largest = rightChild;
    }

    // if largest isnt refering to the parent element
    if(largest !== parentI){
        // swap largest element with parent (they will then be in their appropriate places)
        [arr[parentI], arr[largest]] = [arr[largest], arr[parentI]];

        // sort lower levels of heap
        heapify(arr, length, largest);
    }
    return arr;
}

function heapSort(arr){
    let length = arr.length;
    // last parent node is always length of array % 2 - 1
    let lastParentI = Math.floor((length / 2) - 1);
    let lastChildI = length - 1;

    // start at last parent & heapify our way up
    // build the heap / heapify
    while( lastParentI >= 0 ){
        // pass in current last parent
        heapify(arr, length, lastParentI);
        // take one off each iteration so we are traversing up
        lastParentI--;
    }

    // swaps first & last to actually get a sorted array
    // swap last child with first (swapping largest to its correct position (last position))
    while( lastChildI >= 0 ){
        // swap last child with first
        [arr[0], arr[lastChildI]] = [arr[lastChildI], arr[0]];
        // call heapify
        heapify(arr, lastChildI, 0);
        // minus one from last child as to not heapify elements that are already sorted 
        lastChildI--;
    }

    return arr;
}

function deleteRoot(arr){
    // get length
    let length = arr.length;
    // replace root with first element
    arr[0] = arr[length - 1];
    // decrease the size of the heap
    length = length--;
    // heapify root node
    heapify(arr, length, 0);
    // return new size of heap
    return length;
}
// T log n S n


function insertNode(arr, newNode){
    let length = arr.length;
    // new node is at end of array
    arr[length] = newNode;
    // add to length to get real size of heap
    length = length + 1;
    // heapify the new inserted node bottom up
    heapify(arr, length, length - 1);
    // return new heap size
    return length;
}
// T log n S n 