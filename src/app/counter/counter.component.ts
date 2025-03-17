import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count:number=0;
  incrementBy:number=1;
  textColor: string='gray';
  isActive:boolean=true;


  increment(){
    this.count +=this.incrementBy;
  }
  decrement(){
    this.count -=this.incrementBy;
  }

  getSum(){
    return 25+35;
  }

  

  fruits=['Apple','Banana','Mango'];

  employees=[
    {name:'Akil',age:21},
    {name:'Sohn',age:21},
    {name:'john',age:21}
  ]

  isDarkmode=false;

  // uname:string=''
  // name:string=''
  // displayUname(){
  //   this.name=this.uname;
  // }
  user={
    name:'',
    age:0,
    // address:{
    //   city:'Pune'
    // }
  }

  name1:string='';
  age1:number=0;

  formSubmit(){
    this.name1=this.user.name;
    this.age1=this.user.age;
  }
  
  
}
