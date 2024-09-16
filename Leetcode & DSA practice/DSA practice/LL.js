class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    // isempty
    isEmpty(){
        return this.head === null;
    }
    // insert head
    insert(value){
        let newNode = new Node(value);
        if(this.isEmpty()){
            this.head = this.tail = newNode;
        } else {
            let oldHead = this.head;
            oldHead.prev = newNode;
            newNode.next = oldHead;
            this.head = newNode;
        }
    }
    // search
    search(value){
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }
            current = current.next;
        }
        return null;
    }
    // delete
    delete(value){
        // empty
        if(this.isEmpty()){
            return null;
        }
        // head
        if(this.head.value === value){
            let oldHead = this.head;
            let newHead = oldHead.next;
            newHead.prev = null;
            this.head = newHead;
            return oldHead;
        }
        // tail
        if(this.tail.value === value){
            let oldTail = this.tail;
            let newTail = oldTail.prev;
            newTail.next = null;
            this.tail = newTail;
            return oldTail;
        }
        // head and tail
        if(this.head === this.tail && this.head.value === value){
            let oldNode;
            this.head = this.tail = null;
            return oldNode;
        }
        // middle
        let currentNode = this.head;
        while(currentNode){
            if(currentNode.value === value){
                let prevNode = currentNode.prev;
                let nextNode = currentNode.next;
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}