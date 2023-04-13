
// ? this 값을 사용자의 의도대로 조작하기


console.warn('----------call()----------');
// * call() 메서드는 this를 사용자가 지정한 객체로 변경.
var peter = {
    name: 'Peter Parker',
    sayName: function () {
        console.log(this.name);
    }
}
var bruce = {
    name: 'Bruce Wayne',
}

// call() 메서드를 통해 this를 peter에서 bruce로 변경.
peter.sayName.call(bruce);


// * call()메서드는 arguments를 받을 수 있다.
var peter = {
    name: 'Peter Parker',
    sayName: function (감탄사) {
        console.log(this.name + 감탄사);
    }
}

var bruce = {
    name: 'Bruce Wayne',
}
// call() 메서드를 통해 this를 peter에서 bruce로 변경하고 !를 추가.
peter.sayName.call(bruce, '!');



console.warn('----------apply()----------');
var peter = {
    name: 'Peter Parker',
    sayName: function (is, is2) {
        console.log(this.name + ' is ' + is + ' or ' + is2);
    }
}
var bruce = {
    name: 'Bruce Wayne',
}

// * call()과 apply() 비교
// call()과 apply()의 차이점은 arguments를 Array로 전달할 수 있다는 점.
// call()은 arguments를 하나씩 전달.
// apply()는 arguments를 Array로 전달.
peter.sayName.apply(bruce, ['batman', 'richman']); // Bruce Wayne is batman or richman
peter.sayName.call(bruce, ['batman', 'richman']);  // Bruce Wayne is batman,richman or undefined


console.warn('----------bind()----------');
//bind() 메서드는 this를 사용자가 지정한 객체로 변경.
function sayName() {
    console.log(this.name);
}

var bruce = {
    name: 'bruce',
    sayName: sayName
}
var peter = {
    name: 'peter',
    sayName: sayName.bind(bruce)
}
peter.sayName();    // bruce
bruce.sayName();    // bruce
