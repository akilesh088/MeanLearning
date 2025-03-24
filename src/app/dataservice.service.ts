import { Injectable } from '@angular/core';
import { AsyncSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  // private dataSubject = new AsyncSubject<string>();

  // fetchData() {
  //   setTimeout(() => {
  //     this.dataSubject.next('Shared Data Loaded');
  //     this.dataSubject.complete();
  //   }, 2000);
  // }

  // getData() {
  //   return this.dataSubject.asObservable();
  // }

  private userStatus= new ReplaySubject<string>(4);

  constructor(){
    this.userStatus.next('Login')
  }
  login(){
    this.userStatus.next('Logged In')
  }
  logout(){
    this.userStatus.next('Logged Out')
  }
  getUserStatus(){
    return this.userStatus.asObservable();
  }
}
