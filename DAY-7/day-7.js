
// // Event Handlers

// function buttononClickHandler(){
//     let click=0;
//     return function(){
//         click++;
//         console.log(`Button clicked ${click} times.`);
//     }
// }
// const button=document.createElement("button");
// button.innerText="Click Here";
// document.body.appendChild(button);

// const handleClick = buttononClickHandler();
// button.addEventListener("mouseenter",handleClick);

// Event loop,Callback Queue,and Microtasks Queue:

// Event loop 

// Callback queue
// It execute micro task first then, moves to macro tasks

// console.log("Start");
// setTimeout(()=>{
//     console.log("Timeout Callback");
// },5);
// console.log("End");

// Microtask Queue
// // stores higher Priority tasks like Promise(.then,.catch,.map)

// console.log("Start");
// setTimeout(()=>{
//     console.log("Timeout Callback");
// },0);

// Promise.resolve().then(()=>{
//     console.log("Promise Microtask-1")
// });
// Promise.resolve().then(()=>{
//     console.log("Promise Microtask-2")
// });
// console.log("End");



// function validateForm(){
//     let name=document.getElementById('name').value;
//     if(name === ""){
//         alert("please enter your name");
//     }else{
//         alert('Form submitted');
//         return true;
//     };
// };

// //  https://dummyjson.com/products/category/smartphones
// function fetchData(){
//     fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(res=> res.json())
//     .then(data =>document.getElementById('fetch').innerText=data.body)
// }
// function Fade(){
//     let ele=document.getElementById('fade');
//     ele.style.color='red';
//     ele.style.transitionDuration='5s';
//     ele.style.transition='opacity 1s';
//     ele.style.opacity='0';
// }

// function saveName(){
//     let name=document.getElementById('uname').value;
//     localStorage.setItem("user",name);
//     document.getElementById('greet').innerText='Hello '+name;
// }

// function Change(){
//     document.getElementById('modify').innerText='Modified content';
// }

// function Change1(){
//     document.getElementById('nn').innerHTML="<span>Hello</span>";
    
// }

// function changeImage(){
//     document.getElementById('img').src='Files/landacape.jpeg';
// }



// Arrays

// let numbers=[50,23,43,566]
// numbers.push('pop');
// console.log(numbers);
// numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.unshift(24);
// console.log(numbers);
// numbers.splice(1,2,"newton");
// console.log(numbers);
// numbers.slice(1,);
// console.log(numbers);
// numbers.includes("item");
// console.log(typeof(numbers));
// numbers.join('rftghrth');
// console.log(numbers);

// let doubled=numbers.map(num=>num*2);
// console.log(doubled)

//  Higher order function

// function operate(a,b,callback){
//     return callback(a,b);
// };
// let result=operate(10,5,(x,y)=>x+y);
// console.log(result);

// // imediately invode function expression

// (function(){
//     console.log("this function runs immediatly");
// })();

// let fruit=['apple','banana','apple','banana','apple','banana','orange'];
// let count=fruit.reduce((acc,fruit)=>{
//     acc[fruit]=(acc[fruit] ||0)+1;
//     return acc;
// },{})
// console.log(count);

// async function fetchData() {
//     let response=await fetch("https://dummyjson.com/products/category/smartphones")
//     let data= await response.json();
//     console.log(Object.entries(data));
// };
// fetchData();

// object to JSON-->stringyfy
// JSON to object-->parse

let sentence="learn Angular";
let wordsArray=sentence.split(" ");
console.log(wordsArray);
let rsentance=wordsArray.reverse().join(" ");
console.log(rsentance);
