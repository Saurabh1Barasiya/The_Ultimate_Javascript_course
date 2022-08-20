// call apply bind.

function show(hobby,music){
    console.log(this.name,this.age,hobby,music);
}


const person = {
    name: 'John',
    age: 30,

    
    // show:function(){
    //     console.log(this.name,this.age);
    // }
}

// person.show();
// to yaha this person .

// person.show.call(person);
// yaha par this person h.

// to hamko call yaha par ye bata raha h this ki value kya h.


const person2 = {
    name:"anita",
    age:25
}

// show.call(person2,"cricket","guitar");



// apply bhi same kaam karta h bas hamko yaha list send karna padta h.
show.apply(person2,['cricket','guitar']);
// anita 25 cricket guitar.


// bind hamko function return karta h.
const show2 = show.bind(person2);
show2('driving','car');


// bind hamko function return karta h. and jab bhi hamko call karne ki need hogi to ham us return function ko call kar lege.