import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatTabsModule, MatProgressSpinnerModule } from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatProgressSpinnerModule
	],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatProgressSpinnerModule
	]
})
export class MaterialModule { }
