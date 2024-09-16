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

    // add a node to the end of the list
    append(value){
        // if theres nothing in the list
        if(!this.tail){
            // set head & tail to new node with value
            this.head = this.tail = new Node(value);
        } else {
            // capture current tail & the new node
            let currentTail = this.tail;
            let newNode = new Node(value);
            // change current tails next to new node
            currentTail.next = newNode;
            // change newNodes previous to be currentTail
            newNode.prev = currentTail;
            // change tail to be new node
            this.tail = newNode;
        }

    }

    // add node to start of the list
    prepend(value){
        // if there is nothing in the list
        if(!this.head){
            // set head & tail to new node with value
            this.head = this.tail = new Node(value);
        } else {
            // capture current head and new node
            let currentHead = this.head;
            let newNode = new Node(value);
            // change currentheads prev to new node
            currentHead.prev = newNode;
            // change newNodes next to currentHead
            newNode.next = currentHead;
            // change head to be new node;
            this.head = newNode;
        }

    }

    // delete by a value
    delete(valueToDelete){
        // if there are no elements in list return null
        if(!this.head) return null;
        // capture head for start of search
        let current = this.head;
        // while current nodes value doesnt match node we want to delete
        while(current.value != valueToDelete){
            // set the current node to the next node
            current = current.next;
        }

        // 
        // forgot to implement case where current is head or tail!
        // 

        // now that we have found the node we want to delete, we need to switch prev & next
        // capture currents prev & next
        let prevNode = current.prev;
        let nextNode = current.next;

        // set previous nodes next to next node & set next nodes previous to previous node
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        return current;
    }

    // find node based on its value
    search(value){
        // grab the start of the LL
        let current = this.head;
        // while the node that we are on exsists
        while(current){
            // if current nodes value equals value we are trying to find
            if(current.value === value){
                // return current node
                return current;
            }
            // if not, move current to the next node
            current = current.next;
        }
        // if a node with wanted value is not present, return null;
        return null;
    }
}

const LL = new LinkedList();
LL.append(5);
LL.append(10);
LL.append(15);
console.log(LL);