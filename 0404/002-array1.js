console.warn('1. 배열의 특징')

const arr = [10, 20, 30]
arr[0] = 100
// Property와 Method를 볼 수 있다. 
// 볼 수 있다는 건 호출할 수 있다는 뜻.
console.log(arr);
console.dir(arr);



// 숫자로 들어간 값은 대괄호로 호출.
// length와 같은 문자는 '.'을 찍어서 호출.
arr.length = 10;
arr[0] = 1000;
console.log(arr[0]);
console.log(arr.length);

// Property 추가도 가능
arr['push'] = 'push!'
console.log(arr);


console.warn('2. 배열의 순서');
/*
? 1. 배열(Array)은 데이터를 Index 순서대로 저장하는 Object.
? 이를 Indexing이라고 한다.
? 하나의 데이터를 표현하는 원시타입과 달리 여러개의 데이터를 한 변수에 저장할 수 있음
? 데이터를 추가하거나, 제거, 정렬, 검색 등 다양한 작업을 수행할 수 있도록 다양한 메소드(함수)를 내장.
? Array 내부의 값은 Element(원소)라고 한다.
*/

// ? 2. Array에 다른 원시타입과 Object type을 포함할 수 있다.
const typeArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(typeArr[1]);      // [4,5,6]
console.log(typeArr[1][2]);   // 6



