import { Component ,OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  constructor(private myService:MyServiceService){}

  user:any[]=[];
  ngOnInit(){
    this.message= this.myService.getData();
  }


}
