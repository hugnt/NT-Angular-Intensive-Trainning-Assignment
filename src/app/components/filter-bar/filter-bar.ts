import { Component, inject } from '@angular/core';
import { TodoService } from '../../services/todo';

@Component({
  selector: 'app-filter-bar',
  imports: [],
  templateUrl: './filter-bar.html',
  styleUrl: './filter-bar.scss',
})
export class FilterBar {
  protected readonly todoService = inject(TodoService);
  filter = this.todoService.filter;
}
