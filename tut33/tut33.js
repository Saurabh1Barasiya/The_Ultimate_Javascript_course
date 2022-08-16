let number = Math.floor(Math.random() * 100) + 1;
console.log("danahvchdvf-");
let chance = 0;

while (true){
    let guess = Number.parseInt(prompt("Guess the number"));
    if (guess === number){
        console.log("You guessed right!");
        break;
    }
    else if (guess > number){
        console.log(`${guess} is too high ,pick a lower number`);
        chance++;
    }
    else if (guess < number){
        console.log(`${guess} is too low pick a higher number`);
        chance++;
    }
    else {
        console.log("Please enter a number");
        chance++;
    }
}


console.log(`You guessed ${100-chance} times`);
console.log(`The number was ${number}`);
