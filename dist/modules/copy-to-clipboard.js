export default class CopyToClipboard {
    container;
    element;
    constructor(container, element) {
        this.container = document.querySelector(container);
        if (this.container)
            this.element = this.container.querySelector(element);
        this.handleClick = this.handleClick.bind(this);
    }
    async handleClick() {
        if (!this.container)
            return;
        try {
            await navigator.clipboard.writeText(this.container.innerText);
        }
        catch {
            return;
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
