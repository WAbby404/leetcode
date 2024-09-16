class Queue{
    constructor(){
        this.items = [];
        this.head = 0;
        this.tail = 0;
    }

    enqueue(value){
        this.items[this.tail] = value;
        this.tail ++;
    }

    dequeue(){
        if(this.tail === 0) return null;
        this.items[this.head] = null;
        this.head ++;
    }

    print(){
        let str = '';
        for(let i = this.head; i < this.tail; i++){
            str += this.items[i] + ' ';
        }
        return str;
    }
}