
// * 커피를 주문하는 프로미스 객체를 생성합니다. 
// 생성자에는 약속을 지키기 위한 resolve와, 약속을 지키지 못했을 때를 대비한 reject 두 가지를 인자로 전달.
// excuter 함수는 resolve와 reject를 인자로 받음.
const orderCoffee = new Promise((resolve, reject) => {

    // * XMLHttpRequest 객체를 생성.
    const requestObj = new XMLHttpRequest();
    requestObj.open('GET', 'orderCoffee.txt');

    // * 서버에서 응답이 왔을 때 실행할 콜백함수를 작성.
    requestObj.onreadystatechange = () => {
        // readyState가 4이고 status가 200이면 서버가 준비되었다는 뜻.
        if (requestObj.readyState == 4 && requestObj.status == "200") {
            // 서버에서 전달받은 데이터를 'result'변수에 저장.
            const result = requestObj.responseText;

            // resolve 메소드가 실행되면 then() 호출.
            resolve(result);

            // reject 메소드가 실행되면 catch() 호출.
            // reject(result);
        }
    };
    // send() 메소드를 호출해서 서버에 요청을 보낸다.
    requestObj.send();

});

// * then 메소드를 사용하면 비동기 코드를 마치 동기적인 코드처럼 작성할 수 있다.
// resolve 메소드가 실행될때 전달된 인자는 then() 콜백함수의 인자로 전달.
// asyncResult는 resolve(result)메소드의 'result'인자를 전달받는 것.

// * 메소드체이닝을 활용해서 명령 실행.
// then().then()을 사용하면 여러개의 비동기 코드를 순차적으로 실행할 수 있다.
// then().catch()를 사용하면 비동기 코드가 실행되다가 에러가 발생했을 때 catch()가 실행된다.
orderCoffee.then((asyncResult) => {
    console.log(asyncResult);
    console.log('약속이 이루어졌습니다.');
    return asyncResult;
}).catch((error) => {
    console.log(new Error('커피주문이 정상적으로 이뤄지지 않았습니다.'));
})