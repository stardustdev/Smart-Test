import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: any;
  private dataSource = new BehaviorSubject(this.data);
  currentData = this.dataSource.asObservable();
  constructor() {}

  passData(data: any) {
    this.dataSource.next(data);
  }
}
