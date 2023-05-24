// 배열메소드를 사용한 방법
const reverseArr = (str) => {
    return Array
        .from(str)
        .reverse()
        .join('')
}
console.log(reverseArr("hello"));


// 전개구문을 사용한 방법
const reverseSpread = (str) => {
    return [...str].reverse().join('')
}
console.log(reverseSpread("hello"));


// for Loop를 사용한 방법
const reverseLoop = (str) => {
    if (str.length < 2 || typeof str !== 'string') {
        return '문자열을 넣어주세요'
    }
    const backwards = [];
    const lastIndex = str.length - 1;

    for (let i = lastIndex; i >= 0; i--) {
        backwards.push(str[i]);
    }

    return backwards.join('');
}

console.log(reverseLoop("hello"));

