
// ? json은 원래 js안에 있던 언어였는데 독립.
let 회원정보 = [
  {
    "_id": "642a6221357d5c1cf602025e",
    "index": 0,
    "age": 26,
    "eyeColor": "brown",
    "name": "Abbott Cain",
    "gender": "male",
    "company": "COMTRAIL"
  },
  {
    "_id": "642a62216f562f9046d85a9c",
    "index": 1,
    "age": 32,
    "eyeColor": "brown",
    "name": "Terri Howe",
    "gender": "female",
    "company": "BOILICON"
  },
  {
    "_id": "642a622177b882aef5647008",
    "index": 2,
    "age": 26,
    "eyeColor": "green",
    "name": "Maggie Navarro",
    "gender": "female",
    "company": "TWIIST"
  },
  {
    "_id": "642a62217063c764cbee7c5b",
    "index": 3,
    "age": 40,
    "eyeColor": "green",
    "name": "Herring Graves",
    "gender": "male",
    "company": "ORBOID"
  },
  {
    "_id": "642a62217fbc1919a40cbce8",
    "index": 4,
    "age": 31,
    "eyeColor": "green",
    "name": "Latasha Mcconnell",
    "gender": "female",
    "company": "SEALOUD"
  },
  {
    "_id": "642a622122e33fa8906f2569",
    "index": 5,
    "age": 25,
    "eyeColor": "green",
    "name": "Tanya Reed",
    "gender": "female",
    "company": "PHOTOBIN"
  }
]

// 배열에서 값 추출
console.log(회원정보[0]['name']);
let 나이평균 = (회원정보[0]['age'] + 회원정보[1]['age'] + 회원정보[2]['age'] + 회원정보[3]['age'] + 회원정보[4]['age'] + 회원정보[5]['age']) / 6;
console.log(나이평균);


// ? Json 쇼쇼쇼
// 이해하려고 하지 말아요~

// * Step 1
fetch('http://test.api.weniv.co.kr/mall')
  .then(data => data.json())
  .then(data => console.log(data))



// * Step 2
fetch('http://test.api.weniv.co.kr/mall')
  .then(data => data.json())
  .then(data => {
    data.forEach(item => {
      console.log(item);
    });
  })


// * Step 3
fetch('http://test.api.weniv.co.kr/mall')
  .then(data => data.json())
  .then(data => {
    data.forEach(item => {
      console.log('http://test.api.weniv.co.kr/' + item['thumbnailImg']);
      console.log('제목 : ' + item['productName']);
      console.log('가격 : ' + item['price']);
    });
  })


// * Stet 4 DOM을 생성하여 화면에 출력되게 해봅시다.
fetch('http://test.api.weniv.co.kr/mall')
  .then(data => data.json())
  .then(data => {
    const main = document.createElement("main")
    data.forEach(item => {
      // console.log('http://test.api.weniv.co.kr/' + item['thumbnailImg']);
      // console.log('제목 : ' + item['productName']);
      // console.log('가격 : ' + item['price']);
      const productCard = document.createElement('article')
      const productImg = document.createElement('img')
      const productName = document.createElement('h2')
      const productPrice = document.createElement('p')

      productName.textContent = item.productName
      productPrice.textContent = item.price
      productImg.setAttribute('src', 'http://test.api.weniv.co.kr/' + item.thumbnailImg)
      productCard.appendChild(productImg)
      productCard.appendChild(productName)
      productCard.appendChild(productPrice)

      main.appendChild(productCard);
    });
    document.body.appendChild(main);
  });