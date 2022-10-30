const clock = document.querySelector('#clock');

//interval 매번 일어나야 함

function getClock() {
  const date = new Date();
  //padStart는 String에 해야 함
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //새로고침하자마자 시계 시작
setInterval(getClock, 1000);

//5초마다
//setInterval(sayHello, 5000);

//5초 뒤에 한 번
//setTimeout(sayHello, 5000);
