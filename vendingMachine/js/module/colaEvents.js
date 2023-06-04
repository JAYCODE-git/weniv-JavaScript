class ColaEvents {
    constructor() {
        // section-01 | 제품 선택
        const showCase = document.querySelector('.section1');
        this.btnSelect = showCase.querySelectorAll('.btn-cola');
        this.btnPush = showCase.querySelector('.btn-push');
        this.btnReturn = showCase.querySelector('.btn-return');
        this.btnGet = showCase.querySelector('.btn-get');
        this.itemList = showCase.querySelector('.cola-list');
        this.inputMoney = showCase.querySelector('#input-money');
        this.selectList = showCase.querySelector('.get-list');
        this.balance = showCase.querySelector('.bg-box p');

        // section-02 | 소지 금액
        const showMoney = document.querySelector('.section2');
        this.currentMoney = showMoney.querySelector('.current-money strong');

        // section-03 | 주문 내역
        const showOrder = document.querySelector('.section3');
        this.orderList = showOrder.querySelector('.get-list');
        this.orderTotal = showOrder.querySelector('.total-price .total');
    }


    // ? getter & setter
    //! getter & setter 선언 이 형식이 최선일까?
    get depositVal() {
        return this._depositVal;
    }
    get balanceVal() {
        return this._balanceVal;
    }
    set depositVal(value) {
        this._depositVal = value > 0 ? value : 0;
    }
    set balanceVal(value) {
        this._balanceVal = value ? value : 0;
    }


    // ? Event Binding
    bindEvent() {
        // * 1. 원화 쉼표 추가제거 이벤트
        const removeComma = amount => parseInt(amount.replace(/[^0-9\-]+/g, ''));
        const localString = amount => amount.toLocaleString('ko-KR') + '원'


        // * 2. 입금 이벤트
        this.btnPush.addEventListener('click', () => {
            // 입금액
            const depositVal = removeComma(this.inputMoney.value);
            // 소지금
            const currentVal = removeComma(this.currentMoney.textContent);
            // 잔액
            const balanceVal = removeComma(this.balance.textContent);

            // setter를 통해 depositVal 값 반환.
            this.depositVal = depositVal;
            this.balanceVal = balanceVal;

            if (this.depositVal < currentVal) {
                // 2-1. 소지금 === 소지금 - 입금액
                this.currentMoney.textContent = localString(currentVal - this.depositVal);
                // 2-2. 잔액 === 기존 잔액 + 입금액
                this.balance.textContent = localString(this.balanceVal + this.depositVal);
            } else {
                alert('소지금이 부족합니다.');
            }

            // 입금액 초기화
            this.inputMoney.value = '';
        });


        // * 3. 반환 이벤트
        this.btnReturn.addEventListener('click', () => {
            // ! 이렇게 변수를 중복으로 선언해 주는 게 최선일까?
            // 소지금
            const currentVal = removeComma(this.currentMoney.textContent);
            // 잔액
            const balanceVal = removeComma(this.balance.textContent);
            this.balanceVal = balanceVal;

            // 3-1. 소지금 === 소지금 + 잔액
            this.currentMoney.textContent = localString(currentVal + this.balanceVal);
            // 3-2. 반환 후 잔액 === 0
            this.balance.textContent = localString(0);
        });

        // * 4. 제품 선택 이벤트
        this.itemList.addEventListener('click', (e) => {
            // ! 이렇게 변수를 중복으로 선언해 주는 게 최선일까?
            // 잔액
            const balanceVal = removeComma(this.balance.textContent);
            this.balanceVal = balanceVal;

            if (e.target.nodeName === 'BUTTON') {
                // this.selectItemGenerator(e.target);
                // console.log(e.target.dataset.item);
                // console.log(e.target.dataset.count);
                // console.log(e.target.dataset.price);
                // console.log(e.target.dataset.img);
                // console.log(e.target);

                if (balanceVal >= e.target.dataset.price) {
                    // 제품을 선택하면 잔액 === 잔액 - 제품 가격
                    this.balance.textContent = localString(this.balanceVal - e.target.dataset.price);

                    // 선택한 제품의 카운트 === 카운트 - 1
                    e.target.dataset.count -= 1;

                    // 선택한 제품의 카운트가 0이면 버튼 비활성화
                    if (e.target.dataset.count <= 0) {
                        e.target.disabled = true;
                        e.target.classList.add('sold-out');
                    }

                    this.selectItemGenerator(e.target);
                } else {
                    alert('잔액이 부족합니다.');
                }
            }
        });


        // * 5. 구매 이벤트
        // section-3의 주문 내역에 selectItem을 추가한다.
        // section-3의 주문 내역에 추가한 제품의 총액을 계산한다.
        // section-3의 주문 내역에 추가한 제품의 총액을 화면에 표시한다.
        // section-1의 .get-list에 추가했던 제품을 초기화한다.
        // section-2의 잔액을 계산한다.
        // section-2의 잔액을 화면에 표시한다.
        // section-3의 주문 내역에 추가한 제품을 화면에 표시한다.
        this.btnGet.addEventListener('click', () => {
            console.log('clicked');
            // reduce()를 통해 주문 내역에 추가한 제품의 총액을 계산한다.
        });
    };

    // ? 장바구니 목록 추가 이벤트
    selectItemGenerator(target) {
        const selectItem = document.createElement('li');

        selectItem.innerHTML = `
        <img src="./img/${target.dataset.img}" alt='${target.dataset.item}'>
        ${target.dataset.item}
        <strong>
        1
        <span class="a11y-hidden">개</span>
        </strong>
        `;

        // 만약 제품을 선택하면 selectItem을 추가.
        this.selectList.append(selectItem);

        // 만약 btnGet 이벤트를 실행하면 section-3의 주문 내역에 추가한 제품을 화면에 표시한다.
        //! 뭔가 이상해..!!!!
        if (this.btnGet.addEventListener('click', () => {
            this.orderList.append(selectItem);
        }));
    }
}
export default ColaEvents;