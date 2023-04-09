// ! continue
console.warn('1. continue');

// break은 자신을 감싼 반복문만 탈출.
// 중첩되었을 때 상위 반복까지 벗어나지 않음.
// j가 break 되어도 i는 계속 반복된다.
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`break : ${i} x ${j} = ${i * j}`);
    // j 는 2 부터 반복 멈춤.
    if (j === 2) {
      break;
    }
  }
}

// break처럼 괄호 안의 반복문을 탈출하는 것이 아니라 다름 반복 loop로 넘김.
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    // j가 2가 아니라면 반복 안 하고넘김.
    if (j !== 2) {
      continue;
    }
    console.log(`continue : ${i} x ${j} = ${i * j}`);
  }
}