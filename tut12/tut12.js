console.log("About string");

let name = "Saurabh Barasiya";
console.log(name.toString());
console.log(name.toUpperCase());
console.log(name.toLowerCase());

let val = "            amit                        ";
console.log(val)
console.log(val.trim());

name = "Saurabh Barasiya";
console.log(name.length);
console.log(name.charAt(0));
let newName = name.replace("Saurabh", "Amit");
console.log(name);
console.log(newName);




// string kabhi bhi change nahi hoti. matlab string are immutable.

let fname = "Ranu";
let lname = "Barasiya";
let fullName = fname + " " + lname;
console.log(fullName);
let fullName1 = fname.concat(" ",lname);
console.log(fullName1);