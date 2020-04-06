"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

sass.compiler = require("node-sass");

// gulp.task('sass', function () {
//   return gulp.src('src/scss/**/*.scss')
//     .pipe(sass().on('error', sass.logError))
//     .pipe(gulp.dest( 'src/css'));
// });
function compile_sass() {
  return gulp
    .src("src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/scss"));
}
function watchSass() {
  return gulp.watch("src/scss/**/*.scss", compile_sass);
}
gulp.task("watch:sass", watchSass);