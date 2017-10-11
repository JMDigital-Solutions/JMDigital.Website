import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatTabsModule } from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
	],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
	]
})
export class MaterialModule { }
