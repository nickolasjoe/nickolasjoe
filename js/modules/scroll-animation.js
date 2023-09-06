export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.activeClass = "active";
    this.handleObserver = this.handleObserver.bind(this);
    this.options = { threshold: 0.5 };
    this.observer = new IntersectionObserver(this.handleObserver, this.options);
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
    this.sections.forEach((section) => {
      this.observer.observe(section);
    });
  }

  init() {
    if (this.sections.length) this.observeEachSection();
    return this;
  }
}
