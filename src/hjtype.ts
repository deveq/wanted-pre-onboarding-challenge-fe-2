
interface Todo {
    id: number;
    content: string;
    isDone: boolean;
    category: string;
    tags?: string[];
  }
  
  interface UpdatedTodo {
    id: number;
    content?: string;
    isDone?: boolean;
    category?: string;
    tags?: string[];
  }
  
  // CREATE
  
  interface CreateTodo {
    (
      content: string,
      category: string,
      isDone?: boolean,
      tags?: string[]
    ): Todo;
  }
  // READ
  
  interface GetTodo {
    (id: number): Todo | undefined;
  }
  
  interface GetAllTodos {
    (): Todo[];
  }
  
  // UPDATE
  
  interface UpdateTodo {
    (id: number, body: Todo): boolean;
  }
  
  interface UpdateTag {
    (id: number, tagIndex: number, tag: string): Todo | undefined;
  }
  
  // DELETE
  
  interface DeleteTodo {
    (id: number): Todo[] | undefined;
  }
  
  interface DeleteAllTodos {
    (): void;
  }
  
  interface DeleteTag {
    (id: number, tagIndex: number): Todo | undefined;
  }
  
  interface DeleteAllTags {
    (id: number): Todo | undefined;
  }
  