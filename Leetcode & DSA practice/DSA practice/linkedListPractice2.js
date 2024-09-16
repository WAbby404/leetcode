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
    // add value to end of LL
    append(value){
        // empty list
        if(!this.tail){
            this.head = this.tail = new Node(value);
            return;
        }
        // capture current tail & the new Node
        let currentTail = this.tail;
        let newNode = new Node(value);
        // set new nodes previous to current tail
        newNode.prev = currentTail;
        // set current Tails next to new Node
        currentTail.next = newNode;
        // update tail to be new Node
        this.tail = newNode;
    }
    // add node to front of LL
    prepend(value){
        // if LL is empty
        if(!this.head){
            // make head and tail a new node with that value
            this.head = this.tail = new Node(value);
        } else {
            // capture head & new node
            let newNode = new Node(value);
            let currentHead = this.head;
            // set new Nodes next to current head
            newNode.next = currentHead;
            // set currentHeads previous to newNode
            currentHead.previous = newNode;
            // update head to the new node
            this.head = newNode;
        }
    }
    // delete a node based on value
    delete(value){
        // delete cases: empty LL, deleteing only item in LL, deleteing head, deleting tail, deleting matching item
        // case empty
        if(!this.head){
            return null;
        }
        // capture start of LL
        let current = this.head;
        // while current node exsists
        while(current){
            // check nodes value to see if it is the node we want to delete
            if(current.value === value){
                // case if its head
                if(current === this.head){
                    // capture heads next node
                    let nextNode = current.next;
                    // set next nodes previous to null
                    nextNode.prev = null;
                    // update head to next node
                    this.head = nextNode;
                // case if its tail
                } else if(current === this.tail){
                    // capture tails previous node
                    let previousNode = current.previous;
                    // set previous nodes next to null;
                    previousNode.next = null;
                    // update tail node to previous node
                    this.tail = previousNode;
                // case if its only element in list
                } else if(this.head === current && this.tail === current){
                    this.head = this.tail = null;
                // delete matching item
                } else {
                    // capture current nodes previous & next nodes
                    let previousNode = current.previous;
                    let nextNode = current.next;
                    // set previous nodes next
                    previousNode.next = nextNode;
                    // set next nodes previous
                    nextNode.previous = previousNode;
                }
            }
            // if not, change current to the next node in the LL
            current = current.next;
        }
        // if node with that value is not found return null
        return null;
    }
    // search for a node based on value
    search(value){
        // if list is empty return null
        if(!this.head){
            return null;
        }
        // capture first node
        let current = this.head;
        // while current node still exsists
        while(current){
            // if currents value is equal to the value we are trying to find
            if(current.value === value){
                // return current node
                return current;
            }
            // traverse to next node
            current = current.next;
        }
        // return null if no node is found
        return null;
    }
}

// remember cases
// remember delete cases - empty, head, tail, only item, regular delete