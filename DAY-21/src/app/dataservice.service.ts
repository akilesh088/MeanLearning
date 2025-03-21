import { Injectable } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private dataSubject = new AsyncSubject<string>();

  fetchData() {
    setTimeout(() => {
      this.dataSubject.next('Shared Data Loaded');
      this.dataSubject.complete();
    }, 2000);
  }

  getData() {
    return this.dataSubject.asObservable();
  }
}
