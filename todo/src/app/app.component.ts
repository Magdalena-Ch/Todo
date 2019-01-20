import { Component } from '@angular/core';

interface Todo {
  id: number;
  isDone: boolean;
  text: string;
}
@Component({
  selector: 'app-root',
  template: `
    <input
      placeholder="What needs to be done"
      [(ngModel)]="value"
      (keydown.enter)="add()"
    />
    <button (click)="add()" [disabled]="!value">ADD</button>

    <ul>
      <li *ngFor="let todo of todos">
        <span [class.isDone]="todo.isDone">{{ todo.text }}</span>
        <button (click)="remove(todo.id)">REMOVE</button>
        <button (click)="toggle(todo)">TOGGLE</button>
      </li>
    </ul>
  `,
  styles: [
    `
      .isDone {
        text-decoration: line-through;
      }
    `
  ]
})
export class AppComponent {
  id = 0;
  value = '';
  todos: Todo[] = [
    {
      id: this.id++,
      isDone: false,
      text: 'Learn Angular'
    }
  ];
  add() {
    if (!this.value) {
      return;
    }
    const nextTodo: Todo = {
      id: this.id++,
      isDone: false,
      text: this.value
    };

    this.todos.push(nextTodo);
    this.value = '';
  }

  remove(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggle(todo: Todo) {
    todo.isDone = !todo.isDone;
  }
}
