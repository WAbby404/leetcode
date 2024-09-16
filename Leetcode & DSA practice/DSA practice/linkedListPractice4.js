class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    add(value, position = null){
        // only element in list
        if(!this.head) {
            this.head = this.tail = new Node(value);
            return;
        }
        // add to head
        if(position === 0){
            let newNode = new Node(value);
            let oldHead = this.head;

            oldHead.prev = newNode;
            newNode.next = oldHead;
            this.head = newNode;
            return;
        }
        // add to tail
        let current = this.head;
        let length = 0;
        while(current){
            current = current.next;
            length += 1;
        }
        if(position >= length || position === null){
            let newNode = new Node(value);
            let oldTail = this.tail;
            oldTail.next = newNode;
            newNode.prev = oldTail;
            this.tail = newNode;
            return;
        }
        // add in position
        if(position > 0 && position < length){
            current = this.head;
            for(let i = 0; i < position -1; i ++){
                current = current.next;
            }
            let newNode = new Node(value);
            let oldPrev = current.prev;
            let oldNext = current;
    
            oldPrev.next = newNode;
            oldNext.prev = newNode;
    
            newNode.prev = oldPrev;
            newNode.next = oldNext;
            return;
        }
    }

    print(){
        let str = '';
        let current = this.head;
        while(current){
            str += current.value + ' ';
            current = current.next;
        }
        console.log(str);
        return str;

    }
    // delete
    delete(value){
        // empty
        if(!this.head) return undefined;
        // last node
        if(this.head.value === value && this.head === this.tail){
            let removedLastNode = this.head;
            this.head = this.tail = null;
            return removedLastNode;
        }
        // delete head
        if(this.head.value === value){
            let headToDelete = this.head;
            let newHead = headToDelete.next;
            newHead.prev = null;
            this.head = newHead;
            return headToDelete;
        }
        // delete tail
        if(this.tail.value === value){
            let tailToDelete = this.tail;
            let newTail = tailToDelete.prev;
            newTail.next = null;
            this.tail = newTail;
            return tailToDelete;
        }
        // delete middle (find)
        let current = this.head;
        while(current){
            if(current.value === value){
                let nextNode = current.next;
                let prevNode = current.prev;
                nextNode.prev = prevNode;
                prevNode.next = nextNode;
                return current;
            }
            current = current.next;
        }
        // delete not found
        return null;
    }
    // search
    search(value){
        let current = this.head;
        while(current){
            if(current.value === value){
                return current;
            }
            current = current.next;
        }
        return null;
    }
}

const LL = new LinkedList();
LL.add(1);
LL.add(2, null);
LL.add(3, null);
LL.print();
console.log(LL.delete(3));
console.log(LL);