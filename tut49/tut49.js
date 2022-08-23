// know about new keywords.

// new keyword khud 1 empty object bana dega.
// hamko Object.create() bhi likhne ki need nahi hoti.
// proto ki value khud set kar deta h .

// and return likhne ki need bhi nahi hoti. 
// autometic return karna  h.


function createUser(name,age,city){
    this.name = name;
    this.age = age;
    this.city = city;
}

createUser.prototype.is18 = function(){
    return this.age > 18;
}

createUser.prototype.about = function(){
    return [this.name, this.age, this.city];
}

user1 = new createUser("saurabh",20,"harrai");
console.log(user1);
console.log(user1.name);
console.log(user1.age);
console.log(user1.city);


console.log(user1.is18());
console.log(user1.about());


// to jese hi hamne new keyword ka use kiya . hamko Object.create() likhne ki need nahi h ye automaticallly proto ki value set kar deta h.
// empty object create kar deta h.
// or autometic return ho  jata h return keyword likhne ki need nahi hoti.