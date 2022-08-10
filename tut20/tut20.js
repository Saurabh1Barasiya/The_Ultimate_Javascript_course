console.log("About objects");

const person = {
    name: "John",
    age: 30,
    hobbies: ["movies", "music"],
}

// console.log(person);

// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// for(let hob of person.hobbies){
//     console.log(hob);
// }



// console.log(Object.keys(person));
// console.log(Object.values(person));


// const cars = [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
// ];

// const [first,secound,third] = cars;

// console.log(first);
// console.log(secound);
// console.log(third);

// for(let car of cars){
//     // console.log(car);
//     for(let item in car){
//         console.log(`${item}  : ${car[item]}`);
//     }
// }



// object destructring.
// const {name,age,hobbies:like} = person;
// yaha par like new name h hobbies ka.



// console.log(name,age,like);


// Object destructuring
const users = [
    {userId:1, name:"John", age:20,gender:"male"},
    {userId:2, name:"rohn", age:21,gender:"male"},
    {userId:3, name:"thon", age:30,gender:"male"},
];

// const [user1,user2,user3] = users;
// console.log(user1, user2, user3);


const [{userId:firstID,name:firstName,age:firstAge,gender:firstGender},{userId:secoundID,name:secoundName,age:secoundAge,gender:secoundGender},{userId:thirdId,name:thirdName,age:thirdAge,gender:thirdGender},] = users;

console.log(firstID,firstName,firstAge,firstGender);
console.log(secoundID,secoundName,secoundAge,secoundGender);
console.log(thirdId,thirdName,thirdAge,thirdGender);


