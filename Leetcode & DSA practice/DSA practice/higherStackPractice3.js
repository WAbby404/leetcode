class Stack{
    constructor(){
        this.items = [];
    }

    push(value){
        this.items.push(value);
    }

    pop(){
        this.items.pop();
    }

    print(){
        let str = '';
        this.items.forEach((value) => {
            str += value + ' ';
        })
        return str;
    }

    clear(){
        this.items = [];
    }
}

// remember exceptions