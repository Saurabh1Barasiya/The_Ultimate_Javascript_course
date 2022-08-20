console.log("");

// Object.create();


const user1 = {
    key1: "value1",
    key2: "value2",
}

// const user2 ={
//     key3: "value3",
// }

// console.log(user1.key1, user1.key2);

// console.log(user2.key3);

// me cahta hu ki user2 bhi key1 and key2 ko access kare.

// console.log(user2.key1, user2.key2);

// undefined undefined

// abhi dono result undefined aa raha h. but aesa na ho .to  ham Object.create() ka use karege.


const user2 = Object.create(user1);
user2.key3 = "value3";

console.log(user2.key1, user2.key2,user2.key3);
console.log(user2);


// to ab user1 , user2 ke [[Prototype]] me save ho gaya h.
