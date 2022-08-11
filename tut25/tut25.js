console.log("Function inside function");


const myVar = "value";
const app = ()=>{
    const myVar = "newvalue";

    const greet = ()=>{
        console.log("Hello World");
        console.log(myVar);
    }

    const f1 = ()=>{
        console.log("This is f1 function");
        console.log(myVar);
    }

    const f2 = ()=>{
        const myVar = "inside f2";
        console.log("This is f2 function");
        console.log(myVar);
    }
    greet();
    f1();
    f2();
}
app();

// pahle function apne pass dekhta h kya variable present function ke ander. if yes so  print it.
// nahi to uske parent me search karega if mila to print it.
// nahi to fir uske parent me search karta h. 

// global scope me.