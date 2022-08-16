// know about array like object.

let arr = [1,2,3,4,5,6,7,8,9,10];

// ham jis par .length use karte h vo array like object h.
// and ham jis par for loop laga sakte h vo array like object h.


for(let ele of arr){
    console.log(ele);
}

console.log("length is : ",arr.length);

// but ham object par .length me use nahi kar sakte.
// ham object par for of loop ka use nahi kar sakte.


let obj = {
    name:"saurabh",
    age:20,
    city:"Delhi",
}



// obj is not iterable
// for(let ele of obj){
//     console.log(ele);
// }


// but ham object par .length me use kar sakte.

// undefined.
console.log(obj.length);