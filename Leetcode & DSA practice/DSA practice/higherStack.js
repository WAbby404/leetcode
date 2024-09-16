class Stack{
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        if(this.items.length == 0) return undefined;
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    print(){
        let str = '';
        this.items.forEach((value) => {
            str += value + ', ';
        })

        return str;
    }
}

const stack = new Stack();
console.log(stack.pop());
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack);
console.log(stack.peek());
console.log(stack.print());