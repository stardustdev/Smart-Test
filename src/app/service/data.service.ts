import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSource = new BehaviorSubject({ name: '' });
  currentData = this.dataSource.asObservable();

  constructor() {}

  passData(data: any) {
    this.dataSource.next(data);
  }
}
