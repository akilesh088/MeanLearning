"use strict";
// import { Observable } from "rxjs";
Object.defineProperty(exports, "__esModule", { value: true });
// const myObservable=new Observable(observer =>{
//     observer.next('Hello');
//     observer.next('RxJS');
//     observer.complete();
// });
// myObservable.subscribe(value => console.log(value));
// import { of } from "rxjs";
// import { map } from "rxjs";
// of(2,6,7).pipe(map(x=>x*2)).subscribe(console.log);
// import { Observable } from "rxjs";
//  export function filterEvenNumbers(){
//     return (source:Observable<number>)=>
//         new Observable<number>(observer=>{
//             return source.subscribe({
//                 next(value){
//                     if(value%2 ===0) observer.next(value)
//                 },
//             error(err){observer.error(err)},
//             complete(){observer.complete()}
//             })
//         })
//     }
var rxjs_1 = require("rxjs");
var subject = new rxjs_1.Subject();
subject.subscribe(function (value) { return console.log('Subscriber 1:', value); });
subject.subscribe(function (value) { return console.log('Subscriber 2:', value); });
subject.next(10);
subject.next(20);
