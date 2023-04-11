
const parent = document.querySelector('.parent');
parent.addEventListener('click', function (event) {
    // event.target은 이벤트가 발생한 요소를 가리킴.
    console.log(event.target);
    // event.currentTarget은 이벤트 리스너가 등록된 요소를 가리킴.
    // 부모 요소에 이벤트 리스너를 등록했기 때문에 부모 요소에 접근 가능.
    console.log(event.currentTarget);
})

// 버튼4로 바꾸기
// event.target은 이벤트가 발생한 요소를 가리킴.
// event.currentTarget은 이벤트 리스너가 등록된 요소를 가리킴.
// 부모 요소에 이벤트 리스너를 등록했기 때문에 부모 요소에 접근 가능.
parent.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target.nodeName === "BUTTON") {
        e.target.innerText = "버튼4";
    }
})
