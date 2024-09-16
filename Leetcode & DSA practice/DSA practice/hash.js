class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        // division method
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value){
        const index = this.hash(key);
        // the array of values that hashed to this index
        const bucket = this.table[index];
        // if no bucket (array) exsists at this index, make one & start it with our current key & value 
        if(!bucket){
            this.table[index] = [[key, value]];
        } else {
            // if an element with the same key exsists
            const sameKeyItem = bucket.find(item => item[0] === key);
            if(sameKeyItem){
                // replace its value with the new value
                sameKeyItem[1] = value;
            // & if not
            } else {
                // add it to the list
                bucket.push([key, value]);
            }
        }
    }

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
    display(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}