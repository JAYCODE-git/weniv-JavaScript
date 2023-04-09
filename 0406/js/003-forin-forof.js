let arr = [10, 20, 30, 40, 50]
let obj = { 'one': 100, 'two': 200, 'three': 300 }


console.warn('1. for...in');
// ? for ... in은 (array:index), (object:key)를 순회.
// * 1. for...in은 Object를 순회할 때 key를 가져오는데 Array는 key가 없으므로 index를 가져온다.
// computed 문법을 통해 [i]를 순회하여 Array의 index를 가져오는 것.
for (const i in arr) {
  console.log('for in:', arr[i]);
}

// * 2. for...in은 Object를 순회할 때 key를 가져온다.
for (const i in obj) {
  console.log('for of:', obj[i]);
}



// * 3. String을 순회하며 index를 가져온다.
let test = 0;
// repeat() 메서드는 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환.
for (const i in '.'.repeat(10)) {
  // parseInt()는 문자열을 정수로 변환.
  // +=는 더한 값을 다시 할당.
  // test = test + parseInt(i)
  test += parseInt(i)
}
// 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9
// 45
console.log(test);




// ? for ... of는 value를 순회.
console.warn('2. for...of');

// 1. for...of Array
let arr2 = [10, 20, 30];

for (const item of arr2) {
  console.log(item);
}

// 2. for ...of String
for (const item of '힘내') {
  console.log(item);
}

// ! 문제 | 두 수의 합을 구하는 코드를 for 문으로 구현
// https://codingdojang.com/scode/408?answer_mode=hide

// * for
let num = [1, 3, 4, 6, 7, 14, 20]
for (let i = 0; i < num.length - 1; i++) {
  //length가 홀수라서 - 1을 주고 짝수로 만들어 줌.
  console.log('number:', num[i], num[i + 1])
  console.log('result:', num[i + 1] - num[i])
}

// * for in
// ! 복습해보기 뭔지 잘 모르겠음
for (let i in num) {
  const index = parseInt(i);
  if (index < num.length - 1) {
    console.log('number:', num[index], parseInt(num[index + 1]));
  } else {
    console.log('number:', num[index]);
  }
}



// ! 문제 | 다음 수학 점수의 평균을 구하세요.
let math = [10, 99, 89, 70]
let result = 0;
for (let i in math) {
  result += math[i]
}
console.log(`수학점수 평균 : ${result / math.length}`);


// ? user의 나이 평균을 구하세요.
// 다음 user의 나이 평균을 구하세요.
let user = [
  {
    "_id": "642e3071c61a23c70ae6076b",
    "index": 0,
    "age": 31,
    "name": "Hicks Garza",
    "gender": "male",
  },
  {
    "_id": "642e3071ecd6f90a87d64731",
    "index": 1,
    "age": 32,
    "name": "Ayers Harrington",
    "gender": "male",
  },
  {
    "_id": "642e3071cef9ddc131f047fb",
    "index": 2,
    "age": 39,
    "name": "Lamb Adams",
    "gender": "male",
  }
]

// for in은 [idx]로 순회.
let inAnswer = 0;
for (const i in user) {
  inAnswer += user[i]['age']
}


// for of는 배열문법(dot, computed)으로 순회,
// ! 1왜 i인거임?
let ofAnswer = 0;
for (const i of user) {
  // ofAnswer += i.age
  ofAnswer += i['age']
}
console.log('for..in: ', parseInt(inAnswer / user.length));
console.log('for..of: ', (ofAnswer / user.length).toFixed(2)); //toFixed로 소수점 두자리까지 표시



// ! 여기 더 공부해보자
let user2 = [
  {
    "_id": "642e3071c61a23c70ae6076b",
    "index": 0,
    "age": 31,
    "name": "Hicks Garza",
    "gender": "male",
  },
  {
    "_id": "642e3071ecd6f90a87d64731",
    "index": 1,
    "age": 32,
    "name": "Ayers Harrington",
    "gender": "male",
  },
  {
    "_id": "642e3071cef9ddc131f047fb",
    "index": 2,
    "age": 39,
    "name": "Lamb Adams",
    "gender": "male",
  },
  {
    "_id": "642e3071cef9ddc131f047fb",
    "index": 2,
    "name": "Lamb Adams",
    "gender": "male",
  }
]


let s = 0;
for (const i of user2) {
  console.log(i)       // index
  console.log(i.age)   // age
  console.log(s)       // 결과?
  s += i.age ?? 0
}
console.log('user2:', (s / user2.length).toFixed(2))


for (const i of user2.map((v, i) => v.age)) {
  if (!!i) {
    s += i
  }
}
console.log((s / user2.length).toFixed(2))

// ! 여기까지 이해가 잘 안됨


// ! 암기 : 맵으로 새 배열을 생성하고 undefined(=0)은 다 삭제할 거야!
user
  .map(v => v.age)
  .filter(v => !!v)
  .reduce((a, c) => a + c, 0)
