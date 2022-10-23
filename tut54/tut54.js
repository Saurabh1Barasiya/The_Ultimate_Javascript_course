// create a promiss in js ?
const container = document.getElementsByClassName("container")[0]
let p = new Promise((resolve, reject) => {

        setTimeout(() =>{
            console.log("Connecting to server.......");
            container.innerHTML = "Connecting to server...";
        },1000)

        setTimeout(() =>{
            console.log("fetching all the data from server.......");
            container.innerHTML = "fetching all the data from server.......";
        },3000)

        setTimeout(() =>{
            console.log("Conneting to instaGram.....")
            container.innerHTML="connection denay.......";
        },5000)

        setTimeout(() =>{
            console.log("Conneting to facebook.....")
            container.innerHTML="Conneting again.....";
        },7000)

        setTimeout(() =>{
            console.log("Connection established...")
            container.innerHTML="connecting to facebook...";
        },9000)

        setTimeout(() =>{
            console.log("Connection established...")
            container.innerHTML="connecting to Instagram...";
        },11000)

        setTimeout(() =>{
            console.log("Connection established...")
            container.innerHTML="connecting to facebook...";
        },13000)

        setTimeout(() =>{
            console.log("Connection established...")
            container.innerHTML="Connection established...";
        },15000)

        setTimeout(() =>{
            container.innerHTML=`<button>View password</button>`;
            resolve(true);
        },20000)
        
        
})



console.log(p);