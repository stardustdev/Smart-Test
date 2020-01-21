import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../service/data.service';
import { ColorModel } from '../model/color.model';

@Component({
  selector: 'app-color-styled',
  templateUrl: './color-styled.component.html',
  styleUrls: ['./color-styled.component.css'],
})
export class ColorStyledComponent implements OnInit {
  color: ColorModel;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentData.subscribe((color: ColorModel) => {
      this.color = color;
    });
  }

  getColor(): string {
    return `rgb(${this.color.red}, ${this.color.green}, ${this.color.blue})`;
  }
}
