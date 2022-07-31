console.log("About function");

// function declaration
function sayHello() {
    console.log("hello");
}

sayHello();


const myFunction = function() {
    console.log("its a function expression.");
}
myFunction();



const myFunction1 = (a,b)=>{
    console.log("its arrow function.");
    return a+b;
}

const res=myFunction1(5,5);
console.log(res);