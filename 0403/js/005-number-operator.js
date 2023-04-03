// ? 1. 할당연산
console.warn('1. 할당 연산');
let x = 10;
x += 10; // x = x + 10;
console.log(x);



// ? 2. 단항 연산
console.warn('2. 단항 연산');
console.log(- (2), ': -(2)');     // -2
console.log(-(-2), ' : -(-2)');   //  2
console.log(+ (-2), ': +(-2)');   // -2
console.log(+ (+2), ': +(+2)');   // 2
console.log(+ (+'2'), "+(+'2')"); // 2



// ? 3. 증감 연산
console.warn('3. 증감 연산');
let num1 = 10;
let num2 = 10;
console.log(++num1);
console.log(--num1);
console.log(num2++);
console.log(num2--);



// ? 4. 단락회로 평가
console.warn('4. 단락회로 평가 ⭐️⭐️⭐️');
console.log(!"false");    // false
console.log(!"0");        // false
console.log(!false);      // true
console.log(!0);          // true
console.log('abc' / 2);   // NaN

console.log(!!NaN);       // false 부정+부정 반환
console.log(!!undefined); // false
console.log(!!null);      // false

// 이름이 입력되면 username 아니면 "무명 출력"
let username = "jay";
username = username || "무명"
console.log(username);  // = jay

