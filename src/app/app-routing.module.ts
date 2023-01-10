import { ListCountriesComponent } from './list-countries/list-countries.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    component: ListCountriesComponent
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  // {
  //   path: 'heroes',
  //   loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
  //   // canLoad: [AuthGuard],
  //   // canActivate: [AuthGuard]
  // },
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
