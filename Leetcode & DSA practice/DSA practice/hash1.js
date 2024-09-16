class HashMap {
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    // hash
    hash(key){
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    // set
    set(key, value){
        const index = this.hash(key);
        const bucket = this.table[index];
        // if array exsists
        if(bucket){
           const sameKeyItem = bucket.find(item => item[0] === key);
            // if same key exists
           if(sameKeyItem){
                sameKeyItem[1] = value;
            // if same key doesnt
           } else {
            bucket.push([key, value]);
           }
        // if array doesnt
        } else {
            this.table[index] = [[key, value]];
        }
    }
    // get
    get(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                return sameKeyItem[1];
            }
        }
        return undefined;
    }
    // remove
    remove(key){
        const index = this.hash(key);
        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem), 1);
            }
        }
    }
    // display
    display(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}