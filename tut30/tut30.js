console.log("Foreach loop");

// const numbers = [10,20,30];
// foreach loop takes a function as an argument

// numbers.forEach(function(number){
//   console.log(number);
// });


// numbers.forEach(function(element,index,array){
//     console.log(element,index,array);
//   });
  


// const numbers1 = [1,2,3,4,5];
// numbers1.forEach((element,index,array)=>{
//     console.log(element,index,array);
// });




// const numbers2 = [1,2,3,4,5];    




// numbers2.forEach(element => console.log(element));

const person = [
    {firstName: 'John', lastName: 'Doe'},
    {firstName: 'ani', lastName: 'piu'},
    {firstName: 'jane', lastName: 'doe'},
    {firstName: 'amy', lastName: 'lli'},
]

// person.forEach(element => console.log(element.firstName));
// console.log("🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳");



//                 element , index.
// person.forEach((user,index)=>{
//     console.log(index,user.firstName);
// });

// // we use for of loop also  👀👀👀

console.log("🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳🤳");
for(let user of person){
    console.log(user.firstName);
}