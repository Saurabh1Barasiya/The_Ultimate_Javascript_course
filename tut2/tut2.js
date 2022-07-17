console.log("Let, const, var");

var a = 10;
var a = "Saurabh";

// var me 1 hi variable ko baar baar declare kar sakte h but let me nahi.
console.log(a);

// let is block scoped
let b = 20;
// let b = 30; // cannot redeclare block scoped variable.
console.log(b);

{
    let a = "barasiya";
    console.log(a);

    // frist priority is let.ko milego.
}

console.log(a);

// const are not changable.
// jab bhi const banate h to hamko isko initialize kar jaruri h.
//const a ; // cannot be declared.

const c = 1230;
console.log(c);

// let and const are block scoped.