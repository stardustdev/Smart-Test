import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-bing',
  templateUrl: './bing.component.html',
  styleUrls: ['./bing.component.css'],
})
export class BingComponent implements OnInit {
  data: any;
  constructor(private messegeService: DataService) {}

  ngOnInit() {
    this.messegeService.currentData.subscribe(data => (this.data = data));
  }
}
