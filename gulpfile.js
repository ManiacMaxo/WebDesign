const gulp = require("gulp")
const sass = require("gulp-sass")
const browserSync = require("browser-sync").create()

// sass to css
const style = () => {
    return gulp
        .src("./src/sass/**/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("./src/css"))
        .pipe(browserSync.stream())
}

// start server, watch files for changes
exports.watch = () => {
    browserSync.init({
        server: { baseDir: "./src" },
    })
    gulp.watch("./src/sass/**/*.sass", style) // on change update css
    gulp.watch("./src/*.html").on("change", browserSync.reload)
    gulp.watch("./src/js/**/*.js").on("change", browserSync.reload)
}
