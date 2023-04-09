console.warn('1. for');
// * for문 기본
// for문을 사용하면 반복문을 사용할 수 있다.
const cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];
let text = "";
for (let i = 0; i < cars.length; i++) {
  text += '<section><h2>' + cars[i] + '</h2></section>'
}
console.log(text);



// ! 문제
// https://codingdojang.com/scode/408?answer_mode=hide
s = [1, 32, 80]

// ? undefined를 반환하는 이유?
// for문의 조건식에 i < s.length를 사용했기 때문에
// i가 2일 때, s[i + 1]을 호출하면 s[3]이 되는데
// s[3]은 존재하지 않기 때문에 undefined를 반환한다.
for (let i = 0; i < s.length; i++) {
  console.log(s[i], s[i + 1])
  console.log(s[i + 1] - s[i])
}

// ? length - 1을 사용?
// length - 1을 사용하면 s[2]까지만 반복하므로
// undefined 없이 s[2] - s[1]을 계산할 수 있다.
for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i], s[i + 1])
  console.log(s[i + 1] - s[i])
}

// ? i =1부터 시작?
// i = 1부터 시작하고 [i-1]을 사용하면 배열을 0부터 시작하는 것과 같은 효과를 낼 수 있다.
for (let i = 1; i < s.length; i++) {
  console.log(s[i - 1], s[i])
  console.log(s[i] - s[i - 1])
}



// ! for문 무한반복을 활용한 랜덤게임
// 무한반복.. 사용 금지!
// 메모리를 많이 잡아먹기 때문에 시스템 전체에 영향.
// 목적이 분명해야 함! 굳이 사용한다면 break로 멈추는 조건을 주거나 시간제한을 줄 것.
// 무한반복 랜덤게임 활용 예제

// ~~(Math.random()*100)
/*
let answer = Math.floor(Math.random() * 100)
let count = 0

for (; ;) {
  count += 1
  let userInput = parseInt(window.prompt('값을 입력해주세요!'))
  if (answer > userInput) {
    window.alert('UP!')
  }
  else if (answer < userInput) {
    window.alert('DOWN!')
  }
  else if (Number.isNaN(userInput)) {
    window.alert('다시 입력하세요!')
  }
  else {
    window.alert('Correct!')
    break
  }
}
console.log(`${ count }번째 맞추셨습니다!`)
*/


console.warn('2. while');
let x = 0;
while (x < 3) {
  console.log(x);
  x += 1
}

console.warn('3. do while');
// let input;
// do {
//   input = confirm('다음에도 저희와 함께 하시겠습니까?')
// } while (!input);
// // confirm이 나지 않으면 계속 input 띄우기를 반복
// console.log("감사합니다.");




// todo 암기 1. 구구단
// * for
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} ${i * j}`);
  }
}


// * while
let i = 2;
let j = 1;
while (i < 10) {
  //   // i++가 실행되면 j는 반복되어 10이 되기 때문에 j를 1로 초기화.
  j = 1;
  while (j < 10) {
    console.log(`while 구구단 ${i} * ${j} = ${i * j}`);
    j++;
  }
  i++;
}


console.warn('암기코드');
let star1 = 'hello world'
let result = ''

// todo 암기 2. 비어있는 변수에 다른 문자열의 인덱스를 순환해서 추가.
// * for
for (let i = 0; i < star1.length; i++) {
  result = star1[i] + result
}
console.log(result);

// * while
let count = 0;
let result2 = ''
while (count < star1.length) {
  result = star1[count] + result
  count++;
}
console.log(count);


// todo암기 3. 팩토리얼 5! 5* 4 * 3 * 2 * 1
// * for
let fact = 1;
for (let i = 1; i < 6; i++) {
  fact *= i
}
console.log('for :', fact);

// * while
let fact2 = 1;
let num = 1;
while (num < 6) {
  fact2 *= num
  num += 1
}
console.log('while:', fact2);