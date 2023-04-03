
// ? 드모르간의 법칙
// 무조건 true나 false가 되는 구간을 발견할 수 있다.
// 또는 조건을 단순화 할 수 있다.

const x = 0;
const y = 1;
console.log(!(x || y) === !x && !y); // false
console.log(!(x && y) === !x || !y); // true



// 어? 이 코드가 무조건 false가 되네? => 코드 삭제.
if (!x && !y) {
  console.log('hello');
}

// 어? 이 코드가 무조건 true가 되네? => if문 제거 가능.
if (!x || !y) {
  console.log('hello');
}
console.log('hello');