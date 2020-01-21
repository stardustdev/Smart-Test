import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  data: string;
  checkedVal = { options: 'google' };

  searchStr = '';

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentData.subscribe(
      (data: string) => (this.data = data)
    );
  }

  search() {
    if (this.checkedVal.options === 'google') {
      this.router.navigate(['search/google']);
    } else {
      this.router.navigate(['search/bing']);
    }
    this.dataService.passData(this.searchStr);
  }
}
