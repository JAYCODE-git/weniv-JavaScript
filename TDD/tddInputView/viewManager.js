class ViewManager {
    constructor(textManager, options) {
        if (textManager.constructor !== TextManager) {
            throw new Error("textManager 객체 전달 오류");
        }

        if (!options.btnEl || !options.viewerEl || !options.inpTxt) {
            throw new Error("전달 받지 못한 요소 발생.")
        }

        this.textManager = textManager;
        this.inpTxt = options.inpTxt;
        this.viewerEl = options.viewerEl;
        // this.btnEl = options.btnEl;

        options.btnEl.addEventListener('click', () => {
            this.changeValue();
        })
    }

    changeValue() {
        this.textManager.setValue({ data: this.inpTxt.value });
        this.updateView();
    }

    updateView() {
        this.viewerEl.textContent = this.textManager.getValue();
    }
}