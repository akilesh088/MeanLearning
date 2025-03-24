import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  
  constructor(public dialog:MatDialog){}

  openDialog(){
    this.dialog.open(UserComponent)
  }
}
