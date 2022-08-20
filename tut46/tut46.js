const userMethod={
    about : function(){
        console.log(`${this.firstName} learning javascript.`);
    },

    is18 : function(){
        console.log(`Is 18 ${this.age>= 18}`);
    }
}

function createUser(firstName,lastName,address,age){
    user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.address = address;
    user.age = age;

    // yaha hamne redference addd kiya hai.

    // but itni sari process hamko har barr karni hogi.

    // if ham bhul gaye to.

    // pahle upar likho phir yaha reference add kero.




    // but iska bhi solution h.

    user.about = userMethod.about;
    user.is18 = userMethod.is18;
    return user
}

user1 = createUser("Saurabh","Barasiya","Harrai",18);
console.log(user1.firstName,user1.lastName,user1.address,user1.age);

user1.about();
user1.is18();