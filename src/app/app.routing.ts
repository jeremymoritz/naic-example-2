import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';
import {Data1Component} from './data1.component';
import {Data2Component} from './data2.component';
import {Data3Component} from './data3.component';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}, {
		path: 'home',
		component: HomeComponent
	}, {
		path: 'data1',
		component: Data1Component
	}, {
		path: 'data2',
		component: Data2Component
	}, {
		path: 'data3',
		component: Data3Component
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);