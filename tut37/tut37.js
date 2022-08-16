// know about array.fill() method.

let arr = new Array(10).fill(1);
console.log(arr);


arr.fill(5);
console.log(arr);



// value , startIndex , endIndex , endValue.
arr.fill(10,2,5);
console.log(arr);   

// startIndex are include and endIndex are exclude.