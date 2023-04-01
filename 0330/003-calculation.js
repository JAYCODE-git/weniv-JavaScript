console.warn('1. 산술연산');
// * 산술연산
const a = 10;
const b = 3;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a ** b); // 승수, 제곱
console.log(a % b);  // 몫을 뺀 나머지


console.warn('2. 논리연산');
// * 논리연산
const c = true;
const d = false;
const e = 10;

console.log(c && d); // and(곱) : 둘다 true = true
console.log(c || d); // or(합) : 하나만 true = true
console.log(!c);  // not(부정)
console.log(!!e); // true(부정의 부정)


console.warn('3. 비교연산');
// * 비교연산
const x = 3;
const y = 7;
console.log(x > y);
console.log(x >= y);
console.log(x < y);
console.log(x <= y);
console.log(x == y);  // 변수의 type을 확인하지 않음.
console.log(x === y); // [권장!] 변수의 type까지 검열.
console.log(x != y);  // = !(x == y)  // false
console.log(x !== y); // = !(x === y) //true


console.warn('문제 풀어보기');
/*
* 10미만의 자연수에서 3과 5의 배수를 구하면 3, 5, 6, 9이다.이들의 총합은 23이다.
* 1000미만의 자연수에서 3, 5의 배수의 총합을 구하라.
*/

let answer = 0;
for (let i = 0; i < 21; i++) {
  //3의 배수 or 5의 배수를 동시에 실행
  if (i % 3 === 0 || i % 5 === 0) {
    answer = answer + i
  }
};
console.log(answer);
