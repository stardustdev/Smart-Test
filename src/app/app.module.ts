import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleComponent } from './search/google/google.component';
import { BingComponent } from './search/bing/bing.component';
import { DataService } from './service/data.service';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { SearchComponent } from './search/search.component';
import { ColorStyledComponent } from './color-styled/color-styled.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleComponent,
    BingComponent,
    ColorSliderComponent,
    SearchComponent,
    ColorStyledComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
