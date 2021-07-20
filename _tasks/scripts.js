const gulp = require("gulp");
const browserify = require("browserify");
const uglify = require("gulp-uglify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const babelify = require("babelify");

gulp.task("scripts", function() {
  return browserify({ entries: "_scripts/index.js" })
    .transform(babelify, { presets: ["env"] })
    .bundle()
    .on("error", err => console.log("Browserify Error", err.message))
    .pipe(source("index.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("./assets/scripts"));
});
