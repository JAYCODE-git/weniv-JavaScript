

// Getter & Setters
// Getter: 값을 가져올 때 사용하는 함수
// Setter: 값을 설정할 때 사용하는 함수
// Getter & Setter를 사용하면, 값을 가져오거나 설정할 때 특정한 작업을 할 수 있다.
// '#'를 활용한 비공개 프로퍼티에도 접근할 수 있게 되므로 주의!
// 협업 시에는 get, set 안에 어떤 로직이 있는지 파악하는데 어려움이 있을 수 있으니
// 주석이나, 가이드 문서를 만들어 충분한 정보를 제공해주는것이 좋다.


function HidePassword(password) {
    return "관리자만 볼 수 있어요! 🚫";
}
class Robot {
    #password;
    constructor(name, pw) {
        this.name = name;
        this.#password = pw;
    }
    get password() {
        return HidePassword(this._password);
    }
    set password(pw) {
        this._password = pw;
    }
    speak() {
        console.log(`🤖 저는 ${this.name}입니다. 비밀번호는 ${HidePassword(this._password)}`);
    }
    viewPassword() {
        const hasOwnPassword = this.#password ? this.#password : '비밀번호가 없습니다.';
        console.log(`🔐 ${hasOwnPassword}`);
    }
}

const testBot1 = new Robot("로봇1", "1234");
const testBot2 = new Robot("로봇2");

testBot1.speak();
testBot2.speak();
testBot1.viewPassword();
testBot2.viewPassword();