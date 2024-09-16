const set = new Set(([1,2,3]));
set.add(4);
set.add(1);
// checks if value exsists
console.log(set.has(4));
// delete from set
set.delete(3);
// shows set size
console.log(set.size);
// clear all things from set
set.clear();
for(const item of set){
    console.log(item);
}