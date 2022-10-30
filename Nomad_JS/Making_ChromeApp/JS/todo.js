const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');
const TODOS_KEY = 'toDos';

let toDos = [];

//toDos(array -> stringify -> string)를 localStorage에 집어넣는 함수
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement; //무얼 삭제해야 하는지 찾는 것. parentElement는 'li'
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
  const li = document.createElement('li'); //html에 li, span 태그 추가
  li.id = newTodo.id;
  const span = document.createElement('span');
  span.innerText = newTodo.text; //span에 텍스트 newTodo
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteTodo);
  //append는 맨 마지막에 놓기!!!!
  li.appendChild(span); //span'을' li에 넣기
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = '';
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); //toDos(array)를 newTodo에 push
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); //just as string

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos); //I can use array
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo); //forEach(): array의 item 당 한 개의 function (ex) item=5, function 각각 1번씩, 총 5번 실행)
}
