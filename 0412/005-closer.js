
console.warn('closer');
// ? closer

// closer는 함수를 return 하는 함수.
function 제곱(x) {
    function 승수(y) {
        return y ** x
    }
    return 승수;
};

// 외부함수(제곱)는 내부함수(승수)를 return 하는 함수.
// 외부함수가 return이 끝났을 때 x는 사라지지만 내부함수는 사라지지 않고 남아있음.
// 내부함수는 외부함수의 지역변수 x를 참조하고 있기 때문
// ! 가비지컬렉터가 내부함수를 제거하지 않음. (?)
let 제곱2 = 제곱(2);
let 제곱3 = 제곱(3);
let 제곱4 = 제곱(4);

제곱2(2);
제곱3(3);
제곱4(4);

// * closer 예시
function 승수제조기() {
    let value = 0;
    function 승수() {
        return ++value ** 2
    }
    return 승수
}

let 승 = 승수제조기();
승()
승()
승()
value //출력할 수 없습니다. 은닉화가 된거죠.



// 함수를 return 하는 함수 예제
function returnFunc() {
    function sum(a, b) {
        return a + b
    }
    return sum;
}
let add = returnFunc();


// ! 여기 뭔지 잘 모르겠음 ㅜㅜ
function makeAdder(x) {
    let num = 1;
    return function (z) {
        num = 100;
        return x + num + z;
    }
}
let add5 = makeAdder(5);
let add10 = makeAdder(10);



// * 그것이 알고싶다... 클로저

let outer1 = function () {
    let a = 1;
    let inner1 = function () {
        let b = 5;
        let c = 6;
        a = a + b + c;
        console.log(a);
    };
    inner1();
};
outer1();

//------------------------------------//

let outer2 = function () {
    let a = 1;
    let inner2 = function () {
        let b = 5;
        let c = 6;
        a = a + b + c;
        console.log(a);
    };
    return inner2;
};

let newInner = outer2();
newInner2();

//------------------------------------//

var person = (function () {
    var age = 15;

    return {
        name: "wade",

        getAge: function () {
            console.log(age);
            return age;
        },

        setAge: function (val) {
            age = val;
            console.log(age);
        }
    }
})();

person.getAge();
person.setAge(20);

person.age = 30;
person.getAge();