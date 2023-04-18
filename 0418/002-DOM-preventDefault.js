
// * preventDefault() : 브라우저의 기본 이벤트 동작을 취소.

const submit = document.querySelector('.submit');
submit.addEventListener('click', (event) => {
    console.log('🎉 clicked');
    event.preventDefault();
})

// 마우스 우클릭 제한
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    window.alert('🚫 해당 페이지에서는 오른쪽 클릭을 제한합니다.');
});