// know about set.

// Set contains unique values.
// Order not exist.
// Set is not ordered.
// Set is not indexed.
// Set is iterable.
// Set has own methods.

// Set is a collection of values.
// Set is a collection of unique values.

let s1 = new Set();
s1.add(1);
s1.add(2);
s1.add(3);
s1.add(4);
s1.add(5);

console.log(s1.size);

for(let val of s1){
    console.log(val);
}


// console.log(Array.isArray(s1));


let s2 = new Set("saurabh");
console.log(s2);
// { 's', 'a', 'u', 'r', 'b', 'h' }
// set allow only unique values.



let s3 = new Set();
s3.add(1);
s3.add(2);
s3.add(3);
s3.add(1);
s3.add(2);
s3.add(3);
s3.add("s1");
s3.add("s2");
s3.add("s3");
console.log(s3);


let s4 = new Set();
console.log(s4,typeof s4);  // {} object.

s4.add([1,2,3]);
s4.add([1,2,3]);
// ham dono ko add kar rahe h but dono alag alag h. dono diffrent memory location ko point kar rahe h.
console.log(s4);


let s5 = new Set();
let a = [1,2,3];
s5.add(a);
s5.add(a);
s5.add(a);
console.log(s5);

// ab yaha a 1 hi memory location ko point kar rahe h.

let s6 = new Set([1,2,3,4,5,6]);
console.log(s6);

if (s6.has(0)){
    console.log("1 is present");
}else{
    console.log("1 is not present");
}


// both are giving same value.
console.log(s6.keys());    // [Set Iterator] { 1, 2, 3, 4, 5, 6 }.
console.log(s6.values());  // [Set Iterator] { 1, 2, 3, 4, 5, 6 }.
console.log(s6.entries());
/*
[Set Entries] {
    [ 1, 1 ],
    [ 2, 2 ],
    [ 3, 3 ],
    [ 4, 4 ],
    [ 5, 5 ],
    [ 6, 6 ]
  }
*/

console.log(s6.clear());  // set ko clear kar dega.
console.log(s6);         //  print the set.