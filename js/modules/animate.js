export default class Animate {
  constructor(elements) {
    this.elements = document.querySelectorAll(elements);
  }

  animateElements() {
    this.elements.forEach((element) => {
      const time = Number(element.getAttribute("data-animate"));
      if (!Number.isNaN(time)) {
        setTimeout(() => {
          element.classList.add("animate");
        }, time);
      }
    });
  }

  handleVisibility() {
    if (typeof document.visibilityState !== "undefined") {
      if (document.visibilityState === "visible") {
        this.animateElements();
      }
    } else {
      this.animateElements();
    }
  }

  addEvent() {
    document.addEventListener("visibilitychange", () =>
      this.handleVisibility(),
    );
  }

  init() {
    if (this.elements.length) {
      this.handleVisibility();
      this.addEvent();
    }
    return this;
  }
}
