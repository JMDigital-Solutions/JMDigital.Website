import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogDataModel } from '../../models/DialogDataModel';

@Component({
	moduleId: module.id,
	selector: 'app-dialog',
	templateUrl: 'dialog.component.html',
	styleUrls: ['dialog.component.scss']
})
export class DialogComponent implements OnInit {

	constructor(public dialogRef: MatDialogRef<DialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: DialogDataModel) { }

	ngOnInit() {
	}

}
