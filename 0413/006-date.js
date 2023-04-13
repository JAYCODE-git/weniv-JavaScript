
console.warn('------------------ 자주 사용되는 date 메소드 ------------------');

let d = new Date();
console.log(d);

// * 1일부터 시작. 날짜를 출력
d.getDate();

// * 0월부터 시작. 월을 출력 (+1해줘야하는 JS 환장포인트)
d.getMonth();

// * 0일부터 시작. 요일을 출력 (0123.. 일월화수...)
d.getDay();



// switch를 이용한 요일 출력
switch (d.getDay()) {
    case 0:
        console.log('일요일')
        break;
    case 1:
        console.log('월요일')
        break;
    case 2:
        console.log('화요일')
        break;
    case 3:
        console.log('수요일')
        break;
    case 4:
        console.log('목요일')
        break;
    case 5:
        console.log('금요일')
        break;
    case 6:
        console.log('토요일')
        break;
    default:
        console.log('날짜의 양식이 잘못되었습니다.')
        break;
}


console.warn('------------------ 주의해야할 date 메소드 ------------------');

d.getHours()
d.getMinutes()
d.getSeconds()
d.getFullYear() // d.getYear() // 1900년도부터 연도 계산, 쓰지 않습니다. 잊어버리세요.



console.warn('------------------ date 메소드 활용 ------------------');

// * 멋사 수료일 직접 출력
new Date(2023 / 5 / 30 / 18) // = Fri Jun 30 2023 18:00:00 GMT+0900 (한국 표준시)

// * 오늘 날짜를 출력
today = new Date() // today의 지정 로캘은 KST다.

//UTC와 today의 지정 로캘 KST와의 차이는 -9시간이다.
today.getTimezoneOffset() / 60

today.toString();     // -> Fri Jul 24 2020 12:30:00 GMT+0900 (대한민국 표준시)
today.toTimeString(); // -> 12:30:00 GMT+0900 (대한민국 표준시)

today = new Date('2023/1/20/10:00:00')
today.toString();
today.toISOString();
today.toISOString().slice(0, 10);
today.toISOString().slice(0, 10).replace(/-/g, '')

//http://www.w3bai.com/ko/tags/ref_language_codes.html#gsc.tab=0
//http://www.w3bai.com/ko/tags/ref_country_codes.html#gsc.tab=0
today.toLocaleString('ko-KR'); // -> 2020. 7. 24. 오후 12:30:00
today.toLocaleString('en-US'); // -> 7/24/2020, 12:30:00 PM
today.toLocaleString('ja-JP'); // -> 2020/7/24 12:30:00


const dayNames = [
    '(일요일)',
    '(월요일)',
    '(화요일)',
    '(수요일)',
    '(목요일)',
    '(금요일)',
    '(토요일)'
];
// getDay 메서드는 해당 요일(0 ~ 6)을 나타내는 정수를 반환한다.
const day = dayNames[today.getDay()];

const year = today.getFullYear();
const month = today.getMonth() + 1;
const date = today.getDate();
let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
const ampm = hour >= 12 ? 'PM' : 'AM';
