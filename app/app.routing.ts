import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HomeComponent} from './home.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}, {
		path: 'heroes',
		component: HeroesComponent
	}, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
		path: 'detail/:id',
		component: HeroDetailComponent
  }, {
		path: 'home',
		component: HomeComponent
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);