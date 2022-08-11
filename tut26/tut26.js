console.log("block scope and function scope");

// let and const are block scope.

// var are function scope.

{
    var a = 1;
    let b = 2;
    const c = 3;
    console.log(a, b, c);
}

console.log(a);  //  print hoga because a var leval scope h.
// console.log(b);  // not printable  block scope .                    
// a is function scope.
// console.log(c); // // not printable block scope .                     