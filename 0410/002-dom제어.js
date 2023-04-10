
console.warn('DOM 제어 명령어');

// ? Listener 함수 제어
// 이벤트의 타입에는 click, mouseover, mouseout, wheel 등 다양한 이벤트를 감지.

const myBtn = document.querySelector("button");

// myBtn에 클릭 이벤트가 발생하면, 콜백함수를 실행.
myBtn.addEventListener('click', function () {
    console.log("hello world");
})

// ? ClassList 제어
const classBtn = document.querySelector('.classBtn');
classBtn.addEventListener('click', function () {
    // classBtn.classList.add("blue");
    // classBtn.classList.remove("blue");

    // * toggle() 메소드는 클래스가 존재하면 제거하고, 존재하지 않으면 추가.
    classBtn.classList.toggle("blue");

    // * contains() 메소드는 클래스가 존재하면 true, 존재하지 않으면 false를 반환.
    console.log(classBtn.classList.contains("blue"));
});


////////////////////////////////////////////////////////////////////////////////////


console.warn('DOM 요소 제어');

// !복습 이쪽 다시 만들어보자.
// ? Dom 요소 제어
// * for문을 활용한 방법.
const elBtn = document.querySelector(".elBtn");
const elUl = document.querySelector(".elUl");

// eventListener를 통해 버튼을 클릭하면, li를 생성.
// elBtn.addEventListener('click', function () {
//     // li를 5개 생성.
//     for (let i = 0; i < 5; i++) {
//         // li와 삭제버튼을 생성을 위한 변수 설정.
//         const elLi = document.createElement('li');
//         const deleteBtn = document.createElement('button');
//         // 삭제버튼에 텍스트를 추가하기 위한 변수 설정.
//         const deleteBtnTxt = document.createTextNode = '삭제하기';

//         // elUl에 elLi와 deleteBtn을 추가.
//         elUl.appendChild(elLi);
//         elLi.append('리스트 추가 ', deleteBtn);

//         // deleteBtn에 클릭 이벤트가 발생하면, elLi를 제거.
//         deleteBtn.append(deleteBtnTxt);
//         deleteBtn.addEventListener('click', function () {
//             elLi.remove();
//         });
//     };
// });


// * forEach를 활용한 방법.
// eventListener를 통해 버튼을 클릭하면, li를 생성.
elBtn.addEventListener('click', function () {
    // length가 5인 배열 생성.
    const numItems = Array.from({ length: 5 });

    // 배열을 forEach를 사용하여 반복.
    numItems.forEach(function () {
        // li와 삭제 버튼 생성을 위한 변수 설정.
        const elLi = document.createElement('li');
        const deleteBtn = document.createElement('button');
        // 삭제 버튼에 텍스트를 추가하기 위한 변수 설정.
        const deleteBtnTxt = document.createTextNode('Delete');

        // elUl에 elLi와 deleteBtn을 추가.
        elUl.appendChild(elLi);
        elLi.append('Add list ', deleteBtn);

        // deleteBtn에 클릭 이벤트가 발생하면, elLi를 제거.
        deleteBtn.append(deleteBtnTxt);
        deleteBtn.addEventListener('click', function () {
            elLi.remove();
        });
    });
});
