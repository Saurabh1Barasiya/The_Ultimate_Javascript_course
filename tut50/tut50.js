function letsPlay(computerChose,yourchoise){
    if((computerChose === "gun") && (yourchoise === "snake")){
        alert("Computer Win");
        comScore += 1; 
    }else if((computerChose === "gun") && (yourchoise === "water")){
        alert("You Win");
        youScore += 1;
    }else if((computerChose === "snake") && (yourchoise === "water")){
        alert("Computer Win");
        comScore += 1;
    }else if((computerChose === "snake") && (yourchoise === "gun")){
        alert("You Win");
        youScore += 1   
    }else if((computerChose === "water") && (yourchoise === "gun")){
        alert("Computer Win");
        comScore += 1;
    }else if((computerChose === "water") && (yourchoise === "snake")){
        alert("You Win");
        youScore += 1;
    }else{
        alert("Invalid choice");
        // i know haray bhai apne stopScipt() nahi padhaya. but mene isko search kiya h laga yaha laga diya.

        /*
        https://stackoverflow.com/questions/550574/how-to-terminate-the-script-in-javascript#:~:text=a%20core%20dump.-,setTimeout((function()%20%7B%20return%20process.,exit%20to%20exit.
        */

        stopScript();
    }
}

function Chose(myArray){
    let life = 5;
    while(true){
        let index = Math.floor(Math.random()*myArray.length);
        let computerChose = myArray[index];
        alert(`computer chose ${computerChose}`)
        myArray.splice(index, 1);
        let str=`Press 0 for ${myArray[0]} and 1 for ${myArray[1]}`;
        yourchoise = myArray[parseInt(prompt(str))];
        letsPlay(computerChose,yourchoise);
        myArray.push(computerChose);
        life -= 1;
        if (life === 0){
            alert("Game Over");
            break;
        }
    }
    if (comScore > youScore){
        alert("Congrats computer win !!");
    }else if (comScore < youScore){
        alert("Congrats you win !!");
    }else{
        alert("Draw");
    }
    
}


let comScore = 0;
let youScore = 0;
let myArray = ["snake","water","gun"];

alert("Wellcome to Snake water gun game.");
let play = confirm("Do you wnat to play now!!!")
if(play){
    Chose(myArray); 
}else{
    alert("Lets meet after some time Bye bye !!!")
}

