import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-pipes',
  standalone: false,
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
  // template:`<input type="text" [(ngModel)]="userInput" (ngModelChange)="toUpperCase()" placeholder="Type something">
  //   <p>Uppercase Output: {{ userInput | uppercase }}</p>`,
  providers:[DatePipe]
})
export class PipesComponent {
  // today=new Date();

  // // searchText:string='';
  users=[
    {name:'akil'},
    {name:'arun'},
    {name:'mani'},
    {name:'john'},
    {name:'giri'}
  ]

  // user = { name: 'John'};

  // changeName() {
  //   this.user.name = 'Doe';  // Pipe will NOT execute
  // }

  // changeObject() {
  //   this.user = { name: 'Doe' };  // Pipe WILL execute
  // }


  // items = ['Angular', 'React', 'Vue'];
  // searchText = '';

  // addItem() {
  //   this.items.push(this.searchText);  // Pipe executes
  // }
  // number:number[]=[1,2,3,4,5,6,7];

  userInput:string='';
  dateControl=new FormControl('');
  constructor(private datePipe:DatePipe){
    let today=new Date();
    this.dateControl.setValue(this.datePipe.transform(today,'yyyy-MM-dd'))
  }
  toUpperCase(){
    this.userInput=this.userInput.toUpperCase();
  }



  
}
