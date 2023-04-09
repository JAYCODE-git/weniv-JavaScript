
// switch 기본 형태
const value = 'two'
const value2 = 'four'
switch (value2) {
  case 'one':
    console.log('Hello one');
    break;
  case 'two':
    console.log('Hello two');
    break;
  case 'three':
    console.log('Hello three');
  //맨 하단에 default 는 견고한 코드를 위해 써주는 것이 좋다.
  default:
    console.log('hello default');
    break;
}


// Data()
// 위치정보 받아오기, 접속시간 보기 등등 다양하게 활용 가능
switch (new Date().getDay()) {
  case 0:
    console.log('일요일')
    break;
  case 1:
    console.log('월요일')
    break;
  case 2:
    console.log('화요일')
    break;
  case 3:
    console.log('수요일')
    break;
  case 4:
    console.log('목요일')
    break;
  case 5:
    console.log('금요일')
    break;
  case 6:
    console.log('토요일')
    break;
}

//nullish 연산자 사용
const day2 = 10;
const days = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
}


//nullish 연산자 사용
console.log(days[day2] ?? 'hello');

//단락평가 사용
console.log(days[day2] || 'hello');
