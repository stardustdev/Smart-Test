import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GoogleComponent } from "./google/google.component";
import { BingComponent } from "./bing/bing.component";

const routes: Routes = [
  { path: "google", component: GoogleComponent },
  { path: "bing", component: BingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
