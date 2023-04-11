
// ? DOM 속성 제어
// DOM 요소 스타일 속성 제어
const target = document.querySelector('.style');

target.style.color = 'red';
target.style.fontWeight = 'bold';
target.style.fontSize = '12px';
// target.style.color = null; // 스타일의 정보를 초기화



// ? 속성에 접근하고 수정할 수 있는 Attribute 메소드
// 1. getAttribute 메소드는 요소의 특정 속성 값에 접근할 수 있도록 합니다.
// 2. setAttribute 메소드는 요소의 특정 속성 값에 접근하여 값을 수정합니다.
const attTarget = document.querySelector('.attribute p');
const myimg = document.querySelector('img');
const idAttr = attTarget.getAttribute('id');
console.log(idAttr);
myimg.setAttribute("src", "https://img.wendybook.com/image_detail/img159/159599_01.jpg");
myimg.setAttribute("alt", "setAttribute!");
console.log(myimg.alt);



// ? dataset 속성
// dataset 속성은 data-로 시작하는 속성을 모두 가져옵니다.
const dataTarget = document.querySelector('.dataset img');
console.log(dataTarget.dataset);
// camelCase로 변환해서 호출.
console.log(dataTarget.dataset.shipId);
console.log(dataTarget.dataset.skill);