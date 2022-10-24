// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

// will know about async and await concept here.

async function getData(){
    let dw = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("29 Deg");
        },2000)
    });

    let bw = new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("35 Deg");
        },5000)
    });


    let delhiWether = await dw;
    let bangloreWether = await bw;

    return [delhiWether,bangloreWether];
}


getData().
then((data) => {
    const [data1, data2] = data;
    console.log(data1,data2);
})

// let p1 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve(1);
//     },2000)
// });

// let p2 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("one")
//     },4000)
// })


// p1.then((res) =>{
//     console.log(res);
// })

// p2.then((res) =>{
//     console.log(res);
// })
