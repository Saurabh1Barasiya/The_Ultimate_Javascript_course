// here we learn about every method. 

// python ka all()  method == every()


// every() method is used to check whether all the elements in an array pass a test.

// jab sab true hoga to hi true return krna hoga otherwise false return krna hoga.


// so every function hamesha true ya false hi return karega.


let arr = [2,4,6,8,10,3];

let ret_val = arr.every((value)=>{
    return value % 2===0;
});

console.log(ret_val);

// kye array me sabhi element 5 se bade h.

rel_val = arr.every((value)=>value>5);
console.log(rel_val);

let arr1 = [1,3,5,9];
ret_val = arr1.every((value)=>value % 2===1);
console.log(ret_val);