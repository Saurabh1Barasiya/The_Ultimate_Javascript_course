console.log("know about for loop.");

for(let i = 0; i < 10; i++){
    console.log(i);
}
// console.log(i) . ham i ko bahar use nahi kar sakte . kyoki hamne i ko let ka use karke banaya h .
// and let ka block scope hota h.
// agar ham var ka use karte to ham i ko bahar use kar sakte the.

console.log("============================");
for(var i = 0; i < 10; i++){
    console.log(i);
}
console.log("out of for loop.",i);


// for of loop.
// for of loop direct value  deta h .

console.log("============================");
const arr = ['a','b','c','d','e'];
for (let ele of arr){
    console.log(ele);
}

console.log("============================");
const name = "Saurabh";
for (let ele of name){
    console.log(ele);
}

// for in loop.
// for in loop direct index deta h .
console.log("============================");
let fruit = ["banana","apple","mango","orange","pineapple","grapes"];
for (let i in fruit){
    console.log(`index ${i} and value ${fruit[i]}`);
}

console.log("============================");

const obj = {
    name : "Saurabh",
    age : 21,
    city : "Pune",
    country : "India",
    hobbies : ["cricket","football","reading"],
}

console.log(typeof obj);
// can we use for of loop in object.
// 👀👀👀👀👀


// 👀👀👀👀👀 obj is not iterable.
// for(let i of obj){
//     console.log(i);
// }


// to ham for of ka use nahi kar sakte object me because object is not iterable.




// for in loop in object.

for (let i in obj){
    console.log(`${i} ===> ${obj[i]}`);
}

