console.log("know about function and function expression.")

// simple function...

function fun(){
    console.log("this is a function");
}

fun();


const funExe = function(){
    console.log("this is a function expression");
}

funExe();



const funExe1 = function(a,b){
    return a+b;
}

console.log(funExe1(5,5));