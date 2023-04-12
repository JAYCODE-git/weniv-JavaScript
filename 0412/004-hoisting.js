
// ?  hoisting
console.warn('hoisting');

// * 함수의 호이스팅과 TDD(일시적 사각지대)
// 참고자료 : https://hanamon.kr/javascript-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85%EC%9D%B4%EB%9E%80-hoisting/
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 확보해 놓는 것
// JS의 모든 선언은 호이스팅(선언이 먼저 메모리에 저장)이 일어납니다.
// 그러나 let, const, class 이용한 선언문은 호이스팅이 되었지만 안된 것처럼 동작
// 이러한 현상은 일시적 사각지대(Temporal Dead Zone)에 빠지기 때문
// 중요한 포인트는 그렇다하여 호이스팅이 안된 것은 아니라는 것!
// 오류가 나는 이유는 var 키워드는 선언과 함께 undefined로 초기화
// let과 const는 초기화 되지 않는 상태로 선언만 메모리 저장

let foo = 1;
{
    // TDZ 일시적 사각지대에 빠진 case
    // console.log('foo:', foo); // Error! foo가 2로 초기화 되기 전에 접근하려고 함.
    let foo = 2;
}

let a = 10
if (true) {
    let a = 20
    if (true) {
        let a = 30
        console.log(a);
    }
}

// * 함수의 호이스팅 결과
console.log(add1(10, 20));
function add1(x, y) {
    return x + y;
} // ⭕️ 30

console.log(add2(10, 20));
function add2(x, y) {
    return x + y;
} // ⭕️ 30

console.log(mul1(10, 20));
console.log(mul1);
var mul1 = function (a, b) {
    return a * b;
}; // 🚫 caught TypeError: mul1 is not a function


console.log(mul2(10, 20));
let mul2 = function (a, b) {
    return a * b;
}; // 🚫 caught TypeError: mul2 is not a function

console.log(test);
console.log(test2);
console.log(mul3) // 🚫 caught ReferenceError: mul3 is not defined
let test = 100;   // 🚫 caught ReferenceError: test is not defined
var test2 = 100;  // undefined


