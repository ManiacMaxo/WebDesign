const gulp = require("gulp")
const sass = require("gulp-sass")
const browserSync = require("browser-sync").create()

const style = () => {
    return gulp
        .src("./src/scss/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/css"))

        .pipe(browserSync.stream())
}

exports.watch = () => {
    browserSync.init({
        server: { baseDir: "./src" },
    })
    gulp.watch("./src/scss/**/*.scss", style)
    gulp.watch("./src/*.html").on("change", browserSync.reload)
    gulp.watch("./src/js/**/*.js").on("change", browserSync.reload)
}
