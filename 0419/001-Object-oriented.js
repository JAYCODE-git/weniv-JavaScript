

// ? Object Oriented Programming
// * 객체지향 프로그래밍이란 무엇일까?
// 객체지향 프로그래밍 객체와 객체가 서로 메소드를 통해 최대한 간결하게 상호 작용하도록 하는 방법론.
// 객체를 데이터 목록으로 보는 시각에서 벗어나 여러 개의 독립된 단위, 즉 "객체"들의 모임으로 파악하고자 하는 것.
// 프로그램을 유연하고 변경이 용이하게 만들 수 있다.



// * 객체지향 프로그래밍 예제
// teacher 객체 생성
const teacher = {
    name: '🐻‍❄️wade',
    address: '제주도 제주시 인다 1길',
    phoneNum: '010-8000-0000',
    // student를 levelUp시키는 teaching 함수 선언.
    teaching: function (student) {
        student.levelUp();
        // console.log(this);
    }
}
// student 객체 생성
const student = {
    level: 1,
    // student의 level을 1 올리는 levelUp 함수 선언.
    levelUp: function () {
        this.level++;
        console.log(`👩🏻‍💻학생의 레벨이 ${this.level}로 올랐습니다.`)
    }
}
// teacher 객체의 teaching 메서드를 호출하면서 student 객체를 인수로 전달.
teacher.teaching(student);