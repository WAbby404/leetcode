class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    pop(){
        if(this.count == 0) return null;
        let removedItem = this.items[this.count - 1];
        this.count -= 1;
        return removedItem;
    }

    push(value){
        this.items[this.count] = value;
        this.count += 1;
        return this.count - 1;
    }

    peek(){
        return this.items[0];
    }

    isEmpty(){
        return this.count == 0;
    }

    clear(){
        this.items = [];
        this.count = 0;
    }

    // size print

    size(){
        return this.count;
    }

    print(){
        let str = '';
        for(let i = 0; i < this.count; i ++){
            str += this.items[i] + ' ';
        }
        console.log(str);
        return str;
    }

}