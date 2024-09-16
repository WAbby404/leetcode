class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(value){
        this.items.push(value);
    }

    dequeue(){
        return this.items.shift();
    }

    peek(){
        return this.items[0];
    }

    print(){
        let str = '';
        this.items.forEach((value) => {
            str += value + ' ';
        })
        console.log(str);
    }

    isEmpty(){
        return this.items.length == 0;
    }

    clear(){
        this.items = [];
    }
}

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(1);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
