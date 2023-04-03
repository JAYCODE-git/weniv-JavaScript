
console.warn('5. 3항 연산자 ⭐️⭐️⭐️');

// ? 3항 연산자
// 조건식 ? 참일 경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식;
// 삼항연산자는 필요에 의해서만 사용. 
// 가독성 떨어지기 때문에 2개 이상 중첩하지 말 것.

// 삼항 연산자 기본 형태
let sale = true;
const won = sale ? '100원' : '200원';
console.log(won); // 100원.

// 삼항연산자 중첩 형태
const price = 6900;
const message = (price >= 9000) ? '비싸다' : (price >= 7000 ? '적당하다' : '저렴하다');
console.log(message); // 저렴하다.



// ? 3항 연산자 실습
// 통장에 100000원을 초과하면 '😎 초부자'
// 통장에 10000원을 초과하면 '😎 부자'
// 통장에 10000원 이하라면 '😢 부를 바라는 자'

const myMoney = 100001;
const result = (myMoney > 10000) ? '🤑 초부자' : (myMoney > 10000 ? '😎 부자' : '😢 부를 바라는 자');
console.log(result)