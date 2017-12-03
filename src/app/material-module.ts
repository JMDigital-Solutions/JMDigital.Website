import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule,
	MatTabsModule, MatProgressSpinnerModule, MatTooltipModule, MatDialogModule } from '@angular/material';

@NgModule({
	imports: [
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatProgressSpinnerModule,
		MatTooltipModule,
		MatDialogModule
	],
	exports: [
		MatButtonModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatTabsModule,
		MatProgressSpinnerModule,
		MatTooltipModule,
		MatDialogModule
	]
})
export class MaterialModule { }
