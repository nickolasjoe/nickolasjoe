const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const ts = require("gulp-typescript");
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();

function buildStyles() {
  return gulp
    .src("public/sass/*.scss")
    .pipe(sass({ style: "compressed" }))
    .pipe(concat("style.css"))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.stream());
}
exports.buildStyles = buildStyles;

const tsProject = ts.createProject("tsconfig.json");

function injectScripts() {
  return tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}
exports.injectScripts = injectScripts;

function initBrowserSync() {
  browserSync.init({
    ui: false,
    server: {
      baseDir: "./",
    },
  });
}
exports.initBrowserSync = initBrowserSync;

function watch() {
  gulp.watch("public/sass/*.scss", buildStyles);
  gulp.watch("src/**/*.ts", injectScripts);
  gulp.watch("*.html").on("change", browserSync.reload);
}
exports.watch = watch;

exports.default = gulp.parallel(watch, initBrowserSync, buildStyles, injectScripts);
