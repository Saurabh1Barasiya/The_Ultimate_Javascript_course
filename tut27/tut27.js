console.log("Objext destructuring");

const fun_detc = ({name,age,city})=>{
    console.log(name, age, city );
}

const person = {
    name: "John",
    age: 30,
    city: "New York"
}

fun_detc(person);