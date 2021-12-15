import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./main/home/home/home.module').then(m => m.HomeModule),
  },
  // {
  //   path: 'details/:id',
  //   loadChildren: () => import('./details/details.module').then(m => m.DetailsModule),
  // },
  {
    path: 'finance',
    loadChildren: () => import('./main/finance/finance.module').then(m => m.FinanceModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./main/users/users.module').then(m => m.UsersModule),
  },
  {
    path: 'company',
    loadChildren: () => import('./main/companies/companies.module').then(m => m.CompaniesModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
