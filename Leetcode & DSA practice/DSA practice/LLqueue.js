class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class linkedListQueue{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    // adding element to end of list
    enqueue(value){
        if(!this.head) this.tail = this.head = new Node(value);
        let oldTail = this.tail;
        let newNode = new Node(value);
        oldTail.next = newNode;
        newNode.prev = oldHead;
        this.tail = newNode;
    }
    // removing element from start of list
    dequeue(){
        if(!this.head) return null;
        let oldHead = this.head;
        let newHead = oldHead.next;
        newHead.prev = null;
        this.head = newHead;
    }
    
    // peek
    // clear
    // isEmpty
    // print
}