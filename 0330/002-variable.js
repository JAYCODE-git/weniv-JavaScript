// 변수(변할 수 있는 값) : var, let
// 상수(변하지 않는 값, pie, DOM ...) : let

if (true) {
  const x = 100;
  console.log(x); // = 100 변하지 않는 값
}
// = 괄호 밖으로 유효범위를 벗어나면 표시되지 않음.
console.log(x)


// const는 값이 변경되지 않기 때문에 Error
const k = 10;
k = 12  // Error!


// const 변수명이 가리키는 값은 동일한데 그 값(Box) 안에 데이터만 추가된 것이기 때문에 값이 변경된 걸로 보임.
const kk = []
kk.push(10)
