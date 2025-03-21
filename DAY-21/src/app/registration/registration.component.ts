import { Component } from '@angular/core';
import { FormGroup,FormControl , Validators,FormBuilder, FormArray } from '@angular/forms';
import { ApiService } from '../api.service';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './registration.component.html',
  //  template: `<button (click)="sendMessage()">Send Message</button>`,
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  // submitted=false;
  // userData={name:'',email:''}

  // onSubmit(form:any){
  //   this.submitted=true;
  //   this.userData=form.value;
  //   console.log('Form Data:',this.userData);
  // }

  // userForm=new FormGroup({
  //   name:new FormControl('',[Validators.required,Validators.minLength(5)]),
  //   email:new FormControl('',[Validators.required,Validators.email])
  // })
  
 

  // get email(){
  //   return this.userForm.get('email')
  // }

  // get name(){
  //   return this.userForm.get('name')
  // }

  // userForm:FormGroup;
  // onSubmit(){
  //   console.log('Form Data:',this.userForm.value);
  // }
  // constructor(private fb:FormBuilder){
  //   this.userForm=this.fb.group({
  //     name:new FormControl('',Validators.required),
  //     addresses:this.fb.array([]),

  //   })
  // }
  // get addresses(){
  //   return this.userForm.get('addresses')as FormArray;
  // }

  // addAddress(){
  //   this.addresses.push(this.fb.control(''));
  // }


  // skillsForm: FormGroup;

  // constructor(private fb: FormBuilder) {
  //   this.skillsForm = this.fb.group({
  //     skills: this.fb.array([])
  //   });
  // }

  // get skills() {
  //   return this.skillsForm.get('skills') as FormArray;
  // }

  // addSkill() {
  //   this.skills.push(this.fb.control(''));
  // }

  // removeSkill(index: number) {
  //   this.skills.removeAt(index);
  // }
  

  // user = { name: '', email: '', password: '' };
  // submitted = false;

  // onSubmit() {
  //   this.submitted = true;
  //   console.log("Form Submitted:", this.user);
  // }


  // constructor(private dataService: ApiService) {}

  // sendMessage() {
  //   this.dataService.sendData('Hello from Sender!');
  // }


  message = 'Waiting...';

  constructor(private dataService: DataserviceService) {}

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.message = data;
    });

    this.dataService.fetchData();
  }

}
