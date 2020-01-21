import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoogleComponent } from './search/google/google.component';
import { BingComponent } from './search/bing/bing.component';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { SearchComponent } from './search/search.component';
import { ColorStyledComponent } from './color-styled/color-styled.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  {
    path: 'search',
    component: SearchComponent,
    children: [
      { path: '', redirectTo: 'google', pathMatch: 'full' },
      { path: 'google', component: GoogleComponent },
      { path: 'bing', component: BingComponent },
    ],
  },
  {
    path: 'colorslider',
    component: ColorSliderComponent,
    children: [
      { path: '', redirectTo: 'styled', pathMatch: 'full' },
      { path: 'styled', component: ColorStyledComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
