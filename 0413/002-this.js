console.warn('2. this ***');
// this는 함수가 호출되는 방식에 따라 다르게 동작.
// this가 어려운 이유는 this를 포함하고 있는 Object의 위치에 따라 this의 의미가 달라지기 때문.

// 1. window를 호출.
function t() { console.log(this) }
t(); // window


// 2. myObj를 호출.
// this는 전역 객체를 가리킨다.
let myObj = {
    val1: 100,
    func1: function () {
        console.log(this);
    }
}
myObj.func1(); // myObj


let myObj2 = {
    val2: 100,
    func1: function () {
        console.log(this);
    }
}

let test = myObj2.func1;
test(); // window

// test()는 사실 window.test()와 같다.
// test()는 window 객체의 메소드이기 때문에 this는 window를 가리킨다.



// ? 버튼을 클릭하면 this는 버튼을 가리킨다.
let myObj3 = {
    val3: 100,
    func1: function () {
        console.log(this);
    },
};

let testButton = myObj3.func1;

// button1 클릭하면 myObj3.func1()이 실행되고 this는 button1을 가리킨다.
let button1 = document.getElementById("btn1");
button1.addEventListener("click", myObj3.func1);

// button1 클릭하면 myObj3.func1()이 실행되고 this는 button2을 가리킨다.
let button2 = document.getElementById("btn2");
button2.addEventListener("click", testButton);




console.warn("----------sayName()----------");
function sayName() {
    console.log(this.name);
}

let peter = {
    name: 'peter Parker',
    say: sayName
}
let bruce = {
    name: 'Bruce Wayne',
    say: sayName
}
peter.say(); // peter Parker



console.warn("----------attackBeam()----------");

// this는 함수가 호출되는 대상을 가리킨다.
function attackBeam() {
    this.hp -= 20;
}
function attackKnife() {
    this.hp -= 5;
}

let zombie = {
    name: 'super zombie',
    damaged1: attackBeam,
    damaged2: attackKnife,
    hp: 10000,
    power: 2
}

let monster = {
    name: 'super monster',
    damaged1: attackBeam,
    damaged2: attackKnife,
    hp: 1000,
    power: 100
}

zombie.damaged1() // Beam
zombie.damaged2() // Knife
zombie.hp // 9980







// * bind
console.warn("----------bind()----------");
let 호텔 = [{
    '이름': '하나호텔',
    '위치': '제주도 제주시 001',
    '가격': { 'A': 50000, 'B': 30000, 'C': 15000 },
    '방의개수': 50,
    '예약자수': 25,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '둘호텔',
    '위치': '제주도 제주시 002',
    '가격': { 'A': 100000, 'B': 60000, 'C': 30000 },
    '방의개수': 100,
    '예약자수': 30,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}, {
    '이름': '셋호텔',
    '위치': '제주도 제주시 003',
    '가격': { 'A': 80000, 'B': 50000, 'C': 30000 },
    '방의개수': 120,
    '예약자수': 80,
    '남은방의개수': function () { return this.방의개수 - this.예약자수 }
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());


function a() {
    console.log(this);
    function b() {
        console.log(this);
        function c() {
            console.log(this);
        }
        c();
    }
    b();
}
a();