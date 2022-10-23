console.log("tut1");

arr = []
function create(){
    //console.log(...arr,{name:"amit"})
    return [...arr,{name:"amit"}];
}

data= create(arr);
//console.log(...data);

data = [...data,{name:"anita"}];
//console.log(Array.isArray(data));

//console.log(...data);

data = [...data,{name:"sunita",age:20}]
console.log(...data);



console.log(...[1,2,3,4,5,6]);