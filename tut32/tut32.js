// know about sort method.

// same array me changes karta h.



const arr = [5,4,3,2,1];
arr.sort((a,b) => b-a);
console.log(arr);

const products = [
    {producdId:1,producdName:'mobile',price:2000},
    {producdId:2,producdName:'laptop',price:4000},
    {producdId:3,producdName:'camera',price:6000},
    {producdId:4,producdName:'tv',price:3000},
    {producdId:5,producdName:'speaker',price:1000},
];

console.log(products);

// sort by price.
// desending order.
products.sort((a,b)=>b.price-a.price);
console.log(products);
// asending order.
products.sort((a,b)=>a.price-b.price);
console.log(products);