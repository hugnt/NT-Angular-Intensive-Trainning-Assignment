import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-create-task',
  imports: [FormsModule],
  templateUrl: './create-task.html',
  styleUrl: './create-task.scss',
})
export class CreateTask {
  protected readonly todoService = inject(TodoService);

  todo = '';
  addTodo(todo: string) {
    this.todoService.addTodo(todo);
    this.todo = '';
  }

}
