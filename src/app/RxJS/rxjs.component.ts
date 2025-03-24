import { Component,OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, debounceTime, interval, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { catchError, throwError } from 'rxjs';
import { ApiService } from '../api.service';
import { NgStyle } from '@angular/common';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-rxjs',
  standalone: false,
  templateUrl: './rxjs.component.html',
  // template: `<p>{{ message }}</p>`,
  styleUrl: './rxjs.component.css'
})
export class RxjsComponent  {

  // searchControl= new FormControl('');

  // constructor(){
  //   this.searchControl.valueChanges
  //   .pipe(debounceTime(500))
  //   .subscribe(value=>console.log('User input:',value));
  // }

  // data$:Observable<any>;
  // constructor(private http:HttpClient){
  // this.data$=this.http.get('https://jsonplaceholder.typicode.com/posts')
  // .pipe(map(data=>data))
  // }

  // constructor(private http: HttpClient) {
  //   this.http.get('https://jsonplaceholder.typicode.com/posts_invalid')
  //     .pipe(
  //       catchError(error => {
  //         console.error('Error:', error);
  //         return throwError(() => new Error('Something went wrong!'));
  //       })
  //     )
  //     .subscribe(
  //       data => console.log('Data:', data),
  //       error => console.log('Error occurred:', error.message)
  //     );
  // }


  // private subscription:Subscription;

  // constructor(){
  //   this.subscription=interval(1000).subscribe(value=> console.log(value))
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

  // private subject = new Subject<string>();

  // sendData(data: string) {
  //   this.subject.next(data);
  // }

  // getData() {
  //   return this.subject.asObservable();
  // }

  // message: string = '';

  // constructor(private dataService: ApiService) {}
  // ngOnDestroy(): void {
  //   throw new Error('Method not implemented.');
  // }

  // ngOnInit() {
  //   this.dataService.getData().subscribe((data) => {
  //     this.message = data;
  //   });
  // }
  


  // status: string = '';

  // constructor(private userService: ApiService) {}

  // ngOnInit() {
  //   // Step 4: Subscribe to the BehaviorSubject
  //   this.userService.userStatus$.subscribe(status => {
  //     this.status = status;
  //   });
  // }
  // goOffline() {
  //   this.userService.updateUserStatus('Offline');
  // }
  // // Step 5: Call service method to update status
  // goOnline() {
  //   this.userService.updateUserStatus('Online');
  // }


  
  //  isLoggedIn = new BehaviorSubject<boolean>(false);
  // isLoggedIn$ = this.isLoggedIn.asObservable();

  // login() {
  //   this.isLoggedIn.next(true);
  //   console.log(this.isLoggedIn$)
  // }

  // logout() {
  //   this.isLoggedIn.next(false);
  //   console.log(this.isLoggedIn$)
  // }

//   message = 'Waiting...';

//   constructor(private dataService: DataserviceService) {}

// ngOnInit() {
//     this.dataService.getData().subscribe(data => {
//       this.message = data;
//     });
  // }
  // selectedItem:string='';
  // constructor(private sharedService:ApiService){}

  // ngOnInit(){
  //   this.sharedService.getSelectedItem().subscribe(item=>{
  //     this.selectedItem=item;
  //   })
  // }

  
  

}
