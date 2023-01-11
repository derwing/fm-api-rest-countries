import { CountryDetailsComponent } from './country-details/country-details.component';
import { ListCountriesComponent } from './list-countries/list-countries.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    component: ListCountriesComponent
  },
  {
    path: 'countryDetails/:id',
    component: CountryDetailsComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: 'home'
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
