import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css'],
})
export class GoogleComponent implements OnInit {
  data: string;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentData.subscribe(
      (data: string) => (this.data = data)
    );
  }
}
