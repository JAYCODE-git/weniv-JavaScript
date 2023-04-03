
// ? Nullish 연산자
// https://ko.javascript.info/nullish-coalescing-operator
// null인지 확인하는 연산자
// 추가된 지 얼마 안 된 문법. 구형 브라우저는 '폴리필(최신 문법 구식 브라우저 대응)' 필요.


// * 예제 1 
// null인 것들을 판단, null이면 넘어가고 다음 것을 출력
let a = null;
let b = 10;
let c = null;
console.log(a ?? b ?? c);  // = 10


// * 예제 2
let firstName = null;
let lastName = null;
let newUser = null
let nickName = '😈 Jay';

console.log(firstName ?? nickName); // 😈 Jay
console.log(firstName ?? lastName ?? newUser ?? '익명 사용자'); // 익명 사용자


// * 예제 3
// 단락회로 평가와 nullish 연산자 차이점
// falsy하다 : 0, null, undefined, "", NaN
// nullish하다 : null, undefined
// or은 0을 false로 인식, nullish는 0을 0으로 인식

let height = 0;
console.log(height || 100) // 100
console.log(height ?? 100) // 0

let height2;
console.log(height2 || 100) // 100
console.log(height2 ?? 100) // 100

let height3 = '';
console.log(height3 || 'hello')  // hello
console.log(height3 ?? 'world')  // '';
