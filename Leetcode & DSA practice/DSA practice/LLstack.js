class Node{
    constructor(value){
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class linkedListStack{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    push(value){
        if(!this.head) this.tail = this.head = new Node(value);
        let oldTail = this.tail;
        let newNode = new Node(value);
        oldTail.next = newNode;
        newNode.prev = oldTail;
        this.tail = newNode;
    }

    pop(){
        let oldTail = this.tail;
        let newTail = this.tail.prev;
        newTail.next = null;
        this.tail = newTail;
        return oldTail;
    }

    peek(){
        return this.head;
    }

    print(){
        let str = '';
        let current = this.head;
        while(current){
            str += current.value + ' ';
            current = current.next;
        }

        return str;
    }
}
