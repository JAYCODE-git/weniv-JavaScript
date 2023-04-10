// ? 돔 제어 명령어
console.warn('DOM 제어 명령어')
// 1. 해당하는 Id를 가진 요소에 접근. ⭐️
console.log(document.getElementById('myTxt'));


// 2. 해당하는 모든 요소에 접근.
console.log(document.getElementsByTagName('p'));

// 3. 해당하는 클래스를 가진 모든 요소에 접근.
console.log(document.getElementsByClassName('myClass'));

// 4. css 선택자로 단일 요소에 접근하기 ⭐️
console.log(document.querySelector(".myClass"));

// 5. css 선택자로 여러 요소에 접근하기 ⭐️
console.log(document.querySelectorAll("p"));

// 6. dom 요소의 속성을 변수에 할당하고 Object로 접근하기
const container = document.getElementById('container');

console.log(container.getElementsByTagName('li'))
console.log(container.getElementsByTagName('li')[0])
console.log(container.getElementsByTagName('li')[1])
console.log(container.getElementsByClassName('item-second'))

//queaySelector는 css 선택자를 사용하여 요소에 접근할 수 있음.
console.log(container.querySelectorAll('li'))
console.log(container.querySelectorAll('li:last-child'))


// ? 돔 2
console.warn('DOM 요소 추가 & 삭제')
//* DOM 요소 추가
// li 요소를 생성해서 변수에 할당 (메모리에 저장)
const listItem = document.createElement('li')

// 브라우저에서 #container 요소를 찾아서 listItem을 추가
container.append(listItem);

// * DOM 요소 수정 & 삭제
// textContent 속성을 이용하여 Dom 요소의 텍스트를 변경
container.querySelector('.item-second').textContent = '라조기';

// remove() 메소드를 이용하여 Dom 요소를 삭제
const target = document.querySelector('.item-second');
target.remove();