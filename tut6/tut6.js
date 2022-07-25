console.log("control flow statement");

let firstNumber = Number.parseInt(prompt("Enter number"));

if (firstNumber < 0){
    console.log("Number is negative");
}
else if (firstNumber >= 10){
    console.log("Number is greater than or equal to 10");
}

else if (firstNumber > 0){
    console.log("Number is positive");
}


else{
    console.log("Number is zero");
}