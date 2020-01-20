import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleComponent } from './google/google.component';
import { BingComponent } from './bing/bing.component';
import { SearchService } from './search.service';

@NgModule({
  declarations: [AppComponent, GoogleComponent, BingComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
