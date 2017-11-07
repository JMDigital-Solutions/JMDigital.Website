import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule,
	MatTabsModule, MatProgressSpinnerModule, MatTooltipModule } from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatProgressSpinnerModule,
		MatTooltipModule
	],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatProgressSpinnerModule,
		MatTooltipModule
	]
})
export class MaterialModule { }
