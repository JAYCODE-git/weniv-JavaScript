class testArray {
    constructor(array) {
        this.array = array;
    }
    push(item) {
        return [...this.array, item]
    }
    pop() {
        return this.array.slice(0, -1)
    }
}

const myArray = new testArray([1, 2, 3, 4, 5]);

console.log(myArray);
console.log(myArray.pop());
console.log(myArray.push(10));


class UltraArray {
    constructor() {
        this.data = {};
        this.length = 0;
    }
    push(item) {
        this.data[this.length] = item;
        this.length += 1;
        return this.length;
    }
    pop() {
    }
}

const resultArray = new UltraArray(1, 2);

console.log(resultArray);
console.log(resultArray.pop());
console.log(resultArray.push(10));