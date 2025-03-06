
// function changeMe(){
//     document.getElementById('img').src='Files/landacape.jpeg';
//     document.getElementById('link').href='https://dummyjson.com/products/category/smartphones';

    
// }
// function addElement(){
//     let p=document.createElement("p");
//     p.innerText='Hello';
//     document.getElementById("container").appendChild(p);
// }
// function removeElement(){
//     let container=document.getElementById("container");
//     if(container.lastChild){
//         container.removeChild(container.lastChild);
//     }
// }
// function change(){
//     let a=document.getElementById('box');
//     a.style.width='400px';
//     a.style.height='400px';
//     a.style.backgroundColor='red';
//     a.style.color='yellow';
//     a.style.fontFamily='sans-serif'
//     a.style.fontSize='35px';
// }
// function displayMessage(){
//     let name=document.getElementById("input").value;
//     document.getElementById("msg").innerText="Hello,"+name+"!";
// }

// Creating a DATE object

let d=new Date();
console.log(d);

let specificDate=new Date(2020,5,27);
console.log(specificDate);

let isoDate=new Date("2023-06-26T10:00:00Z");
console.log(isoDate);

d.setDate(25);
d.setMonth(10);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getTime());
console.log(d.getFullYear());
console.log(d);
d.setDate(d.getDate()+7);
console.log(d);
d.setMonth(d.getMonth()-2);
console.log(d);
let date=new Date();
let timeStamp=date.getTime();
console.log('Timestamp:',timeStamp);
let timeStamp1=new Date(timeStamp);
console.log('Timestamp:',timeStamp1);