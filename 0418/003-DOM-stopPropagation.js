
// * stopPropagation() : 이벤트 전파를 중단.


const stop = document.querySelector('.stop button');
stop.addEventListener('click', (event) => {
    console.log('clicked');
    event.preventDefault();

    // 이벤트 전파를 중단한다.
    event.stopPropagation();
});

// document.body.addEventListener('click', () => {
//     console.log('event still alive!');
// }, true);


// 내가 만든 버블링 이벤트
// const todo = document.querySelector('.todo');
// todo.addEventListener('click', (e) => {
//     if (e.target.nodeName === 'BUTTON') {
//         if (confirm('정말 삭제하시겠습니까?')) {
//             e.target.parentElement.remove();
//         }
//     } else if (e.target.nodeName === 'P') {
//         alert(e.target.textContent.slice(0, -2));
//     }
// });


const list = document.querySelectorAll('.todo p');
const btn = document.querySelectorAll('.todo button');
list.forEach((item) => {
    item.addEventListener('click', (e) => {
        alert(e.target.textContent.slice(0, -2));
    });
});
btn.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (confirm('정말 삭제하시겠습니까?')) {
            e.target.parentElement.remove();
        }
        e.stopPropagation()
    });
});