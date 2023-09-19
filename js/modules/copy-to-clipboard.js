export default class CopyToClipboard {
  constructor(container, element) {
    this.container = document.querySelector(container);
    if (this.container) this.element = this.container.querySelector(element);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(this.container);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand("copy");
    selection.removeAllRanges();

    this.element.dataset.status = "Copied!";

    setTimeout(() => {
      this.element.dataset.status = "Click to Copy!";
    }, 1200);
  }

  addEvent() {
    this.container.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.container) this.addEvent();
    return this;
  }
}
