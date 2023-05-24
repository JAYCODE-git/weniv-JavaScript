// bigO: O(1) : 기존의 원소들을 이동시키지 않고, 새로운 원소를 추가하거나 삭제하므로 성능이 좋다.

let testArray = [1, 2, 3, 4]

// push의 bigO는 O(1).
testArray.push(5)

// pop의 bigO은 O(1).
testArray.pop()

// unshift의 bigO는 O(n).
testArray.unshift(0)

// splice의 bigO는 O(n) ~ O(1).
// index가 변경되는 경우, O(n)이고, 그렇지 않은 경우 O(1)이다.
testArray.splice(2, 1, 6)


console.log(testArray)