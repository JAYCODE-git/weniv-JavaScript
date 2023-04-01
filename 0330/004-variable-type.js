// * 원시타입
// ? 값 할당의 원리
console.error('1. 변수명 타입 : 원시타입')
let str1 = 'hello';
let str2 = str1;
console.log(str2); // = 'hello'

// str1과 str2은 같은 값을 가리킨다.
// 가리키는 값 자체가 변하는 게 아니고 가리키는 방향만 바뀌는 것.
// 하나의 값(str1)이 변해도 나머지 값(str2)에 영향이 가지 않음.
str1 = 'world';
console.log(str2); // = 'hello'

// 변수의 타입을 알고 싶으면 typeof
console.log(typeof 'str1');

//escape String
console.log('i\'m so happy'); // 작은 따옴표
console.log('h\te\tl\tl\to')  // 스페이스(\t)
console.log('h\ne\nl\nl\no')  // 줄바꿈(\n)


// ? 형변환
// string > number
let string = 10.2;
console.log(parseInt('10.12345'));   // [권장] 수수점 제거
console.log(parseFloat('10.12345')); // [권장] 소수점 유지
console.log(+string);


// number > string
let num = 20;
// console.log(10.toString()); // (.)을 소수점으로 생각하기 때문에 Error
console.log(num.toString());   // [권장] toString()은 변수를 통해 사용
console.log(String(num));
console.log('' + num + num);


// Other Type > Boolean
let otherType = 10;
console.log(Boolean(-1))    // = true
console.log(Boolean(1000))  // = true
console.log(Boolean(0))     // = 0은 false
console.log(!!1000)         // = true
console.log(!otherType)    // =  true의 부정으로 false


console.warn('1-1. String')
//! String
// 기본 활용법
let txt = "LOREM"
console.log(txt + txt);
console.log(txt[0]);
console.log(txt.length);

// index 반환.
console.log(txt.indexOf('흑'));   // 해당 문자의 index 를 반환 // 결과가 없으면 -1.
console.log(txt.search('따흑'));  // indexOf와 같음. 정규표현식에서 사용.

// index에 해당하는 값 반환.
console.log(txt.slice(2));         // (start) 0부터 시작! 시작부터 종료 index(-1)까지 모두 잘라서 반환.
console.log(txt.slice(0, -1));     // (start, end) 시작부터 종료 index(-1) 사이의 값만 잘라서 반환.
console.log(txt.substring(3, -1)); // 순서에 상관없이 index가 작은 숫자부터 큰 숫자까지 잘라서 반환.

// replace를 통한 string 치환
let txt2 = 'lab CEO jay CEO'
console.log(txt2.replace('CEO', 'COO'));    // replace는 중복값이 있으면 앞의 1개만 return하고 종료.
console.log(txt2.replaceAll('CEO', 'COO')); // 중복값이 있으면 전부 replace(2021년 출시, 보편화되지 않음).
console.log(txt2.replace(/CEO/g, 'COO'));   // 중복값이 있으면 정규표현식을 통해 전부 replace.

// 대소문자 치환
console.log(txt2.toLowerCase()); // 소문자로 치환
console.log(txt2.toUpperCase()); // 대문자로 치환

// 해당 string이 있는지 boolean으로 반환
console.log(txt2.includes('CEO')); // = true
console.log(txt2.includes('CDO')); // = false

// Method Chaining // 메소드체이닝.점을 찍어서 계속 코드를 이어나가는 기술.
txt2.replace('CEO', 'FE').includes('FE').toString().toLowerCase()



// 띄어쓰기 단위로 자르기
let text1 = "aa bb cc dd"
let text2 = "aa-bb-cc-dd"
let text3 = "aa,bb,cc,dd"
let text4 = "aa,bb-cc-dd"

console.log(text1.split(' '));
console.log(text2.split('-'));
console.log(text3.split(','));
console.log(text4.replace(',', '-').split('-'));
console.log(text4.split(/[-,]/g));


// 중요도는 떨어지지만 알아두면 좋은 Method
// trim : 공백제거
let testTrim = '               hello world'
console.log(testTrim.trim());

// padStart : length를 적어서 남은 공간 채우기
let start = '99';
console.log(start.padStart(5, '0'));


console.warn('1-2. Number & Boolean & undefined, null')
// ! number
console.log(typeof 1);
console.log(typeof 0);
console.log(typeof 1.0);


// ! boolean
console.log(typeof true);
console.log(typeof false);


// ! undefined & null
console.log(typeof undefined);
console.log(typeof null); // = object // 값이 비어있음을 명시적으로 나타냄.



// * 참조타입
console.error('2. 변수명 타입 : 참조타입')

// ! function
console.log(typeof function() {}); // = function

// ! object
console.log(typeof [1, 2, 3]); // = object (array)
console.log(typeof { a: 10, b: 20 }); // = object (object)

// a와 b를 더해서 반환하는 함수 생성
