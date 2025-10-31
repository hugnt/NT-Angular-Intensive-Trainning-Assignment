import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Todo, TodoListResult } from '../models/todo.model';
import { HttpClient } from '@angular/common/http';

const TODO_KEY = "todos";

type Filters = 'all' | 'active' | 'completed';

export interface Stats {
  total: number;
  completed: number;
  active: number;
}

@Injectable({
  providedIn: 'root', // signgleton
})
export class TodoService {
  private readonly todos = signal<Todo[]>(this.load());
  readonly filter = signal<Filters>('all');
  // httpClient = inject(HttpClient);
  readonly filteredTodos = computed(() => {
    const f = this.filter();
    const items = this.todos();
    if (f === 'active') return items.filter((item) => !item.completed);
    if (f === 'completed') return items.filter((item) => item.completed);
    return items;
  });

  readonly stats = computed<Stats>(() => {
    const items = this.todos();
    const completed = items.filter((t) => t.completed).length;
    return { total: items.length, completed, active: items.length - completed };
  });

  constructor(private httpClient: HttpClient) {
    effect(() => {
      localStorage.setItem(TODO_KEY, JSON.stringify(this.todos()))
    })
    this.loadDataFromAPI();
  }

  addTodo(todo: string) {
    this.todos.update((items) => [
      { id: crypto.randomUUID(), todo, completed: false, createdAt: new Date() },
      ...items,
    ]);
  }

  removeTodo(id: string) {
    this.todos.update((items) => items.filter((item) => item.id !== id))
  }

  renameTodo(id: string, todo: string) {
    this.todos.update((items) =>
      items.map(item => item.id == id ? { ...item, todo } : item)
    );
  }

  toggleTodo(id: string) {
    this.todos.update((items) =>
      items.map(item => item.id == id ? { ...item, completed: !item.completed } : item)
    );
  }

  private load(): Todo[] {
    try {
      const raw = localStorage.getItem(TODO_KEY);
      return raw ? (JSON.parse(raw) as Todo[]) : [];
    } catch {
      return []
    }
  }

  private loadDataFromAPI() {
    try {
      this.httpClient
        .get<TodoListResult>('https://dummyjson.com/todos')
        .subscribe((result: TodoListResult) => {
          this.todos.set(result.todos);
        });
    } catch {
      this.todos.set(this.load());
    }
  }
}
