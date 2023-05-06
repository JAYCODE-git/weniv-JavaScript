// 01 | promise 직렬형태 구현
(function message() {
    let hello = new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello');
        }, 100)
    }).then((result) => {
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(result + ' world');
            }, 100)
        }).then((message) => {
            console.log(message)
        })
    });
})();


// 02 : promise 병렬형태 구현
(function message2() {
    Promise.all([
        new Promise((resolve) => {
            setTimeout(() => {
                resolve('hello');
            }, 100)
        }),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve('world');
            }, 100)
        })
    ]).then(([hello, world]) => {
        console.log(`${hello} ${world}`);
    });
})();


// 01 : async & await 형태 구현
(async function message3() {
    const [hello, world] = await Promise.all([
        new Promise((resolve) => {
            setTimeout(() => {
                resolve('hello');
            }, 100)
        }),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve('world');
            }, 100)
        })
    ])
    console.log(`${hello} ${world}`);
})();