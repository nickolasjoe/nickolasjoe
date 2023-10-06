const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();

function buildStyles() {
  return gulp
    .src("public/sass/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
}
exports.buildStyles = buildStyles;

function injectScripts() {
  return gulp.src("dist/app.js").pipe(browserSync.stream());
}
exports.injectScripts = injectScripts;

function initBrowserSync() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
}
exports.initBrowserSync = initBrowserSync;

function watch() {
  gulp.watch("public/sass/*.scss", buildStyles);
  gulp.watch("dist/app.js", injectScripts);
  gulp.watch("*.html").on("change", browserSync.reload);
}
exports.watch = watch;

exports.default = gulp.parallel(
  watch,
  initBrowserSync,
  buildStyles,
  injectScripts,
);
