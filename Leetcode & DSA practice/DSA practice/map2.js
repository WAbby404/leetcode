// const map = new Map([['a', 1], ['b', 2]]);
const map = new Map();
map.set('a', 1);
map.set('c', 10);
map.set('b', 100);
// map.delete('c');
// console.log(map.has('c'));
// map.clear();
console.log(map.size);
console.log(map);

// const iterator1 = map.entries();
// console.log(iterator1.next().value);

const iterator2 = map.keys();

console.log(iterator2.next().value);
console.log(iterator2.next().value);