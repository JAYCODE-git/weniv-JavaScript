class ColaGenerator {
    constructor() {
        this.itemList = document.querySelector('.section1 .cola-list');
    }

    // * 1. response에 render()의 return값을 넣어준다.
    async setUp() {
        const response = await this.render();
        this.setCola(response);
    }

    // * 2. items.json를 가져오는 함수, try catch문으로 예외처리
    async render() {
        try {
            const response = await fetch('items.json');
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        } catch {
            console.log(error);
        }
    }

    // * 3. 가져온 items.json을 화면에 뿌려주는 setCola 함수
    setCola(data) {
        const frag = document.createDocumentFragment();
        data.forEach(el => {
            const colaBtns = document.createElement('button');
            colaBtns.setAttribute('class', 'btn-cola');
            colaBtns.setAttribute('type', 'button');
            colaBtns.setAttribute('data-item', el.name);
            colaBtns.setAttribute('data-count', el.count);
            colaBtns.setAttribute('data-price', el.cost);
            colaBtns.setAttribute('data-img', el.img);

            const itemTemplate = `
                <img class="cola-img" src="./img/${el.img}" alt="${el.name}">
                <span class="cola-name">${el.name}</span>
                <strong class="cola-price">${el.cost}원</strong>
            `
            colaBtns.innerHTML = itemTemplate;
            frag.append(colaBtns);
        });
        this.itemList.append(frag);
    }
}


export default ColaGenerator;