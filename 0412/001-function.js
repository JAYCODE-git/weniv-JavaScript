
// ?  function 심화
console.warn('function 심화');


// * function에서 length는 parameter의 개수를 반환.
function func1(a, b) {
    return a + b
}

function func2(a, b, c) {
    const z = a + b + c
    return z
}

function func3(a, b, c, d, e, f) {
    return a
}

// * 1. Object와 같이 사용되는 function의 특성
// array, object, function이 접근하는 방식과 값 변경이 동일.
// name, length는 변경이 되지 않음.
func1['location'] = 'seoul'
console.dir(func1);



// * 2. arguments가 순서대로 들어가는 function의 특성
function func4(a = 10, b = 20, c = 30) {
    return a + b + c
};
func4()
func4(100)
func4(100, 200)
func4(100, 200, 300)
func4(c = 300)          // arguments 순서대로 들어가서 300 + 20 + 30 = 350출력
func4(a = 100, c = 300) // = 430


// * 3. roro기법 원리
// roro기법은 입력되는 arguments가 매우 많은 function에서 사용됨.
// 호출할 때 어떤 값이 들어가는지 명확하게 알기 어렵고, 순서에 따라 값이 변경될 수 있음.
// argument에 name(변수명)을 부여하여 순서에 상관없이 입력할 수 있게 함.
function loginInfo({
    grade = 'Gold',
    write = true,
    view = true,
    channel = true,
    social = 'google'
}) {
    console.log(grade, write, view, channel, social);
}
// 순서와  상관없이 값 변경 가능.
loginInfo({
    grade: 'Silver',
    channel: false,
    social: 'kakao'
})

// object 안에 변수명을 넣으면 변수명이 key가 되고 변수의 값은 value가 된다.
let one;
let two;
let three;
let four = { one, two, three }
// 위와 같은 코드를 아래와 같이 작성할 수 있음.
let { eleven, twelve, thirteen } = { eleven: 11, twelve: 12, thirteen: 13 }

function funcTest({
    a = 10,
    b = 20,
    c = 30
} = {}) {
    console.log(a, b, c)
    return a + b + c
}
funcTest();              // return 60
funcTest({});            // return 60
funcTest({ b: 200 });    // return 240


// * 4. early return


// * 5. 즉시 실행 함수
// 메모리를 효율적으로 사용하기 위해 사용.
// 함수를 선언하자마자 실행하고 싶을 때 사용.

// 익명 즉시 실행 함수
(function () {
    let a = 1;
    let b = 2;
    return a + b;
}());

// 기명 즉시 실행 함수
(function foo() {
    let a = 3;
    let b = 5;
    return a * b;
}());


// * call by value, reference, sharing
// array와 같은 convention 자료형을 넘길 때에는 함수 안에서 값의 수정이 됩니다!
// call by value(값의 전달)
// call by reference(참조-주소값의 전달)
// 면접질문 : javascript의 call by value, call by reference에 대해서 설명하세요
// 답변 : javascript는 call by value만 존재합니다.
// https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-Call-by-Value-Call-by-Reference

let test1 = [10, 20, 30];
let test2 = 100

function changeValue1(arr) {
    arr[0] = 100
}
changeValue1(test1); // test1의 값 변경.
console.log(test1);  // [100, 20, 30]

function changeValue2(value) {
    value = 1000
}
changeValue2(test2) // test2의 값은 변경되지 않음.
console.log(test2); // 100


// * call by reference가 없는 반례
// 반례
var a = {};
function test(b) {
    b = 1000;
}
test(a)
a // 다른 언어의 경우 call by reference로 동작하여 1000이 출력됨.


// ! call by reference에 대한 토론 정독해보기
/*
call by value
아규먼트에 값이 넘어올 때 복사한 값이 넘어온다!

call by reference
아규먼트에 값이 넘어올 때 주소값이 넘어온다! (주소값이 넘어왔으니 접근을 하면 원본이다!)

- javascript는 참조값을 넘길 때 참조한 주소값을 '복사'하여 넘깁니다. 그래서 call by reference가 아니라 call by value입니다. '복사한 값'인거죠. 주소값도 값이니까요.

4. 김
원시값보다 덩치가 큰 배열이나 객체도 인자로써 옮겨질 때 값이 복제되어 전달되면 실행시간이 길어질 수 도 있을까요?

답 : 주소값을 복사하니 실행시간이 길어지지 않습니다.

4. 서 — 오늘 오후 3:28
변수가 가리키고 있는 공간에 저장된 '값'이 전달된다...?

답 : 주소값이 복사됩니다.

4. 유 — 오늘 오후 3:29
지금 말씀하시는 부분이 원시값은 메모리에 값을 저장하고
object는 메모리에 참조주소를 저장해서 생기는 일 맞을까요?

답 : 이해하신 것이 맞습니다. 다만 이렇게 표현하는 것이 정확할 것 같아요. 원시값은 파라미터에 복사한 값을 저장하고 참조타입은 파라미터에 참조 주소를 복사하여 저장합니다.

4. 이 — 오늘 오후 3:30
함수 내부에서는 인자의 값을 가상 변수에 복제해서 로직을 수행하는데 참조값은 가상 변수에 주소값이 함께 담겨져서 값이 바뀌는 걸까요?

답 : 맞습니다. 주소값이 담겨져서 바뀌는 것입니다. 다만 주소값이 '복사'된 상태입니다.


4. 이 — 오늘 오후 3:31
메모리 주소를 복사해서 넘기기 때문에 새로운 주소가 할당된 경우에만 변경이 안된다는 거라고 이해해도 될까요?

답 : 정확합니다.
*/
