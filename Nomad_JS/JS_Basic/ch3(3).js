const h1 = document.querySelector('div.hello:first-child h1');

function handleTitleClick() {
  const clickedClass = 'clicked';
  /*
    if (h1.classList.contains(clickedClass)) {
      h1.classList.remove(clickedClass);
    } else {
      h1.classList.add(clickedClass);
    }
  */
  h1.classList.toggle(clickedClass);
}

//toggle: classList에 className이 contains되어 있다면 remove하고, contains되지 않았다면 add하고!
h1.addEventListener('click', handleTitleClick);
