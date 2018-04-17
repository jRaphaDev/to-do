import { ToDo } from './../models/to-do';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class ToDoService {

  private listToDo: ToDo[] = [
    { id: 1, name: 'Item I', date: new Date(), executed: false },
    { id: 1, name: 'Item II', date: new Date(), executed: true },
    { id: 1, name: 'Item III', date: new Date(), executed: true }
  ];

  constructor() { }

  public getToDo(): Observable<ToDo[]> {

    return Observable.of(this.listToDo);
  }

}
