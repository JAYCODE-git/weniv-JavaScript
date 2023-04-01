// * DOM
document.write('hello');


// * BOM
// window.alert('알림!') //: 브라우저에 메세지 다이얼로그를 띄웁니다.
// window.prompt('입력해!') //: 브라우저에 사용자의 데이터를 입력받을 수 있는 입력 창을 띄웁니다.
// window.confirm('확인!') //: true 혹은 false 값을 반환하는 다이얼로그를 띄웁니다.


//: 콘솔창에 로그 메세지를 보여줍니다.
console.log(10)
console.log(
  "%chello world%chello",
  "color:red;font-size:32px",
  "color:green;font-size:16px"
);


//: 콘솔창에 에러 메세지 표시.
console.error('ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR! ERROR!')
console.warn('WARNING! WARNING! WARNING! WARNING! WARNING! WARNING! WARNING! WARNING!')


//: 콘솔창에 데이터를 테이블 형태로 제공.
let data = {
  a: 10,
  b: 20,
  c: 30
}
let arr = [10, 20, 30]
console.table(data)
console.table(arr)


// : directory 요소가 갖고 있는 속성 표시
console.dir(data)
console.dir(arr)
console.dir(window)


// 계층 구조 표시
console.group('weniv')
console.group('team01')
console.log('CEO / Jay');
console.log('COO / Paul');
console.log('CDO / Ellie');
console.groupEnd()
console.group('team02')
console.log('FE / Jenny');
console.log('BE / Joy');
console.groupEnd()
console.group('team03')
console.log('Designers / Bella');
console.groupEnd()
console.groupEnd()