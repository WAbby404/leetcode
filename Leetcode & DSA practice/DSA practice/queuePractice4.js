class Queue{
    constructor(){
        this.items = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue(value){
        this.items[this.tail] = value;
        this.tail += 1;
    }

    dequeue(){
        let removedItem = this.items[this.head];
        this.items[this.head] = null;
        this.head += 1;
        return removedItem;
    }

    print(){
        let str = ''
        for(let i = this.head; i < this.tail; i++){
            str += this.items[i] + ' ';
        }
        console.log(str);
        return str;
    }

    peek(){
        return this.items[this.head];
    }

}