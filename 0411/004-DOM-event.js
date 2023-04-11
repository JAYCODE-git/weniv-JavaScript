
// ? DOM 요소에 이벤트 연결.
// DOM 요소에 이벤트를 연결하면 사용자가 요소와 상호작용할 때 이벤트가 발생합니다.
// 이벤트를 연결하는 방법은 addEventListener 메소드를 사용하는 것입니다.
// addEventListener 메소드는 요소에 Event(e)를 연결합니다.


// DOM요소 .btn-first에 click 이벤트를 연결합니다.
const btnFirst = document.querySelector('.btn-first');
// addEventListener 메소드는 요소에 Event(e)를 연결합니다.
btnFirst.addEventListener('click', (e) => {
    console.log(e);
});


// ? Event Propagation(이벤트 전파)
const parent = document.querySelector('.parent');
const btnSecond = document.querySelector('.btn-event');
btnSecond.addEventListener('click', (event) => {
    console.log("💥 btn capture!");
}, true)

window.addEventListener('click', () => {
    console.log("1️⃣ window capture!");
}, true); // true : 캡처링 단계의 이벤트가 발생하도록 합니다.

document.addEventListener('click', () => {
    console.log("2️⃣ document capture!");
}, true);

parent.addEventListener('click', () => {
    console.log("3️⃣ parent capture!");
}, true);

btnFirst.addEventListener('click', (event) => {
    console.log("4️⃣ btn bubble!");
})

parent.addEventListener('click', () => {
    console.log("3️⃣parent bubble!");
});

document.addEventListener('click', () => {
    console.log("2️⃣ document bubble!");
});

window.addEventListener('click', () => {
    console.log("1️⃣ window bubble!");
});

