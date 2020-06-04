const gulp = require("gulp")
const sass = require("gulp-sass")
const browserSync = require("browser-sync").create()

// sass to css
const style = () => {
    return gulp
        .src("./sass/**/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream())
}

// start server, watch files for changes
exports.watch = () => {
    browserSync.init({
        server: { baseDir: "." },
    })
    style() // for first open
    gulp.watch("./sass/**/*.sass", style) // on change update css
    gulp.watch("./*.html").on("change", browserSync.reload)
    gulp.watch("./js/**/*.js").on("change", browserSync.reload)
}
