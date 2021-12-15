import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { TopbarModule } from './components/topbar/topbar.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './main/home/home/home.module';
import { FinanceModule } from './main/finance/finance.module';
import { UsersModule } from './main/users/users.module';
import { CompaniesModule } from './main/companies/companies.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    HttpClientModule,
    TopbarModule,
    HomeModule,
    FinanceModule,
    UsersModule,
    CompaniesModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
