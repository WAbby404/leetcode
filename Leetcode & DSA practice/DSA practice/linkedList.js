class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }

}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // adds to end of list / tail
    append(value) {
        // if list is empty
        if(!this.tail){
            // set tail and head to a new node
            this.head = this.tail = new Node(value);
        } else {
            // capture current tail in variable
            let oldTail = this.tail;
            // set new tail to new value
            this.tail = new Node(value);
            // old tail points to new tail
            oldTail.next = this.tail;
            // new tail points to old tail
            this.tail.prev = oldTail;
        }

    }

    // add to begining of list / head
    prepend(value){
        // if list is empty
        if(!this.head){
            this.head = this.tail = new Node(value);
        } else {
            // capture old head
            let oldHead = this.head;
            // set head as a new Node
            this.head = new Node(value);
            // old head points to new head
            oldHead.prev = this.head;
            // new head points to previous head
            this.head.next = oldHead;
        }
    }

    deleteHead(){
        // if list is empty
        if (!this.head){
            return null;
        } else {
            // capture value of old head
            let removedHead = this.head;
            // if 1 node left in list
            if(this.head === this.tail){
                this.head = this.tail = null;
            } else {
                // set head to next element
                this.head = this.head.next;
                // remove any previous pointers
                this.head.prev = null;

            }

            return removedHead.value;
        }
    }

    deleteTail(){
        // if list is empty
        if (!this.tail){
            return null;
        } else {
            // capture value of tail & return it
            let removedTail = this.tail;

            // if 1 node left
            if(this.head === this.tail){
                this.head = this.tail = null;
            } else {
                // set tail to the node before it
                this.tail = this.tail.prev
                // set new tails next value to null
                this.tail.next = null;
            }

            return removedTail.value;
        }
    }

    // delete by a value
    delete(valueToDelete){
        // if there are no values return null
        if(!this.head) return null;
        // start searching through data at start of LL
        let current = this.head;
        // while currents value is not equal to the value we want to delete
        while(current.value != valueToDelete){
            // set current to the next node
            current = current.next;
        }
        // if value we want to delete is head or tail, call other fns
        if(current === this.head){
            this.deleteHead();
        } else if(current === this.tail){
            this.deleteTail();
        }

        // capture currents previous node & next node
        let currentPrev = current.prev;
        let currentNext = current.next;
        // change currents previous node to currents next node
        currentPrev.next = currentNext;
        // change currents next node to currents previous node
        currentNext.prev = currentPrev;

        return current;
    }

    search(value){
        // current keeps track of which node we are on
        let currentNode = this.head;
        // traverse with a while loop
        while(currentNode){
            if(currentNode.value === value){
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }
}


const LL = new LinkedList();
LL.append(4);
LL.append(5);
LL.append(6);
LL.append(7);
LL.delete(5);
LL.prepend(3);
console.log(LL.search(7));
console.log(LL.search(100));
console.log(LL);