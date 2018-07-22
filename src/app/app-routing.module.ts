import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewTankComponent } from './new-tank/new-tank.component';
import { BrowseTankComponent } from './browse-tank/browse-tank.component';
import { CheckLoginService } from './check-login.service';
import { NotLoginComponent } from './not-login/not-login.component';
import { AdminingComponent } from './admining/admining.component';



const routes: Routes = [
  { path: 'newtank', component: NewTankComponent, canActivate: [CheckLoginService] },
  { path: 'browsetank', component: BrowseTankComponent, canActivate: [CheckLoginService] },
  { path: 'admining', component: AdminingComponent, canActivate: [CheckLoginService] },
  { path: 'notlogin', component: NotLoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes, {useHash: true}) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }
