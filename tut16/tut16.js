// know concept of primitive and reference data types.

let num  = 10;
let num2 = num;
console.log(num,num2);
console.log("after change num1");
num2 = 20;
console.log(num,num2);

// ab yahi same concept me list ke shat apply karunga.

let l1 = [1,2]
let l2 = l1;
console.log(l1,l2);

console.log("after change l1");
l1.push(100)
console.log(l1,l2);
// reference type data me aesa hota dono 1 hi object ko point karte h.
// but premitive type me dono alag alag hote h.


// to jo reference type ke data hote h vo heap me space late h.
// to jo primitive type ke data hote h vo stack me space late h.



