export default class CopyToClipboard {
    container;
    element;
    constructor(container, element) {
        this.container = document.querySelector(container);
        if (this.container)
            this.element = this.container.querySelector(element);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const selection = window.getSelection();
        const range = document.createRange();
        if (this.container)
            range.selectNodeContents(this.container);
        if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
            document.execCommand("copy");
            selection.removeAllRanges();
        }
        if (this.element)
            this.element.dataset.status = "Copied!";
        setTimeout(() => {
            if (this.element)
                this.element.dataset.status = "Click to Copy!";
        }, 1200);
    }
    addEvent() {
        if (this.container)
            this.container.addEventListener("click", this.handleClick);
    }
    init() {
        this.addEvent();
        return this;
    }
}
//# sourceMappingURL=copy-to-clipboard.js.map