import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CardModule } from 'src/app/components/card/card/card.module';
import { RouterModule, Routes } from '@angular/router';

const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(HomeRoutes)
  ]
})
export class HomeModule { }
