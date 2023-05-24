// a <-> b 값 스위칭 1 | 새로운 변수를 이용
let a = 'hello';
let b = 'lions';

let c = a;
a = b;
b = c;
console.log(a, b)

// a <-> b 값 스위칭 2 | 구조분해할당 이용
let a1 = 10;
let b1 = 20;
[a1, b1] = [b1, a1]
console.log(a1, b1)


// a <-> b 값 스위칭 3 | 연산자 이용
let a2 = 10;
let b2 = 20;

a2 = a2 + b2;
b2 = a2 - b2;
a2 = a2 - b2;
console.log(a2, b2)


// a <-> b 값 스위칭 4 | 배열 index 이용
let a3 = 10;
let b3 = 20;

a3 = [a, b]
b3 = a3[1]
a3 = a3[0]
console.log(a3, b3)