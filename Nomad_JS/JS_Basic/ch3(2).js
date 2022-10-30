// #3.6 CSS in JS

const title = document.querySelector('.hello h1'); //css처럼 쓸 수 있음. 그러나 첫 번째 것만 가져옴

/*
//간단하지 않은 버전
function handleTitleClick() {
  if (title.style.color === 'blue') {
    title.style.color = 'tomato';
  } else {
    title.style.color = 'blue';
  }
}
*/

//간단한 버전
function handleTitleClick() {
  const currentColor = title.style.color;
  let newColor;
  if (currentColor === 'blue') {
    newColor = 'tomato';
  } else {
    newColor = 'blue';
  }
  title.style.color = newColor;
}

/*//이건 내가 해본 건데 왜 애초에 let currentColor로 두면 되지 또 다른 변수인 newColor를 따로 두는지 의문..
    그런데 댓글 왈, '원래 어떤 색인지', '새로 적용할 색이 어떤 색인지' 구분할 필요가 있어서 의미상 따로 둔 것이었음.
    아무튼 결론은 style은 css로 하자~!
function handleTitleClick() {
  let currentColor = title.style.color;
  if (currentColor === 'blue') {
    currentColor = 'tomato';
  } else {
    currentColor = 'blue';
  }
  title.style.color = currentColor;
}
*/
title.addEventListener('click', handleTitleClick);
