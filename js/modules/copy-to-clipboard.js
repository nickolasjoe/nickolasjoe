export default class CopyToClipboard {
  constructor(elementContainer, element) {
    this.elementContainer = document.querySelector(elementContainer);
    if (this.elementContainer)
      this.element = this.elementContainer.querySelector(element);
  }

  handleClick() {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(this.elementContainer);
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand("copy");
    selection.removeAllRanges();

    this.element.dataset.status = "Copied!";

    setTimeout(() => {
      this.element.dataset.status = "Click to Copy!";
    }, 1200);
  }

  addClickEvent() {
    this.elementContainer.addEventListener("click", () => this.handleClick());
  }

  init() {
    if (this.elementContainer) this.addClickEvent();
    return this;
  }
}
