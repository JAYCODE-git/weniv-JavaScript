

// ? Constructor & Instance
// * 생성자 Constructor
// 생성자 객체를 만들 때 new 연산자와 함께 사용하는 함수.
// 생성자의 장점은 생성자를 통해 생성된 객체는 같은 프로퍼티와 메서드를 공유할 수 있다.
// 생성자 함수는 암묵적으로 대문자로 시작하는 이름을 가진다.
// 값을 가지지 않아도 자동으로 Return.


// * 생성자 함수 구조
// 1
let myArr = new Array(1, 2, 3);
myArr //= [1, 2, 3]

// 2
function Factory() { }
let robot1 = new Factory(); // = Factory {}


// * 생성자 함수의 인스턴스
// 생성자 함수를 통해 생성된 객체를 인스턴스라고 한다.
// 객체가 특정 생성자 함수로 생성된 것인지 확인이 필요하면 instanceof 연산자를 활용.
robot1 instanceof Factory; // = true



// * 생성자 함수 [로봇 예제]
// 생성자 함수 앞에 new 연산자가 사용되면 함수안의 this는 생성자가 만들어낸 객체 즉, 인스턴스를 참조.

// 1. 생성자 함수 NewFactory 생성
class NewFactory {
    constructor(name) {
        this.name = name;
        this.speak = function () {
            console.log(`삐리비리. 제 이름은 ${this.name}입니다.`);
        };
    }
}

// 2. instance 생성
const jayBot = new NewFactory('🤖JAY');
const paulBot = new NewFactory('🤖PAUL');


// 3. instanceof 연산자를 통해 생성자 함수로 생성된 객체인지 확인
jayBot instanceof NewFactory; // = true

// 4. instance의 name 프로퍼티에 접근
jayBot.speak()
paulBot.speak();

// 5. Console 출력 화면
// = 삐리비리. 제 이름은 🤖JAY입니다.
// = 삐리비리. 제 이름은 🤖PAUL입니다.