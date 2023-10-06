export default class Animate {
    elements;
    options;
    observer;
    activeClass;
    sectionElements;
    headingElement;
    constructor(elements) {
        this.elements = [...document.querySelectorAll(elements)];
        this.handleVisibility = this.handleVisibility.bind(this);
        this.handleObserver = this.handleObserver.bind(this);
        this.options = { threshold: 0.5 };
        this.observer = new IntersectionObserver(this.handleObserver, this.options);
        this.activeClass = "active";
    }
    filterElements() {
        this.sectionElements = this.elements.filter((el) => el.getAttribute("data-animate") === "section");
        this.headingElement = this.elements
            .filter((el) => el.getAttribute("data-animate") === "heading")
            .shift();
    }
    handleObserver(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add(this.activeClass);
                this.observer.unobserve(entry.target);
            }
        });
    }
    observeEachSection() {
        if (this.sectionElements)
            this.sectionElements.forEach((section) => {
                this.observer.observe(section);
            });
    }
    animateHeadingElement() {
        setTimeout(() => {
            if (this.headingElement)
                this.headingElement.classList.add(this.activeClass);
        }, 500);
    }
    handleVisibility() {
        if (typeof document.visibilityState !== "undefined") {
            if (document.visibilityState === "visible") {
                this.animateHeadingElement();
            }
        }
        else {
            this.animateHeadingElement();
        }
    }
    addEvent() {
        document.addEventListener("visibilitychange", this.handleVisibility);
    }
    init() {
        if (this.elements.length)
            this.filterElements();
        if (this.headingElement) {
            this.handleVisibility();
            this.addEvent();
        }
        if (this.sectionElements && this.sectionElements.length)
            this.observeEachSection();
        return this;
    }
}
//# sourceMappingURL=animate.js.map