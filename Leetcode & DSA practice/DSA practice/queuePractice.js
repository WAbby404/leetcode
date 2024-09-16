class Queue {
    constructor(){
        this.items = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue(value){
        this.items[this.tail] = value;
        this.tail ++;
        return this.tail - 1;
    }

    dequeue(){
        let removed = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return removed;
    }

    print(){
        let str = ''
        for(let i = this.head; i < this.tail; i++){
            str += this.items[i] + ' ';
        }
        console.log(str);
        return str;
    }
}

const queue =  new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

queue.dequeue();
queue.print();