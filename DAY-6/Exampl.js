
// function showMessage(){
//     alert("hello everyone");
//     console.log("you logeged in");
// }

// require file is used to import modules to the file. 
// //fs is file  system module.it is predefined module presented in Node.js
// write is used to writing to a file
// const fs= require("node:fs");
// const content=' Hello content';
// fs.writeFile('message.txt',content,err=>{
//     if(err){
//         console.error("error");
//     }else{
//         console.log("success");
//     }
// });

// let name="AKIL";
// const PI=3.14;

// // To display object ${_} is used.

// console.log(`hello-${name}`);
// console.log(`hello-`);
// console.log(PI);

// //Arrow Function used to reduce line of codes.
// // It is mostly used while working with asynchronus data
// const add = (a,b) => a+b;
// console.log(add(4,2));

// // Destructuring

// const person={name1:"Ada", age:50}
// const{name1,age}= person ;
// console.log(name1,age);

// // Spread parameter(...arr1) and Rest operator
// // Spread is used for merging 
// // Rest is used for copying
// const arr1=[1,2,3,4];
// const arr2=[5,6,7,...arr1];

// console.log(arr2);
// // Rest opeator iterate to all values

// function sum(...numbers){
//     return numbers.reduce((acc,num)=>acc+num,0);
// }
// console.log(sum(1,2,3,4,5));
// // Default parameter

// function greet(name2="AKIl"){
//     console.log(`hello-${name2}`);
// }
// greet();

// Class & inheritance

// class Animal{
//     constructor(name){
//         this.name=name;
//     }
//     speak(){
//         console.log(`${this.name} is barking`);

//     } 
// }
// class Dog extends Animal{
//     speak(){
//         console.log(`${this.name} barks`);
//     }
// }
// const dog=new Dog("Rex");
// const animal=new Animal("Trex");
// animal.speak();
// dog.speak();

// // Promise 

// const fetchData= new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve("Date Received"),2000)
// });

// fetchData.then(data=>console.log(data));

// // ES7 Features

// // Array.prototype.include()

// const numbers=[1,2,3,4];
// console.log(numbers.includes(3));

// // Exponentiation operator it act as 2^3

// console.log(2**3);

// // ES 8 Features

// // Async/Await 
// // Used for asynchronous code or data

// const fetchdata = async()=>{
//     return "HELLO";
// };
// fetchdata().then(console.log);

// // Object.entries() & Object.values() used to change Objects into Arrays

// const user={a:"helo",age:26};

// console.log(Object.entries(user));
// console.log(Object.values(user));
// console.log(Object.keys(user));

// // String Padding(padStart & padEnd)

// console.log("JavaScript".padStart(15,"0"));
// console.log("JavaScript".padEnd(15,"b"));

// // ES-9  

// // Spread/Rest for objects
// const user={name:"john",age:25};
// const userCopy={...user,location:"NY"};

// console.log(userCopy);

// // Promise.prototype.finally()

// const fetchdata = async()=>{
//     return "";
// };

// fetchdata().then(data=>console.log(data))
// .catch(error=>console.error(error))
// .finally(()=>console.log("operation completed"));

// // Flattens nested array

// // Array.prototype.flat()

// const arr3=[1,[2,[3,[4,[5,[6]]]]]];
// console.log(arr3.flat(2));

// ES 11

// nullish Coalescing operator(??)

// let value = null ?? "Default";
// console.log(value);

// // Optional chaining(?.)
// // it avoids error when accessing properties on undefined or null

// constonsole.log(usr.prof usr={profile:{name:"hello"}};
// cile?.name);
// console.log(usr.profile?.address);

// Variables

// var Example 
// declared and used inside a function
// Get hoisted but with undefined value 
// best use case avoid using var

"use strict"
function exampleVAR(){
     var x=10;
     console.log(x);
     if(true){
        var x=20;
        console.log(x);
     }
     console.log(x);
}
exampleVAR();

// let Example
// prevents accidental variable rededlaration
// helps avoid bugs due to block scoping
//  use when value needs to change

function exampleLET(){
    let y=10;
    console.log(y);
    if(true){
       let y=20;
       console.log(y);
    }
    console.log(y);
}
exampleLET();

// const Example
// same as let ,it cannot be reassigned
// if variable is an object or array,its properties/elemments can still be modified.
// use for constants

function exampleCONST(){
    const x=10;
    console.log(x);
    if(true){
       const x=20;
       console.log(x);
    }
    console.log(x);
}
exampleCONST();

// const with object

const person={name:"john",age:35};
person.age=30;      //updating is alloweded
console.log(person);
// person={} <- reassigning is not possible


let a=10,b=10;
let c=++b;
console.log(c);
let d= ++c + ++a + b--;
let e=--d + b++ - --a - --a - ++b - ++d
console.log(c);
console.log(d);
console.log(e);

function counter(){
    let count=0;
    return{
        increment:function(){
            count++;
            console.log(`increment:${count}`);
        },
        decrement:function(){
            count--;
            console.log(`Decrement:${count}`);
        },
        getcount(){
            console.log(`current:${count}`);
        }
    }
}
const con=counter();
con.increment();
con.decrement();
con.getcount();
