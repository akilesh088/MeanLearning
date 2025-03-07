// let name1:string='john;'

// let age1:number=23;

// let isactive1:boolean=true;
// console.log(name1,age1,isactive1);

// Function in type script

// function add(a: number,b: number):number{
//     return a+b;
// }
// console.log(add(5,3));

// Interface in TS
// Object literals

// interface person{
//     name:string
//     age:number
// };

// let user:person={name:'Alice',age:25};
// console.log(user);

// Classes in typeScript

// class Animal{
//     name1:string;

//     constructor(name1:string){
//         this.name=name1;
//     }
//     makeSound():void{
//         console.log("barks");
//     }
// }
// let dog=new Animal("Dog");
// dog.makeSound();

// interface Dog extends Animal{

//     bark();
// }

//  Generics it allows us to use with differnt data types
// Syntax below:
// function identity<T>(arg:T):T{
//     return arg;
// }


// function  add<T,T2>(arg:T,arg2:T2):[T,T2]{
//     return [arg,arg2];
// };
// console.log(add<string,number>("Hello",245));


// Optional and Default parameters

// function greet(name:string,message:string="hello"):string{
//     return `${message},${name}`;
// }
// console.log(greet("Sohn"));//default sting hello is added
// console.log(greet("john",'hi'));//but here the value passed is added

// Interfaces and Strong typing

// interface Person{
//     name:string;
//     age:number;
// }
// let student:Person={
//     name:'sohn',
//     age: 77
// };

// console.log(student.name);

// Arrow function in TS
// const sum=(a:number,b:number):number=>a+b;
// console.log(sum(10,5));

// Enums in Ts
// enum is 0 based thing`
// enum color{
//     Red,greeen,blue
// }
// let myColor:color=color.greeen;
// console.log(myColor);//gives index of color green


// Union and Intersection types

// union types;

// let value:string|number;
// value="sohn";//correct
// value=32;//correct
// value=true;//boolean in not mentioned

// Intersection types
// interface Emp{
//     name:string,
//     age:number,
//     id:number;
// }
// interface Manager{
//     department:string,
//     id:number;
// }
// type TeamLead=Emp&Manager;
// let lead:TeamLead={name:'sohn',age:24,id:8,department:'HR'};

// console.log(lead);

//  Export and import files

// import {add} from "./math/math";
// console.log(add(4,3));

// Readonly and Private properties
// private member cannot be accesible outside the class.
// works exactly as private access modifyier

// class Car{
//     readonly model:string;
//     private price:number;

//     constructor(model:string,price:number){
//         this.model=model;
//         this.price=price;
//     }
//     getprice(){
//         return this.price;
//     }
// }
// let car=new Car("Tesla",5000);
// console.log(car.model,car.getprice());


// Decorators (Meta-Programming)
// it is used to modify behaviour of classes and methods.They are mostly used in frameworks like angular.

// Logger
// function Logger(constructor:Function){
//     console.log("Logging..");
//     constructor();
// }
// @Logger
// class Person{
//     constructor(){
//         console.log("Person created");
//     }
// }

// function fetchData():Promise<string>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve("Data received"),2000);
//     });
// }

// async function fetchAndPrint(){
//     let data= await fetchData();
//     console.log(data);
// }
// fetchAndPrint();

// Mappeed types

// type Person={
//     name:string;
//     age:number;
// };

// type ReadonlyPerson={
//     readonly [K in keyof Person]:Person[K];
// };
// let user:ReadonlyPerson={name:'sohn',age:25};
// // user.age=30;
// console.log(user);

// Tuples types

// let person:[string,number,boolean]=['Sohn',21,true];

// console.log(person[0]+" is a lavanya gopal");

// // arrays in gewneric types
//  function getitems<T>(items:T[]):T[]{
//     return new array<T>().concat(items);
// }

// let numarray= getitems<number>([1,2,3,4]);
// let stringarray= getitems<string>(['a','b','c','d']);

// console.log(numarray,stringarray);

// Type assertion

// let somevalue:any="Hello";
// let strLength:number=(somevalue as string).length;
// console.log(strLength);

// 