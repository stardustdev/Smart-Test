import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ColorModel } from '../model/color.model';

@Component({
  selector: 'app-color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.css'],
})
export class ColorSliderComponent implements OnInit {
  redValue = 0;
  greenValue = 0;
  blueValue = 0;

  color: ColorModel;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentData.subscribe(
      (color: ColorModel) => (this.color = color)
    );
  }

  adjustColor() {
    this.dataService.passData({
      red: this.redValue,
      green: this.greenValue,
      blue: this.blueValue,
    });
  }
}
