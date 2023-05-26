
// 버블정렬 : 정렬이 처리되는 과정이 마치 거품이 올라오는 모습과 같다고 해서 붙여진 이름
let a = [1]             // 비교 : 0
let b = [3, 2]          // 비교 : 1 [2, 3]
let c = [3, 2, 1]       // 비교 : 2 [[2, 3], 1] [2, [1, 3]]
let d = [4, 3, 2, 1]    // 비교 : 3 [[3, 4], 2, 1] [3, [2, 4], 1] [3, 2,[1, 4]]


let myArr = [10, 9, 8, 5, 6, 1, 3, 4, 2, 1];

const bubbleSort = (arr) => {
    for (let idx = 0; idx < arr.length - 1; idx++) {
        // 원소의 위치를 변경해줍니다.
        if (arr[idx] > arr[idx + 1]) {
            // 구조분해할당으로 두 원소의 위치를 변경.
            [arr[idx], arr[idx + 1]] = [arr[idx + 1], arr[idx]]
        }
    }
    return arr;
}

const bubbleSortAdvanced = (arr) => {

    // for loop를 두번 사용해서, 두번째 for loop가 한번 돌때마다 가장 큰 원소가 배열의 맨 뒤로 이동시킨다.
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            // 원소의 위치를 변경해줍니다.
            if (arr[j] > arr[j + 1]) {
                // 구조분해할당으로 두 원소의 위치를 변경.
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }

        }
    }
    return arr;
}

console.log(bubbleSort(myArr))
console.log(bubbleSortAdvanced(myArr))