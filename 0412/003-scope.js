// ?  scope
console.warn('scope');

// * let과 const는 블록레벨 스코프를 가집니다.
{
    let x = 10;
    const y = 20;
    console.log(x, y);
}
// console.log(x, y); // 블록 밖에서는 사용 불가.


// * 지역변수와 전역변수
// 지역변수는 함수 안에서 선언된 변수.
// 지역 내에서만 사용하면 여러 지역에서 동일한 변수명을 사용할 수 있음.
// 스코프체이닝 : 함수 안에 변수가 없다면 함수 바깥으로 타고 올라가면서 변수를 찾는 것.
// 전역에도 변수가 없다면 Error.
// let과 const는 블록레벨 스코프를 가지고 있습니다.
// 변수에 접근할 수 있는 유효범위
{
    let x = 10
    const y = 20
}
// console.log(x, y) Error!


// 1
let x1 = 10
function 함수1() {
    let x1 = 20
    function 함수2() {
        function 함수3() {
            console.log(x1)
        }
    }
}
함수1() // = undefined

// 2
let x2 = 10
function 함수1() {
    let x2 = 20
    function 함수2() {
        function 함수3() {
            let x2 = 30
            console.log(x2)
        }
        함수3()
    }
    함수2()
}
함수1() // = 30

// 3
let x3 = 10
function 함수1() {
    let x3 = 20
    function 함수2() {
        function 함수3() {
            console.log(x3)
        }
        함수3()
    }
    함수2()
}
함수1()             // 20 // 지역변수
console.log(x3)     // 10 // 전역변수


/////
let a = 10;
let b = 10;
function 함수1() {
    let a = 20;
    let b = 20;
    function 함수2() {
        let a = 30;
        console.log(a, b);
    }
    함수2()
}
함수1()



// 함수의 호이스팅
// (함수나 변수를 끌어올려 주는 것 처럼 보임)
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
// error 없이 실행 됩니다.
함수(10)

function 함수(x) {
    return x + 100
}

// error가 생깁니다.
함수(10)

let 함수2 = result => result + 100

// error가 생깁니다.
함수2(10)

const 함수3 = function (x) {
    return x + 100
}


