## 챌린지 과제 가이드

>요구 사항을 구현하지 않고 설계만합니다.

- Todo 앱을 JSDoc으로 문서화하는 챌린지 과제입니다.
- 모든 요구사항은 JSDoc을 기반으로 수행합니다.
- 제출할 저장소 명은 wanted-pre-onboarding-challenge-fe-2로 생성해 주세요. (Public 권한 필요)
- 완성한 과제의 저장소 링크를 모집 마감 후 설문 조사를 통해 제출해주세요. (개강 시 설문 조사 링크 전달 예정)
- 과제 수행 개수에 따라 기본적인 평가가 이루어지며, 커리큘럼 운영 과정에서 최소한의 수준을 파악하기 위한 용도입니다.
- 해당 과제에 대한 해설은 개강 후 진행될 예정입니다.
- README.md를 꼭 작성해 주세요. 본인에 대한 소개나 프로젝트 소개 등 자유롭게 작성해주시면 됩니다.
- JSDoc 환경 구성에 어색한 경우 [Boilerplate](https://github.com/pocojang/jsdoc-boilerplate)를 이용하셔도 됩니다


<details>
<summary>
<h2>3주차 과제</h2>
</summary>
참조: <a href="https://github.com/HJeong1200/wanted-pre-onboarding-challenge-fe-2">hjeong1200님의 과제</a>

진행하며 수정한 사항
1. CreateTodo 
Todo의 타입에는 tags가 optional이지만, CreateTodo는 content,isDone,category가 isDone이었고
  만약 이 타입대로 진행한다면 내용이 없는 Todo를 만들어야하므로 CreateTodo interface의 optional부분을 삭제함
2. GetTodo
입력된 id와 일치는 Todo가 없을 경우 undefined를 반환하도록 GetTodo의 리턴 타입을 Todo와 undefined의 유니온으로 변경
3. UpdateTodo
위와 동일, 그리고 UpdatedTodo와 Todo는 동일한 타입이나, Todo를 저장하는 todos가 Todo[] 타입으로 되어있어 타입이 맞지 않으므로
body로 받는 UpdatedTodo 타입을 Todo로 변경하였고, 이미 body로 넣어주는 Todo와 동일한 값을 반환해줄 필요가 없으므로
Update의 결과가 성공인지 실패인지를 구분하기 위해 boolean을 반환하도록 수정
4. UpdateTag
id일치 todo없을때, tags가 없을때, length가 0일때, tagIndex가 length보다 높을때의 타입세이프를 넣고, 수정이 정상적으로 되었을때 Todo를 반환하도록 수정
5. DeleteTodo, DeleteTag
위와 동일
</details>

<!-- <details>
<summary> -->
<h2>🧑‍💻 소개</h2>
<!-- </summary> -->
<!-- 프로젝트 소개를 추가한 후 주석 풀기 -->
너무 좋은 챌린지에 참여하여 쉽게 접하기 어려운 주제를 배우고 사용할 수 있게되어 굉장히 기쁩니다.  
이번 챌린지 기간동안 열심히 참여하여 역량을 키울 수 있도록 노력하겠습니다.
<!-- </details> -->
<details>
<summary>
<h2>📝 Requirements</h2>
</summary>

### 필수 요구사항
>아래의 Todo 앱 요구사항을 참고하여

- [x] 필요한 데이터를 모두 모델링한다.
- [x] 사용되는 모든 함수를 `선언부만` 만든다.
  - [x] 함수 및 클래스의 내부는 구현하지 않습니다.
- [ ] `JSDoc`을 활용해 문서화한다.
- [ ] `GitHub Page`를 활용해 `JSDoc` 정적 페이지를 배포한다.

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

#### CREATE

- [x] 할 일을 추가할 수 있다. - createTodo
- [x] 내용없이 추가할 수 없다.

#### READ

- [x] 모든 할 일을 조회할 수 있다. - getTodos
- [x] ID를 기반으로 특정 할 일을 조회할 수 있다. - getTodoById

#### UPDATE

- [x] ID를 제외한 모든 속성을 수정할 수 있다. - updateTodo
- [x] 특정 할 일의 특정 태그를 수정할 수 있다. - updateTagsById

#### DELETE

- [x] ID를 기반으로 특정 할 일을 삭제할 수 있다. - deleteTodoById
- [x] 모든 할 일을 제거할 수 있다. - deleteTodos
- [x] 특정 할 일의 특정 태그를 삭제할 수 있다. - deleteTag
- [x] 특정 할 일의 모든 태그를 제거할 수 있다. - deleteTags


#### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```

#### Reference

- [use JSDoc](https://jsdoc.app)
- [JSDoc Boilerplate](https://github.com/pocojang/jsdoc-boilerplate)
</details>


