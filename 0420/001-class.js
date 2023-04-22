

// ? Class
// * 기존 JS의 사용자 정의 타입 생성(객체 생성) 방법을 다른 언어의 Class 문법처럼 바꿔준 것.
// class의 생성자 함수도 new 키워드가 호출될때 자동으로 실행.
// constructor() 메소드를 통해 클래스의 생성자 함수를 정의.


// ? class [로봇 예제]
// Robot이라는 Class에 speak() 메소드 생성
class Robot {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`삐리비리. 제 이름은 ${this.name}입니다.`);
    }
}

// Encapsulation 캡슐화
// new 키워드로 Robot 템플릿을 가져와서 newBot Object에 data In.
const newBot = new Robot('🤖 JAY');


// newBot instance에 Method 실행
// = 삐리비리.제 이름은 🤖 JAY입니다.
newBot.speak();



// * class 상속
// 클래스의 상속은 extends 명령어를 사용.
// 서브 클래스에 생성자 함수를 사용하고 싶다면 반드시 생성자 함수안에서 super() 함수를 사용.
class clone extends Robot {
    constructor([name]) {
        super([name]);
    }
    // speak() Method를 재선언해서 Overriding
    speak() {
        super.speak(); // = 부모 Class의 Method 상속!
        console.log(`Super ${this.name} Overriding!`);
    }
}

// extends 명령어로 생성된 subclass 'clone'을 가져와서 캡슐화.
const babyBot = new clone('🤖 BABY')

// babyBot instance에 Method 실행
// = 삐리비리. 제 이름은 🤖 BABY입니다.
// = Super 🤖 BABY Overriding!
babyBot.speak();




// ? 실습
// 1. Sausage 클래스 선언.
class Sausage {
    // Sausage 클래스의 생성자 선언.
    constructor(flavor1, flavor2) {
        this.flavor1 = flavor1
        this.flavor2 = flavor2
    }
    taste() {
        // 콘솔에 flavor1 속성과 flavor2 속성을 출력한다.
        console.log(`${this.flavor1}와 ${this.flavor2}맛이 난다!`)
    }
}

// 2. FireSausage 서브 클래스를 선언.
class FireSausage extends Sausage {
    // FireSausage 클래스의 생성자를 선언한다.
    // 생성하는 속성이 없으면 생략 가능!
    constructor(flavor1, flavor2) {
        super(flavor1, flavor2)
    }
    // 상속 관계에 있는 부모 클래스에서 이미 정의된 메소드를
    // 자식 클래스에서 같은 메소드로 다시 정의하는 것을 오버라이딩 (Overriding)이라고 한다.
    taste() {
        console.log(`🔥불맛🔥 ${this.flavor1}와 ${this.flavor2}맛이 난다!`)
    }
}

// 3. Sausage 클래스의 인스턴스를 생성.
const instance1 = new Sausage('새우', '치즈');
instance1.taste();
const instance2 = new FireSausage('파', '불닭');
instance2.taste();