console.warn('3. 배열의 차원');
// ? 3. 0차원, 1차원, 2차원, 3차원, 다차원
// 인공지능 중 가장 유명한 라이브러리 텐서플로우는 결국 다차원 행렬의 연산인 것.
const a = 10            // 1차원-스칼라
const b = [10, 20, 30]  // 2차원-벡터
const c = [             // 3차원-매트릭스
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
const d = [             // 다차원 - 텐서
  [[1, 2], [1, 2], [1, 2]],
  [[1, 2], [1, 2], [1, 2]],
  [[1, 2], [1, 2], [1, 2]]
]


console.warn('4. 배열의 메소드');
/*
? push() 메소드는 배열의 마지막에 요소를 추가.
? pop() 메소드는 배열의 마지막 요소를 제거.
*/

// push()
const pushArr = [1, 2, 3];
pushArr.push(4);
console.log(pushArr);  // [1,2,3,4]

// push 실무 예제
let tableBodyData = []
for (const iterator of data) {
  tableBodyData.push(`
            <tr>
                <td>${ iterator['a'] }</td>
                <td>${ iterator['b'] }</td>
                <td>${ iterator['c'] }</td>
                <td>${ iterator['d'] }</td>
                <td>${ iterator['e'] }</td>
                <td>${ iterator['f'] }</td>
            </tr>
        `)
}
document.querySelector('#dataTable > tbody').innerHTML = tableBodyData.join('')



// pop()
// 1. a마지막에서 값을 지우고
// 2. 나머지 값을 반환.
const popArr = [1, 2, 3, 4, 5]
let lastValue = popArr.pop()
console.log(popArr);

//unshift()
// 앞에 값을 추가
let unshiftArr = ['사과', '바나나', '수박'];
unshiftArr.unshift('토마토', '체리');
console.log(unshiftArr);


// shift()
// 1. 앞에서 값을 지우고
// 2. 나머지 값을 반환.
let shiftArr = ['사과', '바나나', '수박'];
shiftArr.shift('사과')
console.log(shiftArr);


console.warn('5. 실무 팁');
// 마지막 값 반환
let tip1 = [1, 2, 3, 4, 5]
console.log(tip1[tip1.length - 1]);

// 원본 배열 수정 없이 [1,2,3,4]값과 [5]라는 값을 얻어내고 싶을 때 전개구문 활용
console.log([...tip1].pop());
let tip2 = [...tip1]
console.log(tip2.pop());
console.log(tip2);

let tip3 = [1, 2, 3, 4, 5]
let tip4 = [10, 20, 30, 40, 50]
// tip3과 tip4의 사이에 '1000'이라는 숫자를 더해서 한개의 배열로 반환.
console.log([...tip3, 1000, ...tip4]);

// 다차원 배열에서 최소, 최대값 반환.
console.log(Math.max(...tip4));

// 다차원 배열을 한 줄로 표기
const tip5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
// 다차원 배열에서 최솟값, 최댓값 찾기
Math.max(...tip5.flat())

const tip6 = [
  [[1, 2], [1, 2], [1, 2]],
  [[1, 2], [1, 2], [1, 2]],
  [[1, 2], [1, 2], [1, 2]]
]
console.log(tip6.flat(Infinity)); // 모두 다 펼치기


// 채우기

// Array.prototype.fill()은 배열의 시작~끝 인덱스 값을 정적인 값 하나로 채움.
const tip7 = new Array(10).fill(0) // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Array.from()은 배열의 element를 1개 단위로 나눠서 새로운 Array를 생성
const tip8 = Array.from('우리집고양이세상제일귀여움') // ['우', '리', '집', '고', '양', '이', '세', '상', '제', '일', '귀', '여', '움']



// splice()
// 배열의 요소를 추가, 제거 또는 교체.
// 메소드는 3개의 arguments 를 받는다.
// 첫 번째는 삭제나 추가를 시작할 index.
// 두 번째는 삭제할 요소의 개수.
// 세 번째 부터는 추가할 요소들.
// 세 번째 부터는 추가할 요소가 없다면 생략할 수 있음, 그러면 요소만 삭제.

const spliceArr = [1, 2, 3];
// case 1. spliceArr이라는 배열의 2번째[1]에 0개를 삭제하고 10,20,30을 추가.
spliceArr.splice(1, 0, 10, 20, 30)
console.log(spliceArr);

console.log('---');
const test = [10, 20, 30, 40, 50]
const x = [1, 2, 3]

test.splice(1, 0, ...x);
test.splice(7, 0, ...x);
console.log(test); // [10, 1, 2, 3, 20, 30, 40, 1, 2, 3, 50]

// case 2. test2의 3번째 배열[2] 1개를 삭제하고, 5를 넣는다.
const test2 = [10, 20, 30, 40, 50]
test2.splice(2, 1, 5)
console.log(test2); // [10, 20, 5, 40, 50]

// case 3. 3번째[2] 배열부터 모두 삭제
const test3 = [10, 20, 30, 40, 50];
test3.splice(2)
console.log(test3);


// case 4. 원본 데이터 영향 없이 원하는 값 추출
// slice()
const myArray = ["apple", "banana", "cherry", "durian", "strawberry"]
console.log(myArray.slice(1, 4));   // 콘솔에 myArray의 2번[1]부터 4개의 값을 출력.
console.log(myArray);               // 원본은 그대로 살아있음

// case 5. 실무 예제
// 전개구문 활용하면 하나의 대괄호로 묶어서 사용하기도.
const tip9 = [1, 2, 3, 4, 5];
console.log([...tip9.slice(0, 2), 1000, ...tip9.slice(2, 5)]); // [1, 2, 1000, 3, 4, 5]




// forEach()
/*
* 함수(callbackfn): (value: number, index: number, array: number[]
* forEach() 메소드는 배열의 각 요소에 대해 주어진 함수를 실행.
* 이 때, 함수는 인자로 배열 요소, 인덱스를 받는다.
* Array의 Element를 순환하면서 해당 요소를 함수로 전달되며 각 요소에 대해 실행된다.
  */

// forEach(함수)
const forArr = [10, 20, 30, 40, 50]
const testArr = ['A', 'B', 'C', 'D', 'E']
forArr.forEach(function(item, index, array) {
  console.log(index, item, testArr[index]);
});
// 0 10 'A' ~ 4 50 'E'까지 순차적으로 반환


const arr1 = Array(100).fill(0);
const arr2 = []


// forEach 코드 1 : 기본 익명함수.
// arr1.forEach(function(item, index) {
//   arr2.push(index + 1)
// });

// forEach 코드 2 : 화살표 함수.
// arr1.forEach((item, index) => arr2.push(index + 1));

// forEach 코드 2 : 화살표 함수로 짝수만 출력.
arr1.forEach((item, index) => {
  if (index % 2 !== 0) {
    arr2.push(index + 1);
  }
});

console.log(arr2);


// DOM에서의 forEach()
// Array에서 forEach와 DOM의 nodeList에서 forEach는 다르다.(IE 지원 X)
document.querySelectorAll('.nav').forEach((item) => console.log(item.innerText));


// forEach() 예제
const avengers = ['spiderman', 'ironman', 'hulk', 'thor'];
const newAvengers = [];
avengers.forEach(function(item) {
  newAvengers.push('💖' + item + '💖');
});
console.log(newAvengers);



const j = [1, 2, 3, 4, 5]
const s = []

console.log(
  s = j.pop()
);