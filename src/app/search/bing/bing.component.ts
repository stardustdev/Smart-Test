import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-bing',
  templateUrl: './bing.component.html',
  styleUrls: ['./bing.component.css'],
})
export class BingComponent implements OnInit {
  data: string;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentData.subscribe(
      (data: string) => (this.data = data)
    );
  }
}
