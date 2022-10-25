console.log("hello all");

let p1 = async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(1)
        },1000);
})
}

let p2 = async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(2)
        },2000);
})
}


let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(3)
        },3000);
})
}

const main = async()=>{
    console.time("run");
    let a1 = p1();
    let a2 = p2();
    let a3 = p3();
    
    let a1a2a3 =await Promise.all([a1,a2,a3]);
    console.log(a1a2a3);
}

main()
