
import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { NewTankComponent } from './new-tank/new-tank.component';
import { BrowseTankComponent } from './browse-tank/browse-tank.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewTankComponent,
    BrowseTankComponent
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
