import ColaGenerator from "./module/colaGenerator.js";
import ColaEvents from "./module/colaEvents.js";

const itemGenerator = new ColaGenerator();
const itemEvents = new ColaEvents();

// 탑레벨 await : 최상위 모듈에서 실행되는 await
(async function () {
    await itemGenerator.setUp();
    itemEvents.bindEvent();
})()


// CLASS 객체를 통해 컴포넌트화
// COMPONENT라는 CLASS를 만들어서
// BUTTON 하나하나 다 클래스로 만들어주는 장점