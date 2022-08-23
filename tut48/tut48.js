// prototype

// prototype means empty object.

// Object.create() proto ki value set karta h.


// function hamko object bhi return karta h .

function createUser(name, age,city) {
    const user = Object.create(createUser.prototype);
    user.name = name;
    user.age = age;
    user.city = city;
    return user;
}

// to hamne yaha createUser ki proto par createUser.prototype (object) ko set kar diya.

console.log(createUser.prototype);  // {}.  empty object.

createUser.prototype.is18 = function(){
   return this.age > 18;
}

createUser.prototype.about = function(){
    return [this.name,this.age,this.city];
}

console.log(createUser.prototype); 

user1 = createUser("saurabh",20,"chhindwara");
console.log(user1)

console.log(user1.name);
console.log(user1.age);
console.log(user1.city);

console.log(user1.is18());
console.log(user1.about());