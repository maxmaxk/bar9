
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { NewTankComponent } from './new-tank/new-tank.component';
import { BrowseTankComponent } from './browse-tank/browse-tank.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { NotLoginComponent } from './not-login/not-login.component';
import { NewTank1Component } from './new-tank1/new-tank1.component';
import { NewTank2Component } from './new-tank2/new-tank2.component';
import { NewTank3Component } from './new-tank3/new-tank3.component';
import { AdminingComponent } from './admining/admining.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';
import { TankResultsComponent } from './tank-results/tank-results.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewTankComponent,
    BrowseTankComponent,
    NavigatorComponent,
    NotLoginComponent,
    NewTank1Component,
    NewTank2Component,
    NewTank3Component,
    AdminingComponent,
    SearchFilterComponent,
    TankResultsComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpClientModule,
	AppRoutingModule
  ],
  providers: [
	Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
