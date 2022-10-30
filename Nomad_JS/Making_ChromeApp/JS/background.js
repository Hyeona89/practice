const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

const ChosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');

bgImage.src = `img/${ChosenImage}`; //!!!!!!!!!질문!!!!!!!.src 이게 왜 있어야 되는지 모르겠음

//html에 추가
document.body.appendChild(bgImage);
