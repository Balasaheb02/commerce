import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { CardModule } from '../../components/card/card/card.module';
import { RouterModule, Routes } from '@angular/router';


const UserRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
];

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    CardModule,
    RouterModule.forChild(UserRoutes)
  ]
})
export class UsersModule { }
