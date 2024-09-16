class Stack{
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value);
        return this.items.length - 1;
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        console.log(this.items[this.items.length - 1]);
        return this.items[this.items.length - 1];
    }

    print(){
        let str = '';
        this.items.forEach((value) => {
            str += value + ' ';
        })
        console.log(str);
        return str;
    }

    isEmpty(){
        return this.items.length == 0;
    }

    clear(){
        this.items = [];
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
console.log(stack.isEmpty());