// about function and objects.

// create object using function.

function createUser(firstName,lastName,address,age){
    user = {}
    user.firstName = firstName;
    user.lastName = lastName;
    user.address = address;
    user.age = age;

    user.about = function(){
        console.log(`${this.firstName} learning javascript.`)
    }

    user.is18 = function(){
        console.log(`Is 18 ${this.age>= 18}`);
    }

    return user
}

user1 = createUser("Saurabh","Barasiya","Harrai",18);
console.log(user1.firstName,user1.lastName,user1.address,user1.age);

user1.about();
user1.is18();


// but yaha par 1 dikket h ham jitni baar new user create karege utni hi baar new about and is18 function space memory me lege.


// is solution next part me h.