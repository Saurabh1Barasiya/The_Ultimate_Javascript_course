// so here we learn about callback functions.

function fun1(){
    console.log("hello i am callback  function");
}


function fun2(callback){
    console.log("me callback function ko call kar dunga");
    callback();
}

fun2(fun1);

// jab koi function itself kisi function ko input leta h or function ke ander se hi input function ko call kar deta h to jo function input me aaya h vo callback function h.




function add(a,b){
    return a+b;
}

function letsAdd(callback){
    let a = 5;
    let b = 10;
    let result = callback(a,b);
    console.log(result);
}
letsAdd(add);