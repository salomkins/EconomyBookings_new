var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");
var notify = require("gulp-notify");
var sass = require("gulp-ruby-sass");
var gcmq = require('gulp-group-css-media-queries');
var browserSync = require('browser-sync').create();

var sassSrcPath = "src/scss/**/*.scss";
var sassDestPath = "dist/css";

gulp.task("sass", function () {
   return sass(sassSrcPath)
       .pipe(autoprefixer("last 100 version"))
       .pipe(gcmq())
       .pipe(gulp.dest(sassDestPath))
       .pipe(browserSync.stream())
       .pipe(notify({ message: "All done!"}));
});

gulp.task("watch", ["sass"], function () {
    browserSync.init({
        server: "dist"
    });
    gulp.watch(sassSrcPath, ["sass"]);
    gulp.watch("dist/**/*.html").on("change", browserSync.reload);
});

gulp.task("default", ["watch"]);