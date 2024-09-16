class HashTable{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }
    hash(key){
        // Division Method
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i);
        }
        return total % this.size;
        // Mid-Square Method (for a number)
        // Digit Folding Method
        // Multiplication Method
    }
    // insert
    set(key, value){
        // get the hash from our key
        const index = this.hash(key);
        // vvv this would be used if we werent implementing an open hashing hash table
        // this.table[index] = value;
        // bucket stores reference to index location
        const bucket = this.table[index];
        // if there is no value stored at that location
        if(!bucket){
            // create the new array & push the key value pair
            this.table[index] = [[key, value]]
        // if a value exsists at that location
        } else {
            // search for an element with the same key
            const sameKeyItem = bucket.find(item => item[0] === key);
            // if it exsists
            if(sameKeyItem){
                // change its value to incoming value
                sameKeyItem[1] = value;
            // if it doesnt exsist
            } else {
                // push a new array of key-value pair to outer array
                bucket.push([key, value]);
            }
        }
    }
    // search
    get(key){
        // get the index of the key
        const index = this.hash(key);
        // vvv this would be used if we werent implementing an open hashing hash table
        // return this.table[index];
        // get the array of key-value pairs at keys index 
        const bucket = this.table[index];
        // if array of elements exsists at this index
        if(bucket){
            // find an element with the same key as we are searching for
            const sameKeyItem = bucket.find(item => item[0] === key);
            // if it exsists
            if(sameKeyItem){
                //return its value
                return sameKeyItem[1];
            }
        }
        // if no bucket esists, return undefined
        return undefined;
    }
    // remove
    remove(key){
        // get the index of the key
        const index = this.hash(key);
        // vvv this would be used if we werent implementing an open hashing hash table
        // this.table[index] = undefined;
        // get the list of elements at that index
        const bucket = this.table[index];
        // if bucket exsists
        if(bucket){
            // find an element with same key as we are searching for
            const sameKeyItem = bucket.find(item => item[0] === key);
            // if it exsists
            if(sameKeyItem){
                // remove that item from the bucket
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
// T O(n) w O(1) avg S O(n)

const table = new HashTable(50);
console.time()
table.set("name", 'Bruce');
table.set("age", 25);
// table.display();
// console.log(table.get("name"));
table.set('mane', 'Clark');
table.display();
console.timeEnd();

// can also learn to do a LL implementation, map js obj method, array implementaion is what we use here