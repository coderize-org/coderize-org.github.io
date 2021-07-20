const gulp = require("gulp");
const data = require("gulp-data");
const stylus = require("gulp-stylus");

gulp.task("styles", function() {
  return gulp
    .src("./_stylus/index.styl")
    .pipe(stylus({compress: true}))
    .pipe(data((file) => ({
      componentPath: "/" + file.path
        .replace(file.base, "")
        .replace(/\/[^/]*$/, "")
      })
    ))
    .pipe(gulp.dest("./assets/styles"));
});
