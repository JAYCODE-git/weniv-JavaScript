
// 정규표현식

'paullab CEO leehojun hello CEO'

// * 문자열 1개를 찾아서 replace
'paullab CEO leehojun hello CEO'.replace('CEO', 'CTO');

// * flag로 global(g)을 주어서 String 전체 변경.
'paullab CEO leehojun hello CEO'.replace(/CEO/g, 'CTO');

// * flag로 global(g)을 주어서 패턴을 찾아 Array로 반환.
'paullab CEO leehojun hello CEO'.match(/CEO/g);

// * flag로 global(g)을 주어서 패턴을 제거하고 Array로 반환.
// 실무에서 사용되는 경우는 거의 없음. 알고리즘 문제에서만 활용.
// 공백이 하나 더 추가되어서 나오기 때문에 length를 구할 때는 -1을 해줘야 한다.
'paullab CEO leehojun hello CEO'.split(/CEO/g);
// 알고리즘 문제 풀이할 때 주의 사항
// split을 하면 내가 원하는 갯수보다 1개가 더 추가되어 나온다
'!a!abc!abcd'.split('!');
'!!!'.split('!');       // 4개
'!a!a!a'.split('!');    // 4개
'a!a!a!'.split('!');    // 4개

// * flag로 global(g)을 주어서 패턴을 들어있는지 여부를 Boolean으로 반환.
(/CEO/g).test('paullab CEO leehojun hello CEO');


// * 3. 일반문자열
// / hello / g

// * 4. 처음과 끝
/*
/^ hello / g
/ hello$ / g
/^ hello$ / g
*/

// * 5. 모든문자 매핑(.)
/*
/ hello / g
/ h.llo / g
/ hello..world / g
*/

// * 6. 모든문자 매핑
// / h[eao]llo / g

// * 7. 범위
// / h[a - zA - Z0 - 9]llo / g

// * 8. 부정
// / h[^ ae]llo / g

// * 9. 그루핑 규칙
/*
/ (on | ues | rida) / gm //: 그룹 1로 3개 중 매칭되는 패턴 찾음
/(?:on|ues)/gm
/(on|ues)|(rida)/gm : 그룹1(on|ues)과 그룹2(rida)로 각각 매칭되는 패턴 찾음
/.(a | e | o)ll./ gm

/hello (?!world)/gm : hello 뒤에 world가 오지 않는 것 (네거티브 매칭)
/hello (?=world)/gm : hello 뒤에 world가 오는 것 (파지티브 매칭)
("hello hallo hello").match(/.(a|e|o)ll./g);
("hello hallo hello hello hi").match(/.(a|e|o)ll./g);
("hello hallo hello hello hi").match(/.[eao]ll./g);
*/

// * 10. 수량자
/*
_* : 앞에 있는 문자가 0개 ~ N개
_+ : 앞에 있는 문자가 1개 ~ N개
_? : 앞에 있는 문자가 0개 ~ 1개

{3} : 3개
{3,} : 3개 이상
{1,3} : 1개 ~ 3개

_* : 앞에 있는 문자가 0개 ~ N개 ({0,})
_+ : 앞에 있는 문자가 1개 ~ N개({1,})
_? : 앞에 있는 문자가 0개 ~ 1개 ({0,1})

/[0-9]{3}[-.* ][0-9]{4}[-.* ][0-9]{4}/gm
/[0-9]{2,3}[-.* ]?[0-9]{3,5}[-.* ]?[0-9]{4}/gm
/[0-9a-zA-Z]+@[0-9a-zA-Z]+.[a-zA-Z]+/gm
*/


console.warn('----------replace----------');
// * 11. 한글 (replace)
const string = `hojun, lee
gildong, hong
hojung, choi
junho, lee`


let result1 = string.replace(/(\w+), (\w+)/gm, "$2 $1");
console.log(result1);
let result2 = string.replace(/(\w+), (\w+)/gm, "$2_$1");
console.log(result2);
let result3 = string.replace(/(\w+), (\w+)/gm, "$1님 안녕하세요.");
console.log(result3);
let result4 = string.replace(/(\w+), (\w+)/gm, "$2 $1!!$1!!$1");
console.log(result4);




console.warn('----------문제풀이----------');
// ? 문제풀이
// * Q1. 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
// const solution1 = (my_string, letter) => my_string.split(letter).join('');

// 정규표현식 패턴은 문자열로 만드는 것이라 별도로 생성을 해줘야 한다.
function solution1(my_string, letter) {
    // 생성자 함수로 정규표현식 패턴을 만들어준다.
    // new RegExp(pattern:string, flags:string)
    // replace에서만 사용되는 것이 아니라 정규표현식이 들어가는 곳 모두에서 사용할 수 있습니다.
    let reg = new RegExp(letter, 'g')
    return my_string.replace(reg, '');
}
// new RegExp('B', 'g') 이렇게 사용하시거나 my_string.replace(/B/g, '')



// * Q2. 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
// match를 통해서 자연수를 찾아서 배열로 반환하고 모두 더하기.
const solution2_1 = (my_string) => {
    return my_string
        .match(/[0-9]/g)
        // .map(v => parseInt(v))
        // .reduce((a, c) => a + c, 0)
        .reduce((a, c) => parseInt(a) + parseInt(c), 0)
}



// * Q3. 머쓱이는 친구들과 369게임을 하고 있습니다.
// 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
// 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

const solution3_1 = (order) => {
    // null이 나올 수 있기 때문에 에러가 발생.
    return order.toString().match(/[369]/g).length
}

const solution3_2 = (order) => {
    // nullish 연산자를 통해 예외처리를 해주고 length를 반환.
    return (order.toString().match(/[369]/g) ?? []).length;
}


// * Q4. 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.
// https://school.programmers.co.kr/learn/courses/30/lessons/120913
"abc1Addfggg4556b".match(/\w{3}/g); // 문자만 3개씩
"abc1Addfggg4556b".match(/\d{3}/g); // 숫자만 3개씩
"abc1Addfggg4556b".match(/.{3}/g);  // 모든 문자 3개씩
"abc1Addfggg4556b".match(/[a-zA-Z0-9]{3}/g); // 문자와 숫자만 3개씩


//! 복습
const solution4_1 = (my_str, n) => {
    let reg = new RegExp(`.${{ n }}g`, 'g'); // 마지막 남은 것도 리텅해줘야 해서 오답
    return my_str.match(reg)
}
const solution4_2 = (my_str, n) => {
    let reg = new RegExp(`.{1,${n}}`, 'g'); // 1개 이상 n개 이하
    return my_str.match(reg)
}


// * Q5. 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
//! 복습
// https://school.programmers.co.kr/learn/courses/30/lessons/120864
const solution5 = (my_string) => {
    return (my_string.match(/\d+/g) ?? []) // \d+ : 숫자가 1개 이상인 것을 찾아서 배열로 반환하고 nullish 연산자를 통해 예외처리
        .reduce((a, c) => parseInt(a) + parseInt(c), 0)
}


// * 06. 정규표현식 그룹 연습문제
// https://jsalgo.co.kr/?page=2#

'87a99b00fww89e'.match(/[0-9][0-9][a-zA-Z]/g); // = (4) ['87a', '99b', '00f', '89e']
'87a99b00fww89e'.match(/(\d{2})([a-zA-Z])/g);   // = (4) ['87a', '99b', '00f', '89e']

'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev][0-9]/g); // (5) ['r1', 'e3', 'v2', 'v1', 'v9']   10이 뽑히지 않아서 오답.
'a10b9r10ce33uab8wc918v2cv11v9'.match(/[rev]\d+/g)    // (5) ['r1', 'e33', 'v2', 'v11', 'v9'] 33도 뽑혀서 오답.
'a10b9r10ce33uab8wc918v2cv11v9'.match(/([rev])(10|[0-9])/g); // (5) ['r10', 'e3', 'v2', 'v1', 'v9']

// 정답!
function solution(data) {
    let result = data.match(/([rev])(10|[0-9])/g).reduce((a, c) => a + parseInt(c.slice(1)), 0).toString()
    return `${result[0]}월 ${result[1]}일`
}




// * Reduce() 보강 설명
// reduce()는 누적값을 반환하는 함수.
[10, 20, 30].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        return accumulator + currentValue
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        console.log(currentValue.slice(1))
        return accumulator + currentValue
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        console.log(currentValue)
        console.log(currentValue.slice(1))
        console.log(parseInt(currentValue.slice(1)))
        return accumulator + parseInt(currentValue.slice(1))
    },
    0
);

['a10', 'a20', 'a30'].reduce(
    (accumulator, currentValue) => {
        return accumulator + parseInt(currentValue.slice(1))
    },
    0
);

['a10', 'a20', 'a30'].reduce((a, c) => a + parseInt(c.slice(1)), 0);
