console.log("More about array methods");


// tostring method convrt array to string.
let arr = [1, 2, 3, 4, 5];
console.log(arr,typeof arr);
let st = arr.toString()
console.log(st,typeof st);
console.log(st.length)  // 9

// join method
console.log(arr)
let st1 = arr.join("")    
console.log(st1,typeof st1, st1.length);    // 1-2-3-4-5


// concat method
let st2 = arr.concat(6,7,8)
console.log(st2,typeof st2, st2.length);    

console.log("===========================================================");


// concat method new array return karta h.
arr = [1,2,3]
const arr2 = [4,5,6]
const merge =  arr.concat(arr2,[7,8,9],10)
console.log(merge,typeof merge, merge.length);

// slice method

arr = [1, 2, 3, 4, 5];
console.log(arr);
let st3 = arr.slice();
console.log(st3,typeof st3, st3.length);

// 1 include and 3 exclude.
let st4 = arr.slice(1,3);
console.log(st4,typeof st4, st4.length);

// splice method
// is method se delete bhi karte h.

console.log(arr)
// start,deleteCount
arr.splice(1,2)
console.log(arr)
// hama yaha add bhi kar sakte h .
arr.splice(1,2,10,20,30)
console.log(arr)


// // indexOf method
// console.log(arr);
// let index = arr.indexOf(10)
// console.log(index)

arr = [1,2,2,1,1,10,10,10,24,24,30,3,0,30]
console.log(arr.findIndex(x=>x==10));


arr = [1,2,2,1,1]
console.log(arr,arr.length)

delete arr[0]
console.log(arr,arr.length)    //[ <1 empty item>, 2, 2, 1, 1 ] 5

// delete to hoga but length same rahegi.


arr =  [1,2,3,4,5,6];
console.log(arr)

// arr.splice(1,2) // first index se  2 item delete karne ke liye.
// console.log(arr)

arr.splice(1,2,'first','two','three') // first index se  2 item delete and first index se item ko add kar do.
console.log(arr)





