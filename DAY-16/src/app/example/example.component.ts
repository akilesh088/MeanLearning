
import { Component } from '@angular/core';
@Component({
  selector: 'app-example',
  standalone: false,
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent {
    message:string='Hello';
    imageUrl:string='https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
    
    count:number=0;
    increment(){
        this.count++;
    };

    decrement(){
        this.count--;
    };

    username:string="";

    tableId:string='userTable';

    isActive:boolean=true;

    font:string='red';
}