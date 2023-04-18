
// * DOM This
const parent = document.querySelector('.parent-this');
parent.addEventListener('click', (event) => {
    // 화살표 함수를 쓴다면 이벤트와 상관 없이 this가 가리키는 대상이 상위 객체를 가르킨다.
    console.log(this);
    console.log(event.currentTarget);
})


const btnFirst = document.querySelector('.btn-first')
const myObj = {
    nameObj: "나는 myObj의 name입니다!",
    test() {
        // 화살표 함수의 this는 상위 scope인 myObj를 가리킨다!
        btnFirst.addEventListener('click', () => console.log(this.nameObj));
    },
}

myObj.test();