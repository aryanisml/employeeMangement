import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent implements OnInit {
  employee = { name: '', age: '', address: '', email: '', employeeId: '' , id:'', mobileNo : ''};
  constructor(private dialogRef : MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) {
      this.employee = this.data;
    }

  ngOnInit(): void {}

  onSumbit() {
    this.dialogRef.close({type:'okay', data: this.employee});
  }
  onCancel(event: any) {
    this.dialogRef.close({type:'cancel'});
  }
}
