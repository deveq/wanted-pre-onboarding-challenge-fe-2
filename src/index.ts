interface TodoItem {
    id: string;
    content: string;
    done: boolean;
    category: string;
    tags?: string[];
}

function createTodo(data: Omit<TodoItem, 'done'>): boolean {
    return false;
}

function getTodos(offset: number, limit: number = 10) {
    return [];
}

function getTodoById(id: string): TodoItem {
    return {} as TodoItem;
}

function updateTodo(todo: TodoItem): boolean {
    return false;
}

function updateTagsById(id: string, tags: string[]): boolean {
    return false;
}

function deleteTodoById(id: string): boolean {
    return false;
}

function deleteTodos(): boolean {
    return false;
}

function deleteTag(id: string, tag: string): boolean {
    return false;
}

function deleteTags(id: string): boolean {
    return false;
}