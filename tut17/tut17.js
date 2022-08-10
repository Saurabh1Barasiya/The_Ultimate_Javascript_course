// create newcopy of array.

let arr = [1,2,3,4,5,6];
let arr2 = arr;
// both are pointing is same memory location.
console.log(arr===arr2);



// create new copy of array.
let arr3 = arr.slice();
// both are pointing to different memory location.
console.log(arr,arr3)
console.log(arr===arr3);

let arr4 = [].concat(arr);
// both are pointing to different memory location.
console.log(arr,arr4)
console.log(arr===arr4);

// concept of new destructring operator.

let arr5 = [...arr];
// both are pointing to different memory location.
console.log(arr,arr5)
console.log(arr===arr5);


let a1 = [1,2,3] ;
let a2 = [4,5,6];
let newArray = [...a1,...a2,7,8,9];
console.log(newArray);