

// * 1. 동기적 처리

// const btn = document.querySelector('button');
// btn.addEventListener('click', xhrRequest);

// const btn = document.querySelector('button');
// btn.addEventListener('click', xhrRequest);

// function xhrRequest() {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'message.txt');
//     xhr.onreadystatechange = () => {

//         if (xhr.readyState === 4 && xhr.status === 200) {
//             const result = xhr.responseText;

//             document.querySelector('p').textContent = result;

//         }
//     }
//     xhr.send();
// }

// * 2. 비동기적 처리
const btn = document.querySelector('button');
// btn.addEventListener('click', xhrRequest);
let result;

function xhrRequest() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'message.txt');
    xhr.onreadystatechange = () => {

        if (xhr.readyState === 4 && xhr.status === 200) {
            result = xhr.responseText;
            // xhrRequest() 함수가 실행되고 나서 result에 값이 할당되기 때문에 출력이 더 늦다.
            console.log(result);
            document.querySelector('p').textContent = result;
        }
    }
    xhr.send();
}

xhrRequest();
// 출력이 더 빠르다.
console.log(result);
