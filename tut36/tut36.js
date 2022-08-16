// know about some method.

// some() -- > input me function lega .
// if 1 bhi condition true hogi toh output me true return krna hai. else false.

let arr = [2,4,5,6,10];

let result = arr.some((value)=>{
    return value % 2 === 0;
});

console.log(result);



arr = [2,3,4,5,8,10];
result = arr.some((value)=>{
    return value % 2 === 0;
});

console.log(result);

let arr1 = [true,true,true,true,true,true,true,true,true];

result = arr1.some((value)=> value);
console.log(result);

// 1 bhi value true h to true dega . 
// if sare hi true h to true hi dega.

// if sare hi false hoge to hi false milega.

arr1 = [false,true,true,false];

result = arr1.some((value)=> value);
console.log(result);

arr1 = [false,false,false,false];

result = arr1.some((value)=> value);
console.log(result);