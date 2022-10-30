import { API_KEY } from './HYEONA_API_KEY.js';
function onGeoOk(position) {
  //위도와 경도
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  //fetch: calling url url에 갈 필요 없이 JS가 url을 부름
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector('#weather span:first-child');
      const weather = document.querySelector('#weather span:last-child');
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//getCurrentPosition는 두 개의 arguments 필요. 실행이 되었을 때, 오류가 발생했을 때
