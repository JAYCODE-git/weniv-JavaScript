console.warn('1. 전개구문 할당');
// 전개 구문은 배열이나 객체와 같은 데이터 구조를 확장할 때 사용하는 문법입니다.
// 이를 통해 배열이나 객체를 쉽게 복사하거나, 새로운 배열이나 객체를 생성할 수 있습니다.
// spread 의미대로, Array나 Object의 데이터를 펼쳐놓는 것.



// ? Array Spread-syntax
const 과일들 = ['사과', '파인애플', '수박'];
const 생선들 = ['조기', '갈치', '다금바리'];
const 합치면 = [...과일들, ...생선들];
const 합치면2 = [과일들, 생선들];

console.log(합치면);
console.log(합치면2);


// ? Object Spread-syntax
const 위니브1 = { 개리: 1, 빙키: 2 };
const 위니브2 = { 라이캣: 3 };
const 위니브3 = { ...위니브1, ...위니브2 };
console.log(위니브3);

const user = {
  개리: '재직 중',
  빙키: '재직 중',
  라이캣: '재직 중',
  뮤라: '재직 중',
  해골왕: '재직 중',
}

weniv = {
      ...user, // 전개구문으로 user object 불러오기
  라이캣: '휴가',
          해골왕: '퇴사'
}
// 뒤에 있는 Object가 덮어져서 데이터 업데이트시 용이.
  console.log(weniv); // = 라이캣 : 휴가


// ? 구조분해 할당
console.warn('2. Destructuring');
const user2 = {
  개리: '재직 중',
  빙키: '재직 중',
  라이캣: '재직 중',
  뮤라: '재직 중',
  해골왕: '재직 중',
};

for (const [i, j] of Object.entries(user2)) {
  console.log(i, j);
};

const test1 = [
  [1, 2, [10, 20]],
  [3, 4, [30, 40]],
  [5, 6, [50, 60]]
]
// 배열의 구조를 1depth 분해
for (const [i, j, k] of test1) {
  console.log(i, j, k);
}

// 배열의 구조를 2depth 분해
for (const [i, j, [k, l]] of test1) {
  console.log(i, j, k, l);
}

// 배열의 구조를 Spread 전개구문으로 분해
const test2 = [
  [1, 2, 10, 20],
  [3, 4, 30, 40],
  [5, 6, 50, 60]
]

for (const [i, j, ...k] of test2) {
  console.log('Spread :', i, j, ...k);
}