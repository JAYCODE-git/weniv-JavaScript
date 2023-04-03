
// 값이 누락됐을 때 나타나는 undefined
console.warn('1. undefined')
let a;
console.log(a);

if (typeof y === "undefined") {
  console.log('y는 undefined');
}

// '!' 를 붙여서 undefined 를 true로 변환해서 화면에 출력
if (!a) {
  console.log('y는 undefined');
}


// 값이 없음을 명시하는 null
console.warn('2. null')
let nullItem = null;
console.log(nullItem);  // null


let score = [10, 20, 30, null, 40, 50]
let average = 0;
// nullCount라는 변수를 선언하고 score.reduce() 메서드를 사용하여 초기화.
// score 배열을 반복하여 각 요소가 null인지 확인.
let nullCount = score.reduce((count, value) => {
  // 현재 값이 null이면 누산기(카운트)를 1씩 증가. 아니면 변경하지 않고 유지
  return value === null ? count + 1 : count;
  // reduce() 메서드의 두 번째 인수인 0은 누적기(카운트)를 0으로 초기화합니다.
}, 0);

console.log(nullCount);

for (const i of score) {
  console.log('score : ' + i);
  average += i
}

console.log('평균 : ' + average / (score.length - nullCount));

