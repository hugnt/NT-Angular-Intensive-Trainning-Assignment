import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreateTask } from './components/create-task/create-task';
import { FilterBar } from './components/filter-bar/filter-bar';
import { Header } from './components/header/header';
import { TaskList } from './components/task-list/task-list';

@Component({
  selector: 'app-root',
  imports: [FormsModule, Header, CreateTask, FilterBar, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('basic-todos-app');
}
