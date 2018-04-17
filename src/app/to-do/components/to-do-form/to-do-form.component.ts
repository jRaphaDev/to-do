import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-to-do-form',
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.css']
})
export class ToDoFormComponent implements OnInit {

  public dialogRef: MatDialogRef<ToDoFormComponent>;

  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  cancel(): void {
    // this.dialogRef.close();
  }

}
