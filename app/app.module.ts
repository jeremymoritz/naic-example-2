import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular2-in-memory-web-api';
import {InMemoryDataService}  from './in-memory-data.service';

import {AppComponent} from './app.component';

import {HeaderComponent} from './header.component';
import {NavComponent} from './nav.component';
import {HomeComponent} from './home.component';
import {Data1Component} from './data1.component';
import {Data2Component} from './data2.component';
import {Data3Component} from './data3.component';

import {NaicExampleService} from './naic-example.service';
import {routing} from './app.routing';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		routing
	],
	declarations: [
		AppComponent,
		HeaderComponent,
		NavComponent,
		HomeComponent,
		Data1Component,
		Data2Component,
		Data3Component
	],
	providers: [
		NaicExampleService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
