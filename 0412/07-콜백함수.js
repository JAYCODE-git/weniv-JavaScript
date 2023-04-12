
// ? 콜백함수
// 함수를 아규먼트로 전달해서 언젠가는 사용해줄게!
function four(a, b, c) {
    let z = c(a, b) + c(a, b)
    return z * 2
}
four(7, 3, one)


// * callback 예제2
function callbackTest(a, b) {
    let result = b(...a) * 2
    return result
}
callbackTest([10, 20, 11, 21, 29, 17], Math.min)


// * callback 예제3
// map 함수는 배열의 각 요소를 순회하면서 콜백함수를 실행하고 새로운 배열로 return.
let arr = [10, 20, 11, 21, 29, 17]
arr.map((v, i) => v * 2)


// 아래와 같이 했을 경우에는 함수의 순수성, 순수함수의 장점을 살릴 수 없습니다.
// 외부에서 직접 값을 가져오는 것을 지양해주세요.
function four(a, b, c) {
    let z = one(a, b) + one(a, b)
    return z * 2
}
four(7, 3, one)

