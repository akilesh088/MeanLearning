import { Component, contentChild, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormsModule,Validator, Validators } from '@angular/forms';
import{MatTableDataSource} from '@angular/material/table'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface User{
  id:number;
  name:string;
  email:string;
  role:string;
}

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent {
  // userId:string|null='';
  // constructor(private route: ActivatedRoute){}

  // ngOnInit(){
  //   this.userId=this.route.snapshot.paramMap.get('id');
  // }
  
  // onSelect(option:string){
  //   console.log('Selected:',option)
  // }


  // items=['Angular','react','vue'];
  // Onselect(item:string){
  //   alert(`You selected:${item}`)
  // }

  // tabs=[
  //   {label:'Home',content:'Home'},
  //   {label:'Profile',content:'profile content'},
  //   {label:'Setting',content:'setting content'},
  // ];

  // addTab(){
  //   this.tabs.push({label:`tab${this.tabs.length+1}`,content:'Newtab'});
  // }
  
  // removeTab(index:number){
  //   this.tabs.splice(index,1);
  // }

  // products = [
  //   { title: 'Laptop', description: 'High-end gaming laptop', price: '$1200' },
  //   { title: 'Smartphone', description: 'Flagship phone', price: '$800' },
  //   { title: 'Smartwatch', description: 'Fitness tracker', price: '$300' },
  // ];

  // isLinear = true;
  // personalForm: FormGroup;
  // addressForm: FormGroup;

  // constructor(private _formBuilder: FormBuilder) {
  //   this.personalForm = this._formBuilder.group({
  //     name: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //   });

  //   this.addressForm = this._formBuilder.group({
  //     city: ['', Validators.required],
  //     zip: ['', Validators.required],
  //   });
  // }

  // onSubmit() {
  //   console.log('Personal Info:', this.personalForm.value);
  //   console.log('Address Info:', this.addressForm.value);
  // }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  displayedColumns: string[] = ['id', 'name', 'email', 'role'];
  users: User[] = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'Manager' },
  ];

  dataSource= new MatTableDataSource(this.users);
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  



}
