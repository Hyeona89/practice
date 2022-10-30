// #2.5 array []

//변수 설정
const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

//불러오기 (0부터 시작)
console.log(daysOfWeek[1]);

//추가하기 push
daysOfWeek.push('weekend');
console.log(daysOfWeek);

// #2.6 Objects {}

//const playerName = "현아";
//const playerPoints = 100;
//const playerPretty = true; (^^)
//막 이런식으로 하면 별로잖아.
//const player = ["현아", 100, true]; 얘도 각각 요소들이 뭘 의미하는지 몰라서 별로임.

const player = {
  name: '현아',
  point: 100,
  fat: false,
};
console.log(player);

console.log(player.name); //현아
console.log(player['name']); //현아

//수정하기
//Object 안의 무언가를 수정하는 것!! consts 에러는 object (player=~~)를 바꿀 때 발생
console.log(player.point); //100
player.point = 50;
console.log(player.point); //50
player.point = player.point + 15;
console.log(player.point); //65

//추가하기
player.lastName = '김';
console.log(player);

// #2.7~8 Funtions(argument)
function sayHello(name, age) {
  console.log('Welcome, ' + name + '.' + ' You are ' + age + ' years old.');
}

sayHello('', 34);
sayHello('hyeona', 22);
sayHello('nico', 40);

//계산기
function plus(a, b) {
  console.log(a + b);
}

plus(121431341, 12392);
plus('문자도', '되네');

function calc(a, b) {
  console.log('Plus = ' + a + b);
  console.log('Divide = ' + a / b);
  console.log('Time = ' + a * b);
  console.log('Minus = ' + a - b); //!!!!!질문!!!!!!왜 NaN?ㅠㅠㅠ
}
calc(3810, 99);

//object(player_)안에 funtion(sayHello) -> player_.sayHello()
const player_ = {
  sayHello: function (otherPersonsName) {
    console.log('hello! ' + otherPersonsName + ' nice to meet you.');
  },
};

player_.sayHello('Lynn');
player_.sayHello('Nico');

//challenge (making calculator)
const calculator = {
  plus: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  time: function (a, b) {
    console.log(a * b);
  },
  divide: function (a, b) {
    console.log(a / b);
  },
  power: function (a, b) {
    console.log(a ** b);
  },
};
calculator.plus(14, 129);
calculator.divide(9, 3);
calculator.time(100, 3);
calculator.minus(13041, 1030);
calculator.power(3, 4);

// #2.11 Return (function에 console.log은 이제 그만)
function calculateKrAge(ageOfForeigner) {
  return ageOfForeigner + 2;
}

console.log(calculateKrAge(20));

krAge = calculateKrAge(20);
console.log(krAge);

//계산기(return)
const calculatorReturn = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  time: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

const plusResult = calculatorReturn.plus(2, 6);
const minusResult = calculatorReturn.minus(plusResult, 93);
const timeResult = calculatorReturn.time(minusResult, plusResult);
console.log(plusResult);
console.log(minusResult);
console.log(timeResult);

// #2.13~15 Conditionals
// const age_ = prompt('How old are you?'); //promt는 css 적용 못 시켜서 안 예쁨
// console.log(age_);
// console.log(typeof age_); //promt는 string

//string -> number
// console.log(age_, parseInt(age_)); //15 15
// console.log(typeof age_, typeof parseInt(age_)); //string number

const age_ = parseInt(prompt('How old are you?')); //promt의 string을 Number로
console.log(age_);
console.log(isNaN(age_));

if (isNaN(age_) || age_ <= 0) {
  console.log('Please write a real positive number.');
} else if (age_ < 18) {
  console.log('You are too young.');
} else if (age_ >= 18 && age_ <= 50) {
  console.log('You can drink.');
} else {
  console.log("You can't drink.");
}
