
// * fetch()로 console.log() 출력
// 비동기 통신을 하기 때문에 초기에 pending 상태로 출력되고, result를 찍어보면 fulfilled 상태로 출력된다.
let result1 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
console.log(result1);


// * fetch()로 json 파일 가져오기. = Response 객체
let result2 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
result2.then((data) => {
    console.log(data);
});

// * json()메소드로 json 파일을 객체로 변환.
let result3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
result3
    .then((data) => data.json())
    .then((data) => {
        console.log(data);
    })
    .catch((result) => {
        console.log(new Error(result));
    });

