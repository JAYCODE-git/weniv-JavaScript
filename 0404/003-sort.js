console.warn('1. sort 기능');
// Sort()
// 배열의 요소를 정렬하는데 사용.
// 메소드를 호출하면 배열을 변경하며, 정렬된 배열을 반환.
let avengers = ['아이언맨', '스파이더맨', '헐크', '토르'];
console.log(avengers.sort());



// * 숫자 sorting이 잘 되지 않는다. 즉 첫번째 num 기준으로 sorting(1, 11, 2 ...)
let num = [3, 1, 11, 200, 8, 6];
console.log(num.sort()); // [1, 11, 200, 3, 6, 8]


// * 숫자 정렬은 그냥 암기 or snippet 사용
//오름차순
num.sort((a, b) => a - b);

//내림차순
num.sort((a, b) => b - a);


// * 실무사용코드
function sort(key) {
  // click 변수가 True면?
  if (click) {
    // click 변수를 false로 설정.
    click = false
    // jsonData를 key에 따라 오름차순 정렬.
    var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
  }
  // click 변수가 false면?
  else {
    // click 변수를 True로 설정.
    click = true
    // jsonData를 key에 따라 내림차순 정렬.
    var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
  }
}