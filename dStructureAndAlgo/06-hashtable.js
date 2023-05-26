
const myHash = { two: 2, three: 3 };

// 값을 insertion
myHash.one = 1; // { one: 1 }

// 값을 access
myHash.one = 2;  // 1
myHash.two = 10; // 2

// 값을 search
myHash.three; // 3

// 값을 deletion
delete myHash.three; // { one: 1, two: 2 }
