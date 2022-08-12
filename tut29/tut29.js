console.log("function returning function");

function takeInput(a,b){

    return function(){
        console.log(a+b);
    }

}

let a = 5;
let b = 10;
const retFunc = takeInput(a,b);   // to yaha takeInput function 1  function ko return karega.
console.log(retFunc);
retFunc();


console.log("================================");

// Language: javascript

const myFun = ()=>{
    console.log("hello");

    const muFun2 = ()=>{
        console.log("hello2");
    } 

    return muFun2;
}

const returnFunction = myFun();
console.log(returnFunction);
returnFunction();


