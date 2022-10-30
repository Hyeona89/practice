// #3.2 Searching For Elements

const hellos = document.getElementsByClassName('hello');
const title = document.querySelector('.hello h1'); //css처럼 쓸 수 있음. 그러나 첫 번째 것만 가져옴
const titleAll = document.querySelectorAll('.hello h1'); //조건에 만족하는 모든 elements 가져옴(array)
console.log(hellos);
console.log(title);
console.log(titleAll);

// #3.3~5 Events

//!!event 검색방법!!
//step 1. h1 html element mdn 검색 ㄱㄱ
//step 2. Web APIs  포함되어 있는 페이지 ㄱㄱ 이게 JS관점임

title.style.color = 'blue';

function handleTitleClick() {
  console.log('Title was clicked!');
  title.style.color = 'Red';
}

function handleMouseEnter() {
  title.innerText = 'Mouse is here :)';
}

function handleMouseLeave() {
  title.innerText = 'Mouse is gone :(';
}

//click event가 발생하면 함수 실행
title.addEventListener('click', handleTitleClick);
title.addEventListener('mouseenter', handleMouseEnter);
title.addEventListener('mouseleave', handleMouseLeave);

//이것도 가능
// title.onclick = handleTitleClick;
// title.onmouseenter = handleMouseEnter;
// title.onmouseleave = handleMouseLeave;

function handleWindowResize() {
  document.body.style.backgroundColor = 'tomato';
}
function handleWindowCopy() {
  alert('copier!!');
}
function handleWindowOffline() {
  alert('SOS no WIFI');
}
function handleWindowOnline() {
  alert('ALL GOOD!');
}
window.addEventListener('resize', handleWindowResize);
window.addEventListener('copy', handleWindowCopy);
window.addEventListener('offline', handleWindowOffline);
window.addEventListener('online', handleWindowOnline);
