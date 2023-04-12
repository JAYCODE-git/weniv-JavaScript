
console.warn('생성자 함수');
// ? 생성자 함수

let book = {
    name: "JavaScript",
    price: 1000,
    writer: "Jay",
    date: "2023-04-12"
};

let newBook = {}

// form에서 입력 받았습니다.
newBook['name'] = "JavaScript";
newBook['price'] = 1000;
newBook['writer'] = "Jay";
newBook['date'] = "2023-04-12";

function Book(name, price, writer, date) {
    this.name = name;
    this.price = price;
    this.writer = writer;
    this.date = date;
};

// new 키워드를 사용하지 않으면 this는 window를 가리킨다.
let newBook2 = Book('JavaScript', 1000, 'Jay', '2023-04-12');

// new 키워드를 사용해서 this를 빈 객체로 만들어준 뒤 arguments를 넣어준 다음 return this를 실행.
let newBook3 = new Book('JavaScript', 1000, 'Jay', '2023-04-12');