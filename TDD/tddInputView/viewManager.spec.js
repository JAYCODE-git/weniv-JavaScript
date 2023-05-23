
// * 0. 테스트를 하기 전에 필요한 재료들에 대해 선언
describe('클릭이벤트가 일어나면 데이터를 가져와서 화면에 표시', () => {
    // * 1. 인자가 잘 전달되는지 확인 테스트 코드로 재현해서 확인
    it('viewManager에 textManager 객체가 잘 전달되는지 확인', () => {
        const textManager = null;
        const btnEl = document.createElement('button');
        const viewerEl = document.createElement('strong');
        const inpTxt = document.createElement('input');


        // viewManager에 textManager 객체가 잘 전달되는지 확인
        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

        // 에러를 던질 때는 .toThrowError를 사용
        expect(actual).toThrowError();

    });

    // * 2. viewManager에 요소들이 인자로 잘 전달되는지 확인
    it('viewManager에 요소들이 인자로 잘 전달되는지 확인', () => {
        const textManager = new TextManager();
        const btnEl = null;
        const viewerEl = null;
        const inpTxt = null;

        const actual = () => new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
        expect(actual).toThrowError();
    });


    // ? 공통 instance 생성
    const btnEl = document.createElement('button');
    const viewerEl = document.createElement('strong');
    const inpTxt = document.createElement('input');
    const textManager = new TextManager();
    const viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpTxt });



    // * 3. click 이벤트가 발생했을 때 changeValue 함수가 실행되는지 확인
    it('click 이벤트가 발생했을 때 changeValue 함수가 실행되는지 확인', () => {

        // spyOn()을 사용해서 changeValue 함수를 감시
        spyOn(viewManager, 'changeValue');
        btnEl.click();

        // toHaveBeenCalled()는 감시하고 있는 함수가 호출된 적이 있는지 확인.
        expect(viewManager.changeValue).toHaveBeenCalled();
    })


    // * 4. changeValue 함수가 실행되고 나서 updateView 함수가 실행되는지 확인
    it('changeValue 함수가 실행되고 나서 updateView 함수가 실행되는지 확인', () => {

        // spyOn()을 사용해서 updateView 함수를 감시
        spyOn(viewManager, 'updateView');
        viewManager.changeValue();

        expect(viewManager.updateView).toHaveBeenCalled();
    });
});
