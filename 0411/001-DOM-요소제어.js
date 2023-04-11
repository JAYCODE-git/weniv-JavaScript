
// ? DOM 요소 제어
// parentElement.insertBefore(target, location);
// target요소를 parentElement의 자식인 location 위치 앞으로 이동합니다.
const span = document.createElement("span");
const sibling = document.getElementById("childElement");
const parentDiv = document.getElementById("parentElement");
// subling 요소 앞에 span 요소를 추가합니다.
parentDiv.insertBefore(span, sibling);



// ? JavaScript 문자열을 사용해 element, text 노드를 생성하거나 추가.
const myBtn = document.querySelector(".showValue button");
const myP = document.querySelector(".showValue p");
const myInput = document.querySelector(".showValue input");

myBtn.addEventListener('click', function () {
    // input 요소의 value 속성을 가져와서 myp 요소의 텍스트 콘텐츠로 설정합니다.
    myP.textContent = myInput.value;
});

// input 요소에 'input' 이벤트를 연결하면 실시간으로 값이 반영되게 만들 수도 있습니다.
myInput.addEventListener('input', () => {
    myP.textContent = myInput.value;
});

myP.innerHTML = "<strong>I'm Strong!!</strong>";
// innerHTML 은 요소(element) 내에 포함된 HTML 마크업을 가져오거나 설정합니다.
// innerText 속성은 요소의 렌더링된 텍스트 콘텐츠를 나타냅니다. (렌더링된에 주목하세요. innerText는 "사람이 읽을 수 있는" 요소만 처리합니다.)
// textContent 속성은 노드의 텍스트 콘텐츠를 표현합니다.