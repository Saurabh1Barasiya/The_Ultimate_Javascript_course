async function getData(){
    let dw = new Promise((resolve, reject) =>{
            resolve("35 Deg");
    },1000);

    let bw = new Promise((resolve, reject) =>{
            resolve("40 Deg");
    },5000);

    console.log("I am running");
    return [dw,bw];
}


const hello = async ()=>{
    console.log("Hello kya haal chal kese ho");
}


async function main(){
    let [d1,d2] = await getData();
    console.log(d1,d2);
    await hello();
}

main()

