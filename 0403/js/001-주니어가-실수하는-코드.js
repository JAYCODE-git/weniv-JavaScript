// 1. 두 개의 <script> 파일에서 변수가 호환되면 안된다.
// var을 사용하면 호환되어버린다.
// 재정의를 허락하지 않는 let과 const를 사용해야 에러가 떠서 오류를 잡을 수 있다.
var x = 10;
let y = 20;

console.log(x = x + 10);
console.log(y = y + 10);