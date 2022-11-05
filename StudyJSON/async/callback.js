'use strict';

//자바스크립트는 동기적으로 실행됨.
//호이스팅이 된 이후부터 코드가 순서에 맞춰 동기적으로 실행됨.
//호이스팅: var, function이 자동적으로 제일 위로 올라가는 것
//콜백함수: 우리가 전달해준 함수를 나중에 불러줘

//Synchronous callback
console.log('1');
setTimeout(function () {
  console.log('2');
}, 1000);
console.log('3');

function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

//Asynchronous callback
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

//Callback Hell Example
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {});
  }
  getRoles(user, onSuccess, onError) {}
}
