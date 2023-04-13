
// ? JSON 메서드
console.warn("------ JSON 메서드 ----------");

// * JSON.parse() : JSON 문자열을 자바스크립트 객체로 변환 ( String => Object)
// * Json.stringify() : 자바스크립트 객체를 JSON 문자열로 변환 (Object => String)

// JSON 메서드는 JSON 문자열을 자바스크립트 객체로 변환하거나, 
// 자바스크립트 객체를 JSON 문자열로 변환할 때 사용.
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
const str = JSON.stringify(json);
console.log(obj); // = {"result":true, "count":42}
str // => "{"result":true, "count":42}"


// Array 객체를 JSON 문자열로 변환
const arr = '[1, 2, 3]';
const arrObj = JSON.parse(arr);
console.log(arrObj);


// JSON.parse() 메서드를 사용하면 깊은 복사가 가능하다.
// 깊은 복사는 객체의 참조를 복사하는 것이 아니라, 객체의 값을 복사하는 것을 말한다.
// 깊은 복사를 하지 않으면, 원본 객체의 값이 변경되면 복사된 객체의 값도 변경된다.
// 깊은 복사를 하면, 원본 객체의 값이 변경되어도 복사된 객체의 값은 변경되지 않는다.
let l = [10, 20, 30];
let a = JSON.parse(1); // Template literal 사용시 에러 발생
a[0] = 1000;

console.log(l); // => [10, 20, 30]


