
console.warn('if');

/*
* if문은 조건이 true일 때만 실행.
* 그 밖의 상황인 조건이 거짓일 때 실행할 코드가 필요한 경우 사용하는 것이 else문.
*/

let scores = 69;
let money = 1000;

if (scores > 90) {
  document.write('참 잘했습니다!<br>');
  money += 100000
} else if (scores > 80) {
  document.write('잘했습니다!<br>');
  money += 10000
} else if (scores > 70) {
  document.write('했습니다!<br>');
  money += 1000
} else {
  money = 0
}
console.log(money + ' 원');

// if문 실습 1
// 사용자로부터 입력받은 나이에 따라 다른 인사말을 콘솔로 출력하는 프로그램을 작성하세요.
// 1. 나이가 18세 이상이면 "안녕하세요!"를
// 2. 10세 이상이면 "안녕! 반가워 꼬마친구! ” 를
// 3. 10세 미만이면 “부럽다…” 를 출력합니다.
// const age = parseInt(prompt("나이를 입력하세요!"));
// if (age > 18) {
//   console.log('안녕하세요!');
// } else if (age > 10) {
//   console.log('안녕! 반가워 꼬마친구!');
// } else if (age > 0) {
//   console.log('부럽다 ...');
// } else {
//   console.log('0 이상의 숫자를 입력해주세요!');
// }

// if문 실습 2
// 사용자로부터 입력받은 성적에 따라 성적을 출력하는 프로그램을 작성하세요.
// 1. 성적이 90점 이상이면 "A",
// 2. 80점 이상이면 "B",
// 3. 70점 이상이면
// 4. "C", 60점 이상이면 "D",
// 5. 그 외에는 “강해져서 돌아와라”를 출력합니다.
// const score = parseInt(prompt("성적을 입력하세요!"))
// if (score > 100) {
//   console.log('값이 너무 커요 🙄');
// } else {
//   if (score > 90) {
//     console.log('A');
//   } else if (score >= 80) {
//     console.log('B');
//   } else if (score >= 70) {
//     console.log('C');
//   } else if (score >= 60) {
//     console.log('60');
//   } else if (score >= 0) {
//     console.log('강해져서 돌아와라...🔥');
//   } console.log('숫자를 입력하세요! 😢');
// }

console.warn('삼항연산자');
// 삼항연산자 문제

const score2 = parseInt(prompt("성적을 입력하세요!"))
const result = score2 > 100 ? alert('숫자가 너무 커요 🙄')
  : (score2 > 90) ? console.log('A')
    : (score2 > 80) ? console.log('B')
      : (score2 > 70) ? console.log('C')
        : (score2 > 60) ? console.log('S')
          : (score2 >= 0) ? console.log('강해져서 돌아와라...🔥')
            : console.log('숫자를 입력하세요! 😢');