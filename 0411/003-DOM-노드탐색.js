// ? DOM .cont의 노드 탐색.
// element를 붙이면 노드 중 요소만 탐색
// node만 탐색하면 개행된 #text나 주석도 포함해서 탐색
const cont = document.querySelector(".cont");
console.log(cont.firstElementChild);  // 첫번째 자식을 찾습니다.
console.log(cont.lastElementChild);   // 마지막 자식을 찾습니다.
console.log(cont.nextElementSibling); // 다음 형제요소를 찾습니다.
console.log(cont.previousSibling);    // 이전 형제노드를 찾습니다.
console.log(cont.children);           // 모든 직계자식을 찾습니다.
console.log(cont.parentElement);      // 부모 요소를 찾습니다.

// 형제 요소를 제외하고 부모로 타고 올라가며 가장 가까운 cont 클래스 요소를 탐색.
// 자기 자신부터 찾기 시작함. 탐색 대상에 자신도 포함.
console.log(cont.querySelector('strong').closest('strong').innerHTML);
