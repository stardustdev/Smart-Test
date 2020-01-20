import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css'],
})
export class GoogleComponent implements OnInit {
  data: any;
  constructor(private messegeService: DataService) {}

  ngOnInit() {
    this.messegeService.currentData.subscribe(data => (this.data = data));
  }
}
