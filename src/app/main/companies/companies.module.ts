import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies/companies.component';
import { RouterModule, Routes } from '@angular/router';

const CompanyRoutes: Routes = [
  {
    path: '',
    component: CompaniesComponent
  }
]

@NgModule({
  declarations: [CompaniesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CompanyRoutes)
  ]
})
export class CompaniesModule { }
