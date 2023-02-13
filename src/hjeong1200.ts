// Todo 목록
const todos: Todo[] = [];
let id = 1;

// CREATE
const createTodo: CreateTodo = (content, category, isDone = false, tags) => {
  const todo: Todo = {
    content,
    category,
    isDone,
    tags,
    id: id++,
  };

  todos.push(todo);
  return todo;
};

// READ
const getTodo: GetTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);
  return todo;
};

const getAllTodos: GetAllTodos = () => {
  return todos;
};

// UPDATE
const updateTodo: UpdateTodo = (id, body) => {
  const targetIndex = todos.findIndex((todo) => todo.id === id);

  if (targetIndex === -1) {
    return false;
  }

  todos[targetIndex] = body;
  return true;
};

const updateTag: UpdateTag = (id, tagIndex, tag) => {
  const todo = getTodo(id);

  // 가독성을 위해 4가지로 나눔
//   if (
//     !todo ||
//     !todo.tags ||
//     todo.tags.length === 0 ||
//     todo.tags.length < tagIndex
//   )
//     return undefined;

  // 1. todo가 없을 때
  if (!todo) return undefined;
  // 2. tags가 없을때,
  if (!todo.tags) return undefined;
  // 3. tags의 length가 0일때
  if (todo.tags.length === 0) return undefined;
  // 4. tags.length가 targetIndex보다 작을 때
  if (todo.tags.length < tagIndex) return undefined;

  todo.tags[tagIndex] = tag;

  updateTodo(todo.id, todo);
  return todo;
};

// DELETE
const deleteTodo: DeleteTodo = (id) => {
    // todos.filter(todo => todo.id !== id);
    const targetIndex = todos.findIndex(todo => todo.id === id);
    if (targetIndex === -1) return undefined;
    
    todos.splice(targetIndex, 1);
    return todos;
};

const deleteAllTodos: DeleteAllTodos = () => {
    todos.splice(0, todos.length);
};

const deleteTag: DeleteTag = (id, tagIndex) => {
    const todo = getTodo(id);
    if (!todo) return undefined;
    if (!todo.tags) return undefined;
    if (todo.tags.length === 0) return undefined;
    if (todo.tags.length < tagIndex) return undefined;

    todo.tags.splice(tagIndex, 1);
    return todo;
};

const deleteAllTags: DeleteAllTags = (id) => {
    const todo = getTodo(id);
    if (!todo) return undefined;
    todo.tags = undefined;
};
