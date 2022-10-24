let p = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(1)
        },2000);
})

let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject(new Error("Unable to connect"));
    },2000);
})

p.then((value) => {
    console.log(value);
    return value+1;
})
.then((value)=>{
    console.log(value);
})


p1.catch((err) => {
    console.log(err);
})

