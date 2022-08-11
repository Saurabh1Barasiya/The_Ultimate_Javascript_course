console.log("Welcome to tut26");
// Hoisting.


// fun1();

// function fun1(){
//     console.log("Hello this is fun 1");
// }

// 👇👇👇👇👇👀👀👀👀
// Ye javascript ka behavior hai 
// if ham function define karne ke pahle usko call kare to to run ho jayega.
// but function expression and arrow function ke case me run nahi hoga.



// fun();

// const fun = ()=>{
//     console.log("Arrow function ke case me if apne call pahle kar diya h to run nahi hoga");
// }

// Cannot access 'fun' before initialization

fun();

const fun = function(){
    console.log("function expression ke case me if apne call pahle kar diya h to run nahi hoga");
}




// Agar ham function define karne ke pahle usko call kare to to run ho jayega.
// normal function ke case me .

// but arrow function and function expression ka use karege to its not possible to run it , error show karega.