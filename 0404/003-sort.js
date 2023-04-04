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
console.log(num.sort((a, b) => a - b));
//내림차순
console.log(num.sort((a, b) => b - a));


// * 실무사용코드
function sort(key) {
  if (click) {
    click = false
    var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
  }
  else {
    click = true
    var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
  }
}