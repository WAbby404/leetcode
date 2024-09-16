const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
// map.delete('c');
console.log(map.has('a'));
console.log(map.size);
// map.clear();

for(const [key,value] of map){
    console.log(`${key}: ${value}`);
}