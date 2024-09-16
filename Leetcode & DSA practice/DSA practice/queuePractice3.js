class Queue{
    constructor(){
        this.items = [];
        this.head = 0;
    }

    // add to end of queue
    enqueue(value){
        this.items[this.items.length] = value;
        // and return the position
        return this.items.length - 1;
    }

    // removes item from start of queue
    dequeue(){
        if(this.items.length == 0) return null;
        let removedItem = this.items[this.head];
        this.items[this.head] = null;
        this.head += 1;
        return removedItem;
    }

    // look at element in front of queue
    peek(){
        return this.items[this.head];
    }

    // print out elements of queue
    print(){
        let str = '';
        for(let i = this.head; i < this.items.length; i++){
            str += this.items[i] + ' ';
        }
        console.log(str);
        return str;
    }

    isEmpty(){
        return this.items.length == this.head;
    }

    clear(){
        this.items = [];
        this.head = 0;
    }
}

const queue =  new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();
queue.print();