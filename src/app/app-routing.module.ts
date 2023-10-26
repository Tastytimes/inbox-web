import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantsDetailsComponent } from './components/restaurants-details/restaurants-details.component';

const routes: Routes = [
  { path: "restaurants", component: RestaurantsComponent },
  { path: "restaurants/:id", component: RestaurantsDetailsComponent },
  { path: "", redirectTo: "/restaurants", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
