// know about Object Map.

// Object Map is a data structure that maps keys to values.

let map = new Map();
map.set('1', 'a');
map.set('2', 'b');
map.set('3', 'c');
map.set('4', 'd');
map.set('5', 'e');
map.set('6', 'f');

console.log(map);
/*
Map(6) {     
    '1' => 'a',
    '2' => 'b',
    '3' => 'c',
    '4' => 'd',
    '5' => 'e',
    '6' => 'f' 
  }
*/

console.log(typeof map); // object.
console.log(map.size); // 6.

console.log(map.get('1')); // a.
console.log(map.get('2')); // b.
console.log(map.get('3')); // c.
console.log(map.get('4')); // d.
console.log(map.get('5')); // e.
console.log(map.get('6')); // f.
// console.log(map.get('7')); // undefined.

// ham direct access nahi kar sakte.
// console.log(map.name);    // undefined .
// console.log(map['name']); // undefined .



for(let val of map){
    console.log(val ,Array.isArray(val)); // undefined .
}


for(let [key,val] of map){
    console.log(key+' ---> '+val);
}