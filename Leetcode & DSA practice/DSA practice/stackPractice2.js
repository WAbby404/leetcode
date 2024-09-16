class Stack {
    constructor(){
        this.items = []
        this.count = 0;
    }

    push(value){
        this.items[this.count] = value
        this.count += 1;
        return this.count - 1;
    }

    pop(){
        let removedItem = this.items[this.count - 1];
        this.items[this.count - 1] = null;
        this.count -= 1;
        return removedItem;
    }

    peek(){
        console.log(this.items[this.count - 1]);
        return this.items[this.count - 1];
    }

    print(){
        let str = '';
        for(let i = 0; i < this.count; i++){
            str += this.items[i] + ' ';
        }
        console.log(str);
        return str;
    }

    isEmpty(){
        console.log(this.count == 0);
        return this.count == 0;
    }

    clear(){
        this.items = [];
        this.count = 0;
    }

}

const stack = new Stack();
stack.push(100);
stack.push(90);
stack.push(80);
stack.print();
stack.peek();
console.log(stack.pop());
console.log(stack.pop());
stack.isEmpty();
stack.clear();
stack.isEmpty();