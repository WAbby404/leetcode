class Stack{
    constructor(){
        this.items = [];
        this.count = 0;
    }

    push(value){
        this.items.push(value);
        this.count ++;
    }
    pop(){
        if(this.count === 0) return null;
        let removedItem = this.items.pop();
        this.count --;
        return removedItem;
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
    print(){
        let str = '';
        this.items.forEach(item => {
            str += item + ' ';
        })
        return str;
    }
    size(){
        return this.count;
    }
}