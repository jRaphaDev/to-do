import { ToDoFormComponent } from './../to-do-form/to-do-form.component';
import { ToDo } from './../../models/to-do';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../services/to-do.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  providers: [ ToDoService ]
})
export class ToDoListComponent implements OnInit {

  public listToDo: Observable<ToDo[]>;
  public name: string;

  constructor(
    public dialog: MatDialog,
    private toDoService: ToDoService
  ) {}

  ngOnInit() {
    this.listToDo = this.toDoService.getToDo();
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(ToDoFormComponent, {
      width: '250px',
      data: { name: this.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, 'result');
    });
  }
}
