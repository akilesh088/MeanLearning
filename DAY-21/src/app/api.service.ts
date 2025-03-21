import { Injectable ,Inject} from '@angular/core';
import { apiUrlFactory } from './function.factory';
import { API_URL } from './config';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // private subject = new Subject<string>();

  // sendData(data: string) {
  //   this.subject.next(data);
  // }

  // getData() {
  //   return this.subject.asObservable();
  // }
  
  private userStatus = new BehaviorSubject<string>('Offline');

  // Step 2: Expose it as an Observable
  userStatus$ = this.userStatus.asObservable();

  // Step 3: Method to update the value
  updateUserStatus(status: string) {
    this.userStatus.next(status);
  }
}
