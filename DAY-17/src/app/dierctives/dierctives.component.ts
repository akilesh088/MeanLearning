import { Component } from '@angular/core';

@Component({
  selector: 'app-dierctives',
  standalone: false,
  styleUrl: './dierctives.component.css',
  templateUrl: './dierctives.component.html',
  // template:`
  // <h1>Component Directives</h1>
  // <h2>Hello,from angular</h2>
  // <a href="#">Click Here</a><br>
  // <h1>Structural Directives</h1>
  // <button class="btn bg-secondary text-white btn-lg" (click)="toggleMessage()">Toggle Message</button>
  // <p *ngIf="showMessage">This is a structural directive example.</p>
  
  // <ul>
  //   <li *ngFor="let item of fruits;let i=index">
  //     {{i+1}}. {{item}}
  //   </li>
  // </ul>

  // <div [ngSwitch]="fruit">
  //   <p *ngSwitchCase="'Apple'">Apple selected</p>
  //   <p *ngSwitchCase="'Cherry'">Cherry selected</p>
  //   <p *ngSwitchCase>Default Selected</p>
  // </div>
  // <h1>Attribute Directives</h1>
  // <button [ngClass]="{'active':isActive}" class="btn btn-lg" (click)="toggleActive()">Toggle Class</button>

  // <button [ngClass]="{'active':isActive}" class="btn btn-lg" (click)="changeColor()">Change color</button>

  // <p [ngStyle]="{'color':textColor,'font-size.px':fontSize}"> change using ngStyle</p>

  // <h1>Custom Directives</h1>







  // `,
  // styles:[`.active{background-color:green;color:white}`]
  
})
export class DierctivesComponent {
  // showMessage=true;
  // toggleMessage(){
  //   this.showMessage=!this.showMessage;
  // }
  // fruits=['Apple','Banana','Cherry']
  // fruit='Apple';
  // isActive=false;
  // toggleActive(){
  //   this.isActive=!this.isActive;
  // }
  // textColor='blue';
  // fontSize=20;
  // changeColor(){
  //   this.textColor=this.textColor==='blue'?'red':'blue';
  //   this.fontSize=this.fontSize===20 ? 25:20;
  // }

  isVisible = false;
  a=10;
  b=70;
  c=50;

  isClick=true;
  
  

  items =['']
  onClick(){
    this.items.push('newItem ');
  }
  removeItem(){
    this.items.pop();
  }


  // isHighlighted = false;
isBold = false;

toggleHighlight() {
  this.isHighlighted = !this.isHighlighted;
}

toggleBold() {
  this.isBold = !this.isBold;
}

isHighlighted = true;
fontSize = '16px';

increaseFontSize() {
  this.fontSize = this.fontSize === '16px' ? '22px' : '16px';
}



textColor = 'black';
textSize = 16;
isItalic = false;

applyColor() {
  this.isItalic = !this.isItalic;
}

}
