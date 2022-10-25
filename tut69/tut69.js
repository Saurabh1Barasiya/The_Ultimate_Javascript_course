let p = document.getElementById("p");
const showTime = () =>{
   setInterval(()=>{
        let d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let secounds = d.getSeconds()
        p.innerHTML = `${hours} : ${minutes} : ${secounds}`;
   },1000)
}
showTime();