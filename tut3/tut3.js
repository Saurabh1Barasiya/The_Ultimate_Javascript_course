console.log("Know about data types");
console.log("There are 7 types of premitives datatypes in javascript");


//  nn bb ss u
// number,null , boolean,bigint,  string,symbol, undefined.

let a = null;
let b = 2;
let c = true;
let d = BigInt(2)+BigInt(3);
let e = "hello";
let f = Symbol("hello i am syambol");
let g = undefined;

console.log(a,b,c,d,e,f,g);


// object is non-primitive data type.

obj = {
    name : "sachin",
    age : "30",
    city : "pune"

}
console.log(obj);
console.log(obj["name"]);
console.log(obj.city);
console.log(obj.age);