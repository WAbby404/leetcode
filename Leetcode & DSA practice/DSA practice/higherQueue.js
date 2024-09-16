class Queue{
    constructor(value){
        this.items = value || [];
    }

    // Add element to end of queue
    enqueue(value){
        this.items.push(value);
    }

    // Remove first element of queue
    dequeue(){
        if(this.items.length == 0) return undefined;
        return this.items.shift();
    }

    // Check first element of queue
    peek(){
        if(this.items.length == 0) return undefined;
        return this.items[0];
    }

    // prints elements in a queue
    print(){
        let str = '';
        this.items.forEach((value) => {
            str += value + ' ';
        })
        return str;
    }
}

const queue = new Queue();
console.log(queue);
queue.enqueue(3);
queue.enqueue(6);
queue.enqueue(1);
console.log(queue);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.print());
