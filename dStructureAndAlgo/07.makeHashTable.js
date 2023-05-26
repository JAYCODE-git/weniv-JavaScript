class SuperHash {
    constructor(size) {
        this.data = new Array(size);
        // [[['cat':'is cute'],['cat':'is cute'],['cat':'is cute']], [['dog':'is cool']], [['pig':'is smart']]]
    }

    //Hash function
    generateRandomHash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            // hash값을 임의로 어지럽게 만들기 위해 연산을 실행.
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }

        return hash;
    }


    // 값을 추가하는 함수 : insertion
    set(key, value) {
        // 값을 넣을 위치를 해쉬함수를 통해서 설정합니다.
        const address = this.generateRandomHash(key);

        // 기존 주소에 데이터가 없을 경우
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value]);

            // 기존 주소에 데이터가 있을 경우
        } else {
            // 같은 키를 사용하는 데이터가 없을 경우 list에 데이터를 추가합니다.

            for (let i = 0; i < this.data[address].length; i++) {
                // 같은 키를 사용하는 데이터가 존재할 경우 덮어씌웁니다.
                /**
                [
                    [
                        ['cat':'is cute'],['rabbit':'is cute'],['rat':'is cute']
                    ],
                    [['dog':'is cool']],
                    [['pig':'is smart']
                    ]
                ]
                */
                if (this.data[address][i][0] === key) {
                    this.data[address][i][1] = value;
                }
            }
            // 같은 키를 사용하는 데이터가 없을 경우 list에 데이터를 추가합니다.
            this.data[address].push([key, value]);
            return value

        }
        return value
    }

    get(key) {
        const address = this.generateRandomHash(key);
        const targetEl = this.data[address];
        if (targetEl) {
            // link list를 확인합니다.
            for (let i = 0; i < targetEl.length; i++) {
                // 찾고자 하는 대상의 key와 내가 전달한 key가 같은지 확인.
                if (targetEl[i][0] === key) {
                    return targetEl[i][1];
                }
            }
        }
        return undefined;
    }

    // 모든 키값을 배열로 반환합니다.
    keys() {
        const keyArray = [];
        // 우선 해쉬테이블안의 모든 데이터를 순회합니다.
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                // link list가 존재한다면
                if (this.data[i].length > 1) {
                    for (let j = 0; j < this.data[i].length; j++) {
                        keyArray.push(this.data[i][j][0]);
                    }
                } else {
                    keyArray.push(this.data[i][0][0]);
                }
            }
        }
        return keyArray
    }
}

const myHash = new SuperHash(50);

console.log(myHash.set('cat', 'is cute'));
console.log(myHash.set('dog', 'is cool'));
console.log(myHash.set('pig', 'is smart'));
console.log(myHash.set('rat', 'is small'));
console.log(myHash.get('cat'));
console.log(myHash.get('dog'));
console.log(myHash.set('is cute'))