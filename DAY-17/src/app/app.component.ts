import { Component , OnInit} from '@angular/core';
import { MyServiceService } from './my-service.service';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent  {
   users: any[] = [];
  constructor(private myService:MyServiceService){}
    ngOnInit(){
      this.myService.getUsers().subscribe(data =>{
        this.users = data;
      })
    }

    sayHello(){
      console.log('Hello!');
    }
}
