
// ?  재귀함수
console.warn('재귀함수');

// 재귀함수 중요도는 높지 않음
// 다이나믹 프로그래밍, 메모라이징 기법 등을 사용하는 순간이 오면 조금 중요해짐.

// * 1. 재귀함수란?
// 자기 자신을 호출하는 함수
// 재귀함수는 반복문을 대체할 수 있음. (반복문보다 느림!)
// 실무에서는 재귀함수를 사용하지 않음.
// 알고리즘 문제 풀 때만 사용(팩토리얼, 팰린드롬, 머지소트, 병합정렬, 퀵정렬 ...)
// 메모리를 많이 사용함. (스택 메모리 사용)

// * 2. 재귀함수 예시 - 팩토리얼

// 1) 반복문
factorial1 = 1;
for (let i = 2; i < 6; i++) {
    factorial1 *= i;
}
factorial1 // = 120

// 2) 재귀함수
function factorial2(n) {
    if (n <= 1) { // 종료조건 1 이하 (종료조건 없으면 무한반복 주의!)
        return n
    } return n * factorial2(n - 1)
}
factorial2(5)

//                 return               최종값
// factorial(5)    5 * factorial(4)    5 * 24 == 120
// factorial(4)    4 * factorial(3)    4 * 6 == 24
// factorial(3)    3 * factorial(2)    3 * 2 == 6
// factorial(2)    2 * factorial(1)    2 * 1 == 2
// factorial(1)    1


// * 3. 재귀함수 예시 누적합
// 이렇게 일일이 순회하지 않고 구할 수 있는 값이기 때문에 2개다 비효율 적인 코드.
// 특히 소수 구하는 문제 같은 곳에서 2중 for문 사용하는 것도 매우 비효율 적입니다.

// 반복문
result = 0
for (let i = 1; i < 1001; i++) {
    result += i
}
result

// 재귀함수
function sigma(n) {
    if (n <= 1) { // 종료조건 없으면 무한반복입니다.
        return n
    }
    return n + sigma(n - 1)
}
sigma(1000)

// 아래처럼 수학 수식 사용하세요.
const n = 1000
console.log(n * (n + 1) / 2)





// * 4. 재귀함수 예시 - 문자열 뒤집기
// 2. 문자열 뒤집는 것
result = ''
for (const i of 'hello world') {
    result = result + i
}
result

result = ''
for (const i of 'hello world') {
    result = i + result
}
result

// 'h' + '' // 1번째 순회
// 'e' + 'h' // 2번째 순회
// 'l' + 'eh' // 3번째 순회

function reverse(txt) {
    if (txt.length <= 1) {
        return txt
    }
    return txt[0] + reverse(txt.slice(1))
}
reverse('hello world')

function reverse(txt) {
    if (txt.length <= 1) {
        return txt
    }
    return reverse(txt.slice(1)) + txt[0]
}
reverse('hello world')

// 호출             return                  최종값
// reverse('hello')    reverse('ello') + 'h'   'olle' + 'h' == 'olleh'
// reverse('ello')     reverse('llo') + 'e'    'oll' + 'e' == 'olle'
// reverse('llo')      reverse('lo') + 'l'     'ol' + 'l' == 'oll'
// reverse('lo')       reverse('o') + 'l'      'o' + 'l' == 'ol'
// reverse('o')        'o'