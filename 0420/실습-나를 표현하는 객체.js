// ? 실습 1 | // * 나를 표현하는 Object를 만들어보기

// * 1. Object literal을 활용
const myGrowth = {
    name: 'JAY',
    job: 'Frontend Developer',
    level: 1,
    code: function (lang) {
        console.log(`📝 ${this.name}는 지금 ${lang} 공부 중...`);
        this.levelUp();
    },
    read: function (book) {
        console.log(`📚 ${this.name}는 지금 ${book} 읽는 중...`);
        this.levelUp();
    },
    levelUp: function () {
        this.level++;
        console.log(`🎉 ${this.name} 레벨${this.level} 달성!`);
    }
}
// student 객체 생성
const getLearn = {
    level: 1,
    // student의 level을 1 올리는 levelUp 함수 선언.
    levelUp: function () {
        this.level++;
        console.log(`👩🏻‍💻학생의 레벨이 ${this.level}로 올랐습니다.`)
    }
}

// method 호출
myGrowth.code('JavaScript')
myGrowth.read('core JavaScript')
// = 📝 JAY는 지금 JavaScript 공부 중... 🎉 JAY 레벨2 달성!
// = 📚 JAY는 지금 core JavaScript 읽는 중... 🎉 👩🏻‍💻 JAY 레벨3 달성!




// * 2. prototype을 활용
// 1. GetProtoLv 객체 생성
const GetProtoLv = {
    name: 'JAY',
    job: 'Frontend Developer',
    level: 1,
    levelUp: function () {
        this.level++;
        console.log(`🎉 ${this.name} 레벨${this.level} 달성!`);
    }
};

// 2. GetProtoLv의 속성을 상속받을 빈 생성자 함수 getLearn() 생성
function getLearn(name) {
    this.name = name
}

// 3. Object.create() 메소드를 통해 GetProtoLv를 연결해서 속성을 상속받을 수 있도록 설정
getLearn.prototype = Object.create(GetProtoLv);
getLearn.prototype.code = function (lang) {
    console.log(`📝 ${this.name}는 지금 ${lang} 공부 중...`);
    this.levelUp();
};
getLearn.prototype.read = function (book) {
    console.log(`📚 ${this.name}는 지금 ${book} 읽는 중...`);
    this.levelUp();
};

// 4. Instance 생성
const paul = new getLearn('Paul')
paul.code('React')
// 📝 Paul는 지금 React 공부 중... 🎉 Paul 레벨2 달성!
paul.read('Modern JavaScript')
// 📚 Paul는 지금 Modern JavaScript 읽는 중... 🎉 Paul 레벨3 달성!





// * 3. class를 활용
class GetClassLv {
    constructor(name) {
        this.name = name;
        this.job = 'Frontend Developer';
        this.level = 1;
    }
    code(lang) {
        if (typeof lang !== 'string') {
            throw new Error('Please pass in a string')
        }
        console.log(`📝 ${this.name}는 지금 ${lang} 공부 중...`);
        this.levelUp()
    }
    read(book) {
        if (typeof book !== 'string') {
            throw new Error('Please pass in a string')
        }
        console.log(`📚 ${this.name}는 지금 ${book} 읽는 중...`);
        this.levelUp()
    }
    levelUp() {
        this.level += 1;
        console.log(`🎉 ${this.name} 레벨${this.level} 달성!`);
    }
}

// instance 생성
const jay = new GetClassLv('JAY');

// instance method 호출
jay.code('JavaScript')
jay.read('Modern JavaScript')
// = 📝 JAY는 지금 JavaScript 공부 중... 🎉 JAY 레벨2 달성!
// = 📚 JAY는 지금 core JavaScript 읽는 중... 🎉 👩🏻‍💻 JAY 레벨3 달성!
