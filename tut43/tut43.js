console.log("window object");
// console.log(window);


// ham jis object se function ko call karte h . this ki value vo object ban jati h.

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     about:function(){
//         console.log(this);
//     }
// }

// person.about();


function getVal(){
    'use strict';
    console.log(this);
}

getVal();

// window.getVal();

// window global object hota h.
