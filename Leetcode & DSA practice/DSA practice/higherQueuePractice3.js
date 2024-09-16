class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(value){
        this.items.push(value);
    }

    dequeue(){
        this.items.shift();
    }
}

// remember exceptions