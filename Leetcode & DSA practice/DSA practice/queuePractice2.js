class Queue {
    constructor(){
        this.items = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue(value){
        this.items[this.tail] = value;
        this.tail += 1;
        return this.tail - 1;
    }

    dequeue(){
        let removedItem = this.items[this.head];
        this.items[this.head] = null;
        this.head += 1;
        return removedItem;
    }

    peek(){
        console.log(this.items[this.head]);
        return this.items[this.head];
    }

    print(){
        let str = '';
        for(let i = this.head; i < this.tail; i++){
            str += this.items[i] + " ";
        }
        console.log(str);
        return str;
    }

    isEmpty(){
        return this.head == this.tail;
    }

    clear(){
        this.items = [];
        this.head = 0;
        this.tail = 0;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();
queue.print();