// 이름이 있는 함수 안에서 정의된 함수의 경우 this는 전역.
// a함수는 object의 메소드이므로 this는 object를 가리킴.


console.warn('----------arrow function this----------');
// 화살표 함수의 경우 상위 스코프의 this를 가리킨다.
const person = {
    name: 'jay',
    age: 25,
    a() {
        console.log(this);
        console.log(this.name);
        let b = () => {
            console.log(this);
            console.log(this.name);
            let c = () => {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a();
// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person

// 출력
// {name: 'jay', age: 25, a: ƒ}
// jay



console.warn('----------callback this----------');
// this로 사용할 callback 함수를 만들어서 사용가능.
// 실무에서 잘 사용하지 않는 예시. 참고만 하자.

let 인세규정 = {
    책: 10,
    영상콘텐츠: 50
}

function 인세계산함수책(e) {
    return e * (this.책 / 100)
}

function 인세계산함수영상(e) {
    return e * (this.영상콘텐츠 / 100)
}

[100, 200, 300].map(인세계산함수책, 인세규정);
[100, 200, 300].map(인세계산함수영상, 인세규정);


// 1. 전역공간의 this는 window(node는 global) → 실제로는 window.globalThis, window.this 아님!
// 2. 메서드로 호출한 경우 this는 멤버접근연산자 앞에 객체
// 3. 함수로 호출할 경우 this는 window(node는 global)
// 4. 화살표 함수의 경우 this는 상위스코프
// 5. 생성자 함수의 경우 this는 인스턴스
// 6. 콜백함수의 경우 this가 다르게 동작 할 수 있음


console.warn('----------instance this----------');
// this 출력
let newBook4 = new Book("JavaSCript", 100000, "홍길동", "2023.04.12")

// new 키워드를 사용했을 때 일어나는 일
function Book(책이름, 책가격, 저자, 출판일) {
    this.출력 = function () {
        console.log(this)
    }
    this.책이름 = 책이름
    this.책가격 = 책가격
    this.저자 = 저자
    this.출판일 = 출판일
    // return this
}
