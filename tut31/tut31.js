console.log("Know about Map filter reduce");    

const arr = [1,2,3,4,5,6,7,8,9,10];

// map 1 function lega.

function square(num){
    return num * num;
}

const squareArr = arr.map(square);
console.log(squareArr);

// 👀👀👀👀👀👀👀👀👀👀

const cubeArr = arr.map((num)=>{return num*num*num});
console.log(cubeArr);

const divide = arr.map(num=> num / 2);
console.log(divide);

// arraow function me if ham only one line likthe h or vo line return ho rahe h to hamke parainthsis lahgane ki need nahi h and na hi return keyword likhna h.



// now lets talk about filter.

// if hamko koi filer operation perform karna h to .

// filter function also take function as a argument.
const arr1 = [1,2,3,4,5,6,7,8,9,10];
let even = arr1.filter((num)=>{
    return num % 2 === 0;
});

let odd = arr1.filter(num=> num % 2 !== 0);

console.log("Even numbers are",even);
console.log("Odd numbers are",odd);


// 👀👀👀👀👀👀👀👀👀👀
// know about reduce.

// reduce matlab kisi badi cheej ko choti karna h.


let value = arr1.reduce((acc,num)=>acc+num);
console.log(value);