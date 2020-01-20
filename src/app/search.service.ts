import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  observable;

  constructor() {
    this.observable = Observable.create();
  }

  search(searchKey: string) {}
}
