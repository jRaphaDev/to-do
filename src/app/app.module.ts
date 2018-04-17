import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do/components/to-do-list/to-do-list.component';
import { ToDoFormComponent } from './to-do/components/to-do-form/to-do-form.component';

import { NgModule, forwardRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule, MatDialog, MatDialogRef } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatListModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [ ],
  exports: [
    MatDialogModule
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
