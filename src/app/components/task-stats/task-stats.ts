import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-task-stats',
  imports: [],
  templateUrl: './task-stats.html',
  styleUrl: './task-stats.scss',
})
export class TaskStats {
  protected readonly todoService = inject(TodoService);
  stats = this.todoService.stats;
}
