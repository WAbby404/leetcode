class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    // add anywhere to list
    // remove anywhere from list
    // search for element
    add(value, position = null){
        // LL empty
        if(!this.head) { 
            this.head = this.tail = new Node(value); 
            return;
        }
        // add to head
        if(position == 0){
            // capture new node and old head
            let newNode = new Node(value);
            let oldHead = this.head;
            // set oldheads previous node to the new node
            oldHead.prev = newNode;
            // set new nodes next node to oldhead
            newNode.next = oldHead;
            // change head to new node
            this.head = newNode;
            return;
        }
        // add to tail
        // get length to add to tail
        let currentNode = this.head;
        let length = 0;
        while(currentNode){
            currentNode = currentNode.next;
            length += 1;
        }
        if(position >= length || position === null){
            // capture new node and old tail
            let newNode = new Node(value);
            let oldTail = this.tail;
            // set oldtails next node to new node
            oldTail.next = newNode;
            // set new nodes previous to old tail
            newNode.prev = oldTail;
            this.tail = newNode;
            return;
        }
        // add to position
        // find node in position that you want to insert new node
        let current = this.head;
        for(let i = 0; i < position - 1; i++){
            current = current.next;
        }
        // capture new node, node in current position to replace, and the node before the one to replace
        let newNode =  new Node(value);
        let nextNode = current;
        let previousNode = current.prev;
        // set previous nodes next to new node
        previousNode.next = newNode;
        // set next nodes previous to new node
        nextNode.prev = newNode;
        // set new nodes next to nextNode
        newNode.next = nextNode;
        // set node nodes previous to previous node
        newNode.prev = previousNode;
    }
    // print string of node values
    print(){
        let str = '';
        let current = this.head;
        while(current){
            str += current.value + ' ';
            current = current.next;
        }
        console.log(str);
    }
    // delete element with matching value
    delete(value){
        // get the node with the matching value
        let current = this.head;
        while(current){
            if(current.value === value){
                break;
            }
            // value not found
            return null;
        }
        // empty list
        if(!this.head){
            return null;
        } // deleting only node
        else if(current === this.head === this.tail){
            this.head = this.tail = null;
        }// delete head
        else if(current === this.head){
            let newHead = current.next;
            newHead.prev = null;
            this.head = newHead;
        }// delete tail
        else if(current === this.tail){
            let newTail = current.prev;
            newTail.next = null;
            this.tail = newTail;
        } else {
            // delete in middle
            let currentPrev = current.prev;
            let currentNext = current.next;
            currentPrev.next = currentNext;
            currentNext.prev = currentPrev;
        }
        return current;
    }
    // search for node with value
    search(value){
        let current = this.head;
        while(current){
            if(current.value = value){
                return current;
            }
            current = current.next;
        }
        return null;
    }
}

const ll = new linkedList();
// ll.add(1, 7);
// ll.add(2, 7);
// ll.add(4, 7);
// ll.add(5, 7);
// ll.add(6, 7);
// ll.add(3, 3);
// ll.add(7, 6);
// ll.print();

ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.delete(1);
console.log(ll.delete(5));
ll.print();