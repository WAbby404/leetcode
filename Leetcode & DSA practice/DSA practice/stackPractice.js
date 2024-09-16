class Stack {
    constructor(){
        this.items = [];
        this.count = 0;
    }

    push(value){
        this.items[this.count] = value;
        this.count += 1;
        console.log(this.items);
        return this.count - 1;
    }

    pop(){
        if(this.count == 0) return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count -= 1;
        return deleteItem;
    }

    peek(){
        return this.items[this.count - 1];
    }

    size(){
        return this.count;
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
        for( let i = 0; i < this.count; i++){
            str += this.items[i] + ' ';
        }
        return str;
    }
}

const stack = new Stack;

stack.push(2);
stack.push(3);
stack.push(5);
stack.push(1);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.print());