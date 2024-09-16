class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class linkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value, pos){
        // empty list
        if(!this.head){
            this.head = this.tail = new Node(value);
            return;
        }
        // head
        if(pos <= 0){
            let newNode = new Node(value);
            let oldHead = this.head;
            newNode.next = oldHead;
            oldHead.prev = newNode;
            this.head = newNode;
            return;
        }
        // tail
        let length = 0;
        let current = this.head;
        while(current){
            current = current.next;
            length ++;
        }
        if(pos >= length){
            let newNode = new Node(value);
            let oldTail = this.tail;
            newNode.prev = oldTail;
            oldTail.next = newNode;
            this.tail = newNode;
            return;
        }
        // middle
        current = this.head;
        for(let i = 0; i < pos -1; i++){
            current = current.next;
        }
        let newNode = new Node(value);
        let prevNode = current.prev;
        let nextNode = current;
        prevNode.next = newNode;
        nextNode.prev = newNode;
        newNode.next = nextNode;
        newNode.prev = prevNode;

    }
    
    delete(value){
        // empty
        if(!this.head) return undefined;
        //last node
        if(this.head === this.tail && this.head.value === value){
            let removedNode = this.head;
            this.head = this.tail = null;
            return removedNode;
        }
        // head
        if(this.head.value === value){
            let removedNode = this.head;
            let newHead = this.head.next;
            newHead.prev = null;
            this.head = newHead;
            return removedNode;
        }
        // tail
        if(this.tail.value === value){
            let removedNode = this.tail;
            let newTail = this.tail.prev;
            newTail.next = null;
            this.tail = newTail;
            return removedNode;
        }
        // middle
        let current = this.head;
        while(current){
            if(current.value === value){
                let nextNode = current.next;
                let prevNode = current.prev;
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
                return current;
            }
        }
        // not found
        return "Element not found";
    }

    search(value){
        let current = this.head;
        while(current){
            if(current.value === value){
                return current;
            }
            current = current.next;
        }
    }

}