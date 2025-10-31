import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../../services/todo';
import { TaskStats } from '../task-stats/task-stats';
import { HttpClient } from '@angular/common/http';
import { Todo, TodoListResult } from '../../models/todo.model';

@Component({
  selector: 'app-task-list',
  imports: [TaskStats],
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList {
  protected readonly todoService = inject(TodoService);

  todos = this.todoService.filteredTodos;
  // todos = signal<Todo[]>([])
  // filter = this.todoService.filter;
  constructor(private httpClient: HttpClient) {

  }
  // ngOnInit(): void {
  //   this.httpClient.get<TodoListResult>('https://dummyjson.com/todos').subscribe((result: TodoListResult) => {
  //     this.todos.set(result.todos);
  //   });
  // }
  renameTodo(id: string, todo: string) {
    this.todoService.renameTodo(id, todo);
  }

  removeTodo(id: string) {
    this.todoService.removeTodo(id);
  }

  toggleTodo(id: string) {
    this.todoService.toggleTodo(id);
  }
}
