'use scrict';

var gulp = require("gulp");
    sass = require("gulp-sass");
    watch = require("gulp-watch");

gulp.task("sassCompiler", function() {
    gulp.src("./scss/*.scss")
        .pipe(sass.sync())
        .pipe(gulp.dest("./css/"));
});

gulp.task("watchSass",function() {
    gulp.watch("./scss/*.scss", ["sassCompiler"]);
});


