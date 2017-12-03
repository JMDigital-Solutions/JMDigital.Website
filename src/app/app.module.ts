import { MaterialConfirmDialogComponent } from './helpers/material-confirm-dialog/material-confirm-dialog.component';
import { MaterialModule } from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { CanDeactivateGuardService } from './services/can-deactivate-guard.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		ContactComponent,
		FooterComponent,
		AboutComponent,
		MaterialConfirmDialogComponent
	],
	imports: [
		BrowserModule.withServerTransition({appId: 'jmdigital-website'}),
		AppRoutingModule,
		FormsModule,
		BrowserAnimationsModule,
		MaterialModule,
		HttpClientModule
	],
	providers: [CanDeactivateGuardService],
	bootstrap: [AppComponent]
})
export class AppModule { }
