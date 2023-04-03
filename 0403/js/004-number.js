// Number가 아닌 parseInt()를 권장
// 텍스트가 숫자로 시작하지 않을 때 NaN
// 텍스트가 숫자로 시작할 때 숫자까지만 변환 가능.

console.warn('boolean');
console.log(Number(true))
console.log(Number(false))
console.log(parseInt(true))  // NaN
console.log(parseInt(false)) // NaN



console.warn('숫자');
console.log(Number(" "))        // 0 **
console.log(Number(""))         // 0 **
console.log(Number("10 20"))    // NaN
console.log(Number("10abc"))    // NaN

console.log(parseInt(" "))      // NaN
console.log(parseInt(""))       // NaN
console.log(parseInt("hello"))  // NaN
console.log(parseInt("10 20"))  // 10
console.log(parseInt("10abc"))  // 10 parseInt에서 동작. ⭐️
console.log(parseFloat("10.123"))



console.warn('공백')
//공백이 있어도 형변환 하는데는 문제가 없다.
console.log(Number("  10"))     // 10
console.log(parseInt("   10"))  // 10


console.warn('Infinity')
// 기억 안 해도 됨.
console.log(Infinity)
console.log(Infinity > 100)  // true
console.log(Infinity < 100)  // false


console.warn('Math ⭐️⭐️⭐️⭐️')
// 계산식 암기 필요
console.log(Math.abs(-100))    // 음수를 양수로 반환
console.log(Math.ceil())      // 올림
console.log(Math.floor(10.3)) // 내림
console.log(Math.round(10.5)) // 반올림
console.log(Math.round(10.4)) // 반올림
console.log(Math.sqrt(100))   // square root, 루트
console.log(Math.PI)          // 3.141592653589793



console.warn('Math : Random()')
console.log(Math.random())    // 랜덤 생성
console.log(parseInt(Math.random() * 10 + 1))  // 1부터 랜덤 숫자를 정수로 표시



console.warn('... 전개구문')
//('...')전개 구문
let values1 = [1, 2, 3, 4, 5]
let values2 = [6, 7, 8, 11, 10]
console.log(Math.min(...[1, 3, 5, 6, 7, 23, 9])) // 1
console.log(Math.max(1, 3, 5, 6, 7, 23, 9))      // 23
console.log(Math.max(...values1))                // 23
console.log(Math.max(...values1, ...values2))    // 11



console.warn('부동 소수점 ')
// computer에서 10진수 연산은 정확하지 않습니다.
// 0.1은 computer에서 무한 수
// 반복문 안에 0.1씩 증가하는 코드는 절대 작성 금지!
// 문제가 되는 케이스 참고
let width = 0.3;
let height = 0.6;
if (width + height !== 0.9) {
  console.log('부동 소수점!!');
}

console.log(0.1 + 0.2); // = 0.30000000000000004 // 0.1씩 늘어갈 때 문제 발생.
console.log(0.1 * 3);   // = 0.30000000000000004
console.log(0.3 + 0.6); // = 0.8999999999999999


console.warn('BigInt ⭐️⭐️⭐️')
// JS에서 큰 숫자를 사용할 때에는 BigInt를 사용합니다.
// BigInt를 여러분 회사에서 사용하지 않을 수도 있습니다.(추가된지 3년 되었습니다.)
// The proposal belongs to ECMAScript 2020, which is the 11th edition
// console.log(Number.MAX_SAFE_INTEGER)  // 2^53 - 1

// 서비스는 항상 최악의 상황, 악성 유저에 대비를 하셔야 합니다.
// 아래처럼 정상 작동이 되지 않는 경우들이 있습니다.
// 2**53 - 1
// 9007199254740991

9007199254740991 + 1
// 9007199254740992

9007199254740991 + 2
// 9007199254740992

9007199254740991 + 3
// 9007199254740994

9007199254740991 + 4
// 9007199254740996

// 제대로 나오게 하려면 n을 붙이세요!
9007199254740991n + 1n
// 9007199254740992n

9007199254740991n + 2n
// 9007199254740993n

9007199254740991n + 3n
// 9007199254740994n

9007199254740991n + 4n
// 9007199254740995n

console.log(BigInt(9007199254740991) + BigInt(1));
// 9007199254740992n

console.log(BigInt(9007199254740991) + BigInt(2));
// 9007199254740993n

console.log(BigInt(9007199254740991) + BigInt(3));
// 9007199254740994n

console.log(BigInt(9007199254740991) + BigInt(4));
// 9007199254740995n

// 참고삼아서 기억!
// BigInt(5) + 5n
// BigInt(5) + 5 // error
// BigInt(5) / 2n // 2n (소수 표현 안됨)
// BigInt("10") + BigInt("10") // 큰 값을 정수로 입력받을 때에는 string으로 처리해서 받아야 함


// 알면 좋은 것
// console.log로 출력하게 되면
let test = 10;
console.log(test.toString());