import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './components/app/app.component';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';

@NgModule({
	imports: [
		AppModule,
		ModuleMapLoaderModule,
		ServerModule,
	],
	bootstrap: [AppComponent],
})
export class AppServerModule { }
