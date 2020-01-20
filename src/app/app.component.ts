import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: any;
  title = 'smart';
  checkedVal = { options: 'google' };

  searchStr = '';

  constructor(private router: Router, private messegeService: DataService) {}

  ngOnInit() {
    this.messegeService.currentData.subscribe(data => (this.data = data));
    console.log(this.checkedVal.options);
  }

  search() {
    console.log('search string: ', this.searchStr);
    this.messegeService.passData({ name: this.searchStr });
    if (this.checkedVal.options === 'google') {
      this.router.navigate(['/google']);
    } else {
      this.router.navigate(['/bing']);
    }
  }
}
