console.log("array destructring");

let arr = [1,2,3];

// let d = arr[0];
// let e = arr[1];
// let f = arr[2];
// console.log(d,e,f);

let [a,b,c] = arr;
console.log(a,b,c);


arr = [1,2,3,4,5,6,7,8,9,10];

const [first,secound,third,...remaining] = arr;
console.log(first,secound,third,remaining);


for (let ele of remaining){
    console.log(ele);
}


