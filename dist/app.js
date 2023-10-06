import Animate from "./modules/animate.js";
import CopyToClipboard from "./modules/copy-to-clipboard.js";
const animate = new Animate("[data-animate]");
animate.init();
const copyToClipboard = new CopyToClipboard(".email-container", ".email-address");
copyToClipboard.init();
//# sourceMappingURL=app.js.map