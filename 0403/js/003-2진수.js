// 2진수는 정보처리기사 정도에서만 필요
// 잘 몰라도 된다는 뜻...

let n1 = 10;
let n2 = 10.123123;
let n3 = 31;
let n4 = 1001;
let n5 = 1111;


// 31 // 가장 가까운 2의 승수는 몇?
// 32 // 100000
// 100000 - 1 = 11111
let s1 = '100000000000';
let s2 = '100,000,000,000';

console.log(parseInt(n1));
console.log(parseInt(n2)); // 소숫점이 없어짐, 권장
console.log(~~n2); // 소숫점이 없어짐, 코테 정도에서만 권합니다.

console.log(parseInt(n3, 2)); // 2진법으로 바꾸는 것이 아니라
console.log(parseInt(n4, 2)); // 2진법으로 된 숫자를 10진법으로 바꾸는 것입니다.
console.log(parseInt(n4, 8)); // 8진법으로 된 숫자를 10진법으로 바꾸는 것입니다.
console.log(parseInt(n4, 10)); // 10진법으로 된 숫자를 10진법으로 바꾸는 것입니다.
