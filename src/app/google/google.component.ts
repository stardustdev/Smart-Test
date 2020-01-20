import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss'],
  providers: [SearchService],
})
export class GoogleComponent implements OnInit {
  searchKey;

  constructor(private searchService: SearchService) {}

  ngOnInit() {}
}
