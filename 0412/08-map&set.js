
// ? Map & Set
let m = new Map();

// Map은 key와 value를 한 쌍으로 저장하는 자료구조.
// Map은 key를 중복해서 저장할 수 없다.

// * set(key, value) : Map에 key와 value를 저장.
m.set('하나', 1);
m.set(1, '하나');
m.set(true, 1);
m.set(false, 0);


// * get(key) : Map에서 key에 해당하는 value를 반환.
m.get('하나'); // 1

// get을 사용할 때는 변수명을 넣어주는 것이 좋다.
m.set([1, 2, 3], 'Really?')
m.get([1, 2, 3]) // undefined

let x = [1, 2, 3];
m.set(x, 'Really?');
m.get(x); // 'Really?'


// * has(key) : Map에 key가 있는지 확인.
m.has('하나'); // true
m.has('둘'); // false


// * delete(key) : Map에서 key와 value를 삭제.
m.delete('하나'); // true
m.has('하나'); // 제거되어서 false


// * size : Map의 크기를 return.
m.size; // 3


// !복습 map생성방법
let data1 = new Map([['one', 1], ['two', 2]]) // O
let data2 = new Map(Object.entries({ 'one': 1, 'two': 2 })) // O
let data3 = new Map({ 'one': 1, 'two': 2 }) // X
// let data = new Map('hello world') // X
// let data = new Map([10, 20, 30, 40]) // X


// * map의 순회
// Object.entries() : 객체를 배열로 변환.
// for of : 배열의 요소를 순회.
let data = { 'one': 1, 'two': 2 }
for (const i of Object.entries(data)) {
    console.log(i)
}

// 직접 순회가 가능한 Map!
let mapLoop = new Map();

mapLoop.set('하나', 1) // 메서드 체이닝
    .set('둘', 2)
    .set('셋', 3)
    .set('넷', 4)


for (const i of mapLoop) {
    console.log(i)
}

for (const [key, value] of m) {
    console.log(key, value);
}

// Object에서는 Object.keys()를 사용해서 key값만 가져올 수 있었음.
// Map에서는 key와 value를 한번에 가져올 수 있음.
mapLoop.keys()
mapLoop.values()
mapLoop.entries()


//! 복습
// Map -> Object 간의 형변환

let 맵 = new Map(Object.entries({ 'one': 1, 'two': 2 }))
let 오브젝트 = Object.fromEntries(맵)

let map = new Map(); // 키 값의 중복이 안됩니다.
map.set('이호준', 1)
map.set('이호준', 2)
map.set('이호준', 3)
