import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'smart';
  searchKey = '';
  searchMethod;

  constructor(private router: Router, private searchService: SearchService) {}

  onSearch() {
    this.router.navigateByUrl('/google').then(() => {
      this.searchService.search(this.searchKey);
    });
  }
}
