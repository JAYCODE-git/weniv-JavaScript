// * object 구조
console.warn('1. Object 구조');
const user = {
  name: "Jay",
  age: 53,
  from: "korea",
  ask: function() {
    console.log(`😈 my name is ${ this.name }`);
  },
  0: '0123456789'
}
// object에 key로 접근해서 value 값 반환
console.log(user.name);
console.log(user.age);
console.log(user['name']);
console.log(user['from']);
console.log(user['0']); // 0123456789
console.log(user[0]);   // 0123456789

user.ask(); // 함수 호출도 가능
console.log('age' in user); // true
20 in [10, 20, 30, 40] //  false : in 연산자는 key를 순회


console.warn('2. Object의 Method')
const aespa = {
  members: ['카리나', '윈터', '지젤', '닝닝'],
  from: '광야',
  sing: function() {
    return "적대적인 고난과 슬픔은 널 더 popping 진화시켜!"
  }
};
// ⭐️⭐️
console.log(aespa.hasOwnProperty('newjeans')); // false
console.log(aespa.hasOwnProperty('sing'));     // true

// ⭐️⭐️⭐️
// Object.keys(), Object.values() ... 불편한 코드.
// 다른 언어는 aespa.keys()와 같은 형식으로 가능한데 JS는 'Object.' 를 붙여줘야함...
console.log(Object.keys(aespa));
console.log(Object.values(aespa));


console.warn('3. 유사배열');
// * 배열과 비슷해 보이는 이 형태의 이름은 '유사배열'
// 같은 요소로 만들어도 array가 순회할 때 더 빠르다.
const arr = {
  0: 10,
  1: 20,
  2: 30,
  length: 3
}
console.log(arr[0])