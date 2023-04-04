console.warn('1. 함수 기본 형태');
// ? 기본 함수 선언식
function one(a, b) {
  let z = a + b;
  return z ** 2;
}
console.log('one:', one(10, 10)); // (10+10) ** 2 = 400



// ? 화살표 함수 표현식
const two = (a, b) => (a + b) ** 2
console.log('two:', two(10, 10));


// ? 익명 함수
const three = function(a, b) {
  let z = a + b;
  return z ** 2;
}
console.log('three:', three(10, 10));


// ? 콜백함수
function four(a, b, c) {
  let z = c(a, b) + c(a, b);
  return z * 2;
}
console.log('four:', four(7, 3, one)) // parameter 함수c에 arguments 함수를 넣어서 콜백!


// ? 함수의 return, console.log
// return 값이 없으면 undefined.
// .을 찍어 접근할 수 있는 function이라면 Method
// Function을 호출할 수 있는 이름은 결국 변수인 것
function hello(para) {
  console.log(para);
  console.log('hello');
  return '---------'
}
console.log(hello(10)); // 10, hello, ---------


// ! 같은 코드 테스트 놓침...ㅠㅠ
// let x = console.log
// x('hello');

// //1
// function hello1() {
//   console.log('hello1');
// }

// //2
// function hello2() {
//   console.log('hello2');
//   return
// }

// function hello3() {
//   console.log('hello3');
//   return undefined
// }

// hello4()

// function hello5() {
//   if (true) {
//     if (true) {
//       if (true) {
//         return
//       }
//     }
//   }
//   console.log('hi');
// }

// return으로 반환하더라도 1회 반환만 이루어 지는 것. 전체 순회가 종료되는 것은 아님.
const x = [10, 20, 30, 40];
x.forEach(el => {
  console.log(el);
  return console.log('world');
})



function func1(a, b, c) {
  return a + b + c
}
func1(10, 20, 30, 40) // 60 //parameter 입력 개수를 초과해도 error가 발생하지 않음
func1(10, 20)        // NaN // parameter 입력 개수 미만이어도 error가 발생하지 않음


function func2(a = 10, b = 20, c = 30) {
  return a + b + c
}
func2(1, c = 1) // 32 // c에 들어가는 게 아니라 순차적으로 b에 들어가고 c는 생략


// 아래와 같은 식별 이슈가 있을 경우 Object로 전달.(roro 기법)

function runPython({ user, time, code, lv }) {
  return
}
runPython({
  user: 'leehojun',
  time: 100,
  code: 'function()',
  lv: 10
});

// ! 초기설정..에러뜸ㅠㅠ다시하자
// function runPython({
//   user = '',
//   time = 0,
//   code = '',
//   lv = 0 });


console.warn('2. 화살표 함수의 다양한 예제 ⭐️⭐️⭐️⭐️');
function 함수1(x, y) {
  return x + y
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = x => {
  return x + 10
}

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 생략 가능.
let 함수3 = x => x + 10

// 결과 출력
let 결과 = 함수3(2);
console.log(결과);
