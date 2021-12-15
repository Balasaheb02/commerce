import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance/finance.component';
import { RouterModule, Routes } from '@angular/router';

const FinanceRoutes: Routes = [
  {
    path: '',
    component: FinanceComponent
  }
];

@NgModule({
  declarations: [FinanceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(FinanceRoutes)
  ]
})
export class FinanceModule { }
