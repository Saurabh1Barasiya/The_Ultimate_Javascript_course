// know about array.find()..

// find method take function as a input.

// ye hame value provide karta h.

// ye hame koi 1 value return karke deta h.

// jaha condition sahi hogi uski first value return kar dega.

// const arr =[5,10,2,03,0];
// const result = arr.find(function(value){
//     return value == 5;
// });
// console.log(result);

// const result1 = arr.find(function(value){
//     return value > 2;
// });
// console.log(result1);




// 👀👀👀👀👀👀👀👀
// ye first value return kar dega. jo 2 se divide hogi.

let arr = [1,2,4,10,5,7,8];

function checkEven(number){
    return number % 2 === 0;
}

const value = arr.find(checkEven);
console.log(value);


// 👀👀👀 Array.find() hame value return karna h.

const myArr = [
    {"productId":1,producdName:"Laptop",price:10000},
    {"productId":2,producdName:"Mobile",price:20000},
    {"productId":3,producdName:"TV",price:30000},
    {"productId":4,producdName:"Fridge",price:40000},
    {"productId":5,producdName:"Washing Machine",price:50000},
]


const result = myArr.find((obj)=>{
    return obj.producdName === "Laptop";
});

console.log(result);


const result1 = myArr.find((obj)=>{
    return obj.price > 30000;
});

console.log(result1);

50000

const result2 = myArr.find((obj)=>{
    return obj.price === 50000;
});

console.log(result2);