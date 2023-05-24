// 정렬된 두개의 배열을 병합 하나의 정렬된 배열로 만들기
// [] + []

const mergeArray = (arr1, arr2) => {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeArray([1, 22, 30, 4, 5], [6, 2, 8, 7, 10])); // => [1, 2, 4, 5, 6, 7, 8, 10, 22, 30]