console.log("Know about arrow function");     

// const fun = function(){
//     console.log("I am function expression")
// }

// fun();


// now its time to learn arrow functions.

// const fun = ()=>{
//     console.log("I am arrow function");
// }

// fun();

// and if mere pass function ke ander only 1 hi statement h to .

// const fun1 = ()=>console.log("I am arrow function with single line.");
// fun1();


// when we have only single argment;
// function check(a){
//     return a>0;
// }

// console.log(check(-1));


// jab single statement hote h to return likhne ki need nahi hoti.
// const check = (a)=> a>0;
// console.log(check(1));


// parainthisis ko bhi use karne ki need nahi .
// const check = a => a>0;
// console.log(check(1));



const check2 = a=> a>0? a: a;
console.log(check2(1));