import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatTabsModule } from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule
	],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule
	]
})
export class MaterialModule { }
