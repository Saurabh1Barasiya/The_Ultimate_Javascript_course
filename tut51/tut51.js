let button = document.getElementById("b1");
let clear = document.getElementById("r1");
let joke = document.getElementsByClassName("joke")[0];

const arr = ["There’s a fine line between a numerator and a denominator. (…Only a fraction of people will get this clean joke.","What do dentists call their x-rayTooth pics!","Did you hear about the first restaurant to open on the moon It had great food, but no atmosphere.","What did one ocean say to the other ocean Nothing, it just waved.","Do you want to hear a construction joke Sorry, I’m still working on it.","Why is Peter Pan always flying Because he Neverlands. (I love this joke because it never grows old","You know, it was so cold in D.C. the other day, I saw a politician with his hands in his own pockets.","What’s the difference between a poorly dressed man on a unicycle and a well-dressed man on a bicycle?"];


const relod = () => { document.location.reload() }

button.addEventListener("click", function(){
    let index = Math.floor(Math.random() * arr.length);
    joke.innerHTML=`<h1>"${arr[index]}"</h1>`;
})

clear.addEventListener("click", () => { relod() })