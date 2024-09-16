class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    push(value){
        this.items[this.count] = value;
        this.count += 1;
        return this.count - 1;
    }

    pop(){
        if(this.count == 0) return null;
        const removedItem = this.items[this.count - 1];
        this.items[this.count - 1] = null;
        this.count -= 1;
        return removedItem;
    }

    peek(){
        return this.items[0];
    }

    print(){
        let str = '';
        for(let i = 0; i < this.count; i++){
            str += this.items[i] + " ";
        }
        return str;
    }

    isEmpty(){
        return this.count == 0;
    }

    clear(){
        this.items = [];
        this.count = 0;
    }
}

// remember comments
// remember to talk / walk through process