const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// const browserSync = require('browser-sync').create();
const livereload = require('gulp-livereload');



function styles() {
    return src('scss/style.scss')
    .pipe(sass())
    .pipe(dest('css/'))
    // .pipe(browserSync.stream(true))
      .pipe(livereload());

}

function watching () {
    watch(['scss/**/*.scss'], styles);
}
exports.styles = styles;
exports.watching = watching;