const gulp = require("gulp");

gulp.task("watch", function() {
  gulp.watch("_stylus/**/**", ["styles"]);
  gulp.watch("_scripts/**/**", ["scripts"]);
});
