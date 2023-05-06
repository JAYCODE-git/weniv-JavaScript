let start = Date.now();

const result = (x) => {
    console.log(`${x}가 실행되는데 걸리는 시간 : ${Date.now() - start}`);
}

const asyncBlocking = () => {
    return new Promise((resolve) => {
        let i = 0;
        while (i < 99999) {
            i++
        }
        resolve("asyncBlocking Finished")
    });
}

setTimeout(() => {
    result('setTimeout Finished')
}, 100);

result('동기식코드 1');
// 프로미스 객체를 만드는 과정은 동기적으로 진행됩니다.
result(asyncBlocking().then((txt) => {
    result(txt);
}));
result('동기식코드 2');
