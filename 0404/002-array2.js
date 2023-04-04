// Map
console.warn('1. Map');
// map은 단골 면접질문
// map() 메소드는 배열의 각 요소에 대해 주어진 함수를 실행하고
// 결과를 새로운 배열로 반환! 배열로 반환한다는 것이 map의 중요한 포인트

// * map() 실행 예시
const mapArr = [1, 2, 3, 4, 5]
mapArr.map(function(item, index) {
  return item + 10;
}) // = [11, 12, 13, 14, 15]

mapArr.map((item) => item ** 2) // = [1, 4, 9,  16, 25]

// 0부터 100까지 배열로 만들기
const hundred = Array(100).fill(0).map((item, index) => index + 1)


// ? 맵 실무 활용

const tip12 = [
  {
    "_id": "642ba3980785cecff3f39a8d",
    "index": 0,
    "age": 28,
    "eyeColor": "green",
    "name": "Annette Middleton",
    "gender": "female",
    "company": "KINETICA"
  },
  {
    "_id": "642ba398d0fed6e17f2f50c9",
    "index": 1,
    "age": 37,
    "eyeColor": "green",
    "name": "Kidd Roman",
    "gender": "male",
    "company": "AUSTECH"
  },
  {
    "_id": "642ba39827d809511d00dd8d",
    "index": 2,
    "age": 39,
    "eyeColor": "brown",
    "name": "Best Ratliff",
    "gender": "male",
    "company": "PRISMATIC"
  }
]
const ages = tip12.map((item) => item.age);
console.log(ages);



// ? 2. filter
// filter()는 기존의 배열에서 특정 조건을 만족하는 요소들만 추출하여 새로운 배열을 생성.
// 특정 숫자나, 필요한 정보를 가진 조건의 element만 추출할 때 유용.
console.warn('2. filter');

// 1. 짝수만 표시
const filterArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filterArr.filter((item) => item % 2 === 0)


// 2. 짝수만 표시하고 배열 값 모두 더하기
function quest(num) {
  // 길이가 'num'인 배열을 생성.
  return Array(num)
    .fill()
    .map((_, i) => i + 1)             // 빈 num 요소에 (index+1)를 순회시켜 1부터 array 반환.
    .filter((item) => item % 2 === 0) // 배열을 짝수만 filtering 해서 array 반환.
    .reduce((a, c) => a + c, 0)       // 'reduce()' 메소드를 사용하여 짝수의 합계를 계산.
}


// 3. 모음 제거
// 배열이 특정 요소를 포함하고 있는지 판별하는 includes 메소드를 활용해서 '!'모음이 아닌 요소로 new array를 생성.
Array.from('Hello World').filter((v) => !['a', 'e', 'i', 'o', 'u', ' '].includes(v));


console.warn('3. Reduce');
// ? Reduce()
//배열의 각 요소에 대해 주어진 리듀서 (reducer) 함수를 실행하고, 하나의 결과값을 반환.
// reduce(a, c) 기본 형태 그냥 외우기.

const arr1 = [1, 2, 3, 4, 5]
arr1.reduce((a, c) => a + c, 0) // 모두 더하기

// reduce()사용시 마지막에 초기값 ',0' 항상 넣어줄 것!
// 변수가 비어 있으면 0으로 표시됨. 초기값 없으면 error.
const arr1 = []
arr1.reduce((a, c) => a + c, 0)




// ? includes
console.warn('4. includes');
// 포함되어 있는지 t/f 반환
const inc = ['hello', 'world', 'jay']
console.log(inc.includes('hello')) // true
console.log(inc.includes('allie')) // false
console.log(inc.includes('hell'))    // false


// ? join
console.warn('5. join');
const join1 = ['hello', 'world', 'jay']
join1.join('!')
console.log(join1);

const join2 = ['010', '1234', '5678']
join2.join('-')
console.log(join2);