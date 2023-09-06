import Animate from "./js/modules/animate.js";
import CopyToClipboard from "./js/modules/copy-to-clipboard.js";
import ScrollAnimation from "./js/modules/scroll-animation.js";

const animate = new Animate("[data-animate]");
animate.init();

const copyToClipboard = new CopyToClipboard(".email", ".email-address");
copyToClipboard.init();

const scrollAnimation = new ScrollAnimation('[data-animation="on-scroll"]');
scrollAnimation.init();
