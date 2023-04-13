
console.warn('1. set')
// 집합, 합집합, 교집합, 차집합, 여집합
// 실무에서 많이 사용되지 않지만 알고리즘 문제에서 필수로 사용되는 자료형.

// * 1. Set 객체 생성
let s = new Set('aabbcccccdd');
s.size;
console.log(s)
console.log(s.size)

// Quiz 1. 몇 명이 게시판에 게시물을 썼나요? 중복을 제거하고 몇 명인지 출력해보세요.
let board = ['jay', 'jay', 'jay', 'jay', 'jay', 'jay', 'jay', 'jay', 'paul', 'ellie', 'paul'];
let writer = new Set(board);
console.log(writer);
console.log(writer.size);

// Quiz 2. 각각 몇 개의 게시물을 작성하였나요?
// Answer 01
console.log('✅Answer 01');

// for of를 사용하여 writer의 요소를 하나씩 가져온다.
for (const i of writer) {

    // board.filter((e) => e === i)를 통해 board의 요소를 하나씩 가져와서 i와 같은지 확인하고 같은 요소를 배열로 반환한다.
    console.log(i, board.filter((e) => e === i));

    // length를 통해 배열의 길이를 구한다.
    console.log(i, board.filter((e) => e === i).length);
}

// Answer 02 | 어렵기 때문에 권장하지 않는 풀이.
console.log('✅Answer 02');
let map = new Map()
for (const i of board) {
    map.set(i, (map.get(i) || 0) + 1)
}

// * set 객체의 메소드
let createSet = new Set('aabbbccccdd');

//size는 set 객체의 크기를 반환.
createSet.size;

// has()는 값이 존재하는지 확인해서 boolean 값을 반환.
createSet.has('a'); // true 
createSet.has('f'); //

// add()는 값을 추가하는 메소드.
createSet.add('z');

// delete()는 값을 삭제하는 메소드.
createSet.delete('a');

// for of로 set 객체의 요소를 하나씩 가져오면 'b','c','d'를 출력.
for (const i of createSet) {
    console.log(i);
}


// * 교집합
let a = new Set('abc');
let b = new Set('cde');

// a에 filter를 적용하여 b에 있는 값이 있는지 확인하고 교집합을 반환.
let cro = [...a].filter(e => b.has(e));
console.log('교집합은 :', cro);


// * 합집합
// Set 객체는 중복을 허용하지 않기 때문에 전개구문을 사용하여 합집합을 만들 수 있다.
// let union = new Set([...a].concat(...b));
let union = new Set([...a, ...b]);
console.log(union);


// * 차집합
// 부정연산자를 사용하여 b에 있는 값이 a에 없는 값만 반환.
let dif = [...a].filter(e => !b.has(e));
console.log('차집합은 :', dif);


// ? Set 문제풀기
// Q1. 교집합의 개수
//두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.
function solution(s1, s2) {
    //solution 01
    return s1.length + s2.length - new Set([...s1, ...s2]).size;


    //solution 02
    // s1 = new Set(s1);
    // s2 = new Set(s2);
    // let cro = [...s1].filter(e => s2.has(e));
    // return cro.length;
}



// Q2. 369게임
//머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다.
//머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.

function solution(order) {
    // mySet 변수에 3, 6, 9를 담는다.
    const mySet = new Set([3, 6, 9]);

    // String(order)를 통해 숫자를 문자열로 변환하고 split을 통해 문자열을 배열로 변환.
    return String(order) // 예 : '29423'
        .split("") // ['2', '9', '4', '2', '3']
        .filter((num) => mySet.has(parseInt(num))).length;
}
