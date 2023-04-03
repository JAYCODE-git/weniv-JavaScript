
// ? Boolean
// Boolean 타입은 true 또는 false 값 중 하나를 가지며, 주로 조건문(if)의 결과값으로 사용.


// case1
let x = 5;
let y = 10;

console.log(x > y); // false


// case2
let a = true;
let b = false;

console.log(a && b); // false


// case 3
// true, false가 아닌 값을 &&, || 연산을 했을 경우 단락회로평가를 하게 됩니다.
let c = 'hello';
let d = ' ';


console.log(c || d); // 'hello';
console.log(c && d); // ' ';

// case 4 // 논리연산자 True & false 반환예시 ⭐️⭐️⭐️⭐️
console.log(Boolean('hello'));    // true
console.log(Boolean(''));         // false
console.log(Boolean(1, 2, 3));    // true
console.log(Boolean({ 'one': 10, 'two': 20 })); // true
console.log(Boolean([]));         // true // 다른 언어는 다 false....
console.log(Boolean({}));         // true // 다른 언어는 다 false....
console.log(Boolean(-1));         // true // 0 외의 모든 숫자는 true
console.log(Boolean(undefined));  // false
console.log(Boolean(null));       // false
console.log(Boolean(NaN));        // false


if (undefined) {
  console.log('this is True!');
}