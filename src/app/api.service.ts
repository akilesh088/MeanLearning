import { Injectable ,Inject} from '@angular/core';
import { apiUrlFactory } from './function.factory';
import { API_URL } from './config';
import { BehaviorSubject, Observable, ReplaySubject, Subject,throwError,catchError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // private subject = new Subject<string>();

  // sendData(data: string) {
  //   this.subject.next(data);
  // }

  // getData() {
  //   return this.subject.asObservable();
  // }
  
  // private userStatus = new BehaviorSubject<string>('Offline');

  // // Step 2: Expose it as an Observable
  // userStatus$ = this.userStatus.asObservable();

  // // Step 3: Method to update the value
  // updateUserStatus(status: string) {
  //   this.userStatus.next(status);
  // }


  // constructor(){}
  //   private shared =new ReplaySubject<string>(1);
 
  //   selectItem(item:string){
  //       this.shared.next(item)
  //   }
  //   getSelectedItem(){
  //       return this.shared.asObservable();
  //   }

  private apiUrl='https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient){}

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    console.error('Error fetching data:', error.message);
    return throwError(() => new Error('Something went wrong. Please try again later.'));
  }

  getUserbyId(id: number): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addUser(user:any):Observable<any>{
    return this.http.post<any>(this.apiUrl,user);
  }

  updateUser(id: number,user:any):Observable<any>{
    return this.http.put<any>(`${this.apiUrl}/${id}`,user)
  }
  deleteUser(id: number):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`)
  }


}
