/**
 * @typedef TodoItem
 * @type {object}
 * @property {string} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} done - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그
 */

/**
 * @param {string} id - 아이디
 * @param {string} content - 내용
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그
 * @returns {boolean} - 생성 결과
 */
function createTodo(id, content, category, tags) {}

/**
 * @description start부터 limit개 만큼 Todo 배열을 반환하는 함수
 * @param {number} [offset=0] - 시작 인덱스(default 0)
 * @param {number} [limit=10] - 받아올 개수(default 10)
 * @returns {TodoItem[]} Todo 배열
 */
function getTodos(offset = 0, limit = 10) {}

/**
 * @description 입력된 id에 해당하는 Todo를 반환하는 함수
 * @param {string} id - Todo id
 * @returns {TodoItem} - Todo
 */
function getTodoById(id) {}

/**
 * @description Todo를 받아 업데이트하는 함수
 * @param {TodoItem} todo - 업데이트 할 Todo
 * @returns {boolean} - 업데이트 결과
 */
function updateTodo(todo) {}

/**
 * @description 입력된 id에 해당하는 Todo의 
 * @param {string} id - Todo id
 * @param {string[]} tags - 업데이트할 tags
 * @returns {boolean} - 업데이트 결과
 */
function updateTagsById(id) {}

/**
 * @description 입력된 id에 해당하는 Todo를 삭제하는 함수
 * @param {string} id - 삭제할 Todo의 id
 * @returns {boolean} - 삭제 결과
 */
function deleteTodoById(id) {}

/**
 * @description 모든 할일 삭제
 * @returns {boolean} - 삭제 결좌
 */
function deleteTodos() {}

/**
 * @description 특정 할일의 특정 태그를 삭제하는 함수
 * @param {string} id - Todo id
 * @param {string} tag - tag
 * @return {boolean} - 삭제 결과
 */
function deleteTag(id, tag) {}

/**
 * @description 특정 할일의 모든 태그를 삭제하는 함수
 * @param {string} id - Todo id
 * @returns {boolean} - 삭제 결과 
 */
function deleteTags(id) {}