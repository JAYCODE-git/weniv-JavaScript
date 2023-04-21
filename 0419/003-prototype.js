
// * 생성자 함수의 prototype
// 1. 생성자 함수의 prototype 프로퍼티는 생성자 함수로 생성된 모든 객체의 부모 역할을 하는 객체를 가리킨다.
function Jay() {
    this.job = 'Frontend Developer';
    this.skill = ['JavaScript', 'React', 'Sass', 'CSS3', 'HTML5'];
}
// 2. prototype Jay에 접근해서 name 속성을 추가
Jay.prototype.name = '제이';

// 2. clone 인스턴스를 생성.
const clone1 = new Jay();
const clone2 = new Jay();
const clone3 = new Jay();

// 3. clone1의 Prototype(Jay)에 접근해서 name 속성을 변경.
clone1.__proto__.name = '신애';





// * 객체의 상속
// 객체지향 프로그래밍에서 객체는 다른 객체의 프로퍼티를 상속받을 수 있다.
// 상속은 객체지향 프로그래밍에서 객체의 재사용성을 높이고 코드의 중복을 줄이는 방법 중 하나이다.
// 자바스크립트에서는 객체의 상속을 위해 프로토타입을 사용한다.
// 프로토타입은 객체의 부모 역할을 하는 객체이다.
// 인스턴스는 프로토타입의 프로퍼티를 상속받을 수 있다.


// 1. Parent 생성자 함수 생성
function Parent() {
    this.name = '재현';
}
Parent.prototype.rename = function (name) {
    this.name = name;
}
Parent.prototype.sayName = function () {
    console.log(this.name);
}

// 2. Child 생성자 함수 생성
function Child() {
    Parent.call(this);
}

// 3. Object.create 함수의 인자로 객체를 전달하면 전달받은 객체를 프로토타입으로 설정한다.
Child.prototype = Object.create(Parent.prototype);
Child.prototype.canWalk = function () {
    console.log('now i can walk!!');
}