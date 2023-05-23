class TextManager {
    constructor() {
        this.value = { data: "HELLO LIONS!" }
    }
    getValue() {
        return this.value.data
    }

    setValue(newValue) {
        this.value = newValue;
    }
}
