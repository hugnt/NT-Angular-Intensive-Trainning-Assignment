export interface Todo {
    id: string;
    todo: string;
    completed: boolean;
    createdAt: Date;
}

export interface TodoListResult {
    todos: Todo[];
    total: number;
    skip: number;
    limit: number
}