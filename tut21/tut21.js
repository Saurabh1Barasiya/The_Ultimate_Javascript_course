console.log("Knoe about object destructring.");


// Object destructring
const person = {
    name: "John",
    age: 30,
    city: "San Francisco",
}

// console.log(person);

const { name, age, city } = person;
console.log(name, age, city);




//    { name, age, city }  iske andar name vahi hona chahiye jo object mein h.
const { name1, age1, city1 } = person;
console.log(name1, age1, city1);

// we give somme new name also.

const { name:n1, age:a1, city:c1 } = person;
console.log("name : ",n1,"age : ", a1, "city : ",c1);