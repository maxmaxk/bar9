import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewTankComponent } from './new-tank/new-tank.component';
import { BrowseTankComponent } from './browse-tank/browse-tank.component';



const routes: Routes = [
  { path: 'newtank', component: NewTankComponent },
  { path: 'browsetank', component: BrowseTankComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule { }
