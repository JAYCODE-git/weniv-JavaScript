
// '#' 키워드를 활용한 Private property
class Robot {
    // '#password' property를 비공개 처리
    #password
    constructor(name, pw) {
        this.model = name;
        this.#password = pw;
    }
    getPassword() {
        return this.#password
    }
    setPassword(_pw) {
        this.#password = _pw;
    }
    speak() {
        console.log(`🤖 제 이름은 ${this.model}입니다. 비밀번호는 ${this.getPassword()}`);
    }
}

const privateBot = new Robot('🤖 미출시 로봇', '1234');

privateBot.model
privateBot.password
privateBot.speak()
privateBot.getPassword()
privateBot.setPassword('🔄 0000으로 변경')





// 'closer' 를 활용한 Private property
class Robot {
    constructor(name, pw) {
        this.model = name;
        const getPassword = () => pw;
        this.speak = () => console.log(`🤖 제 이름은 ${this.model}입니다. 비밀번호는 ${getPassword()}`);
    }
}

const closerBot = new Robot('🤖 미출시 로봇', '1234');

closerBot.model
closerBot.password
closerBot.speak();