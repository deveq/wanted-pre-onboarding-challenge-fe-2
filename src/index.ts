// interface TodoItem {
//     id: string;
//     content: string;
//     done: boolean;
//     category: string;
//     tags?: string[];
// }

// /**
//  * @description todo를 생성하는 함수
//  * @param {Omit<TodoItem, 'done'| 'id'>} data - todo를 생성하기 위한 데이터
//  * @returns {boolean} 생성 결과
//  */
// function createTodo(data: Omit<TodoItem, 'done' | 'id'>): boolean {
//     return false;
// }

// /**
//  * @description start부터 limit개 만큼 Todo 배열을 반환하는 함수
//  * @param offset - 시작 인덱스
//  * @param limit - 받아올 개수
//  * @returns {TodoItem[]} Todo 배열
//  */
// function getTodos(offset: number, limit: number = 10): TodoItem[] {
//     return [];
// }

// /**
//  * @description 입력된 id에 해당하는 Todo를 반환하는 함수
//  * @param {string} id - Todo id
//  * @returns {TodoItem} - Todo
//  */
// function getTodoById(id: string): TodoItem {
//     return {} as TodoItem;
// }

// /**
//  * @description Todo를 받아 업데이트하는 함수
//  * @param {TodoItem} todo - 업데이트 할 Todo
//  * @returns {boolean} - 업데이트 결과
//  */
// function updateTodo(todo: TodoItem): boolean {
//     return false;
// }

// /**
//  * @description 입력된 id에 해당하는 Todo의 tag를 업데이트 하는 함수
//  * @param {string} id - Todo id
//  * @param {string[]} tags - 업데이트할 tags
//  * @returns {boolean} - 업데이트 결과
//  */
// function updateTagsById(id: string, tags: string[]): boolean {
//     return false;
// }

// /**
//  * @description 입력된 id에 해당하는 Todo를 삭제하는 함수
//  * @param {string} id - 삭제할 Todo의 id
//  * @returns {boolean} - 삭제 결과
//  */
// function deleteTodoById(id: string): boolean {
//     return false;
// }

// /**
//  * @description 모든 할일 삭제
//  * @returns {boolean} - 삭제 결좌
//  */
// function deleteTodos(): boolean {
//     return false;
// }

// /**
//  * @description 특정 할일의 특정 태그를 삭제하는 함수
//  * @param {string} id - Todo id
//  * @param {string} tag - tag
//  * @return {boolean} - 삭제 결과
//  */
// function deleteTag(id: string, tag: string): boolean {
//     return false;
// }

// /**
//  * @description 특정 할일의 모든 태그를 삭제하는 함수
//  * @param {string} id - Todo id
//  * @returns {boolean} - 삭제 결과 
//  */
// function deleteTags(id: string): boolean {
//     return false;
// }