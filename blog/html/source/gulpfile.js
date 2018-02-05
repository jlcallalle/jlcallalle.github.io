const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const cache = require('gulp-cache');
const rename = require('gulp-rename');
const combineMq = require('gulp-combine-mq');
const watch = require('gulp-watch');

gulp.task('images', function() {
    return gulp.src('images/**')
        .pipe(cache(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('../site/images'));
});

gulp.task('clear-cache', function(done){
    return cache.clearAll(done);
});

gulp.task('copy-fonts', function(){ 
    return gulp.src('fonts/**/*')
        .pipe(gulp.dest('../site/fonts/'));
});

gulp.task('combineMq', function () {
    return gulp.src('../site/css/main.css')
    .pipe(combineMq({
        beautify: false
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('../site/css/'));
});

gulp.task('watch', function () {
    gulp.watch('../site/css/main.css', ['combineMq']);
    gulp.watch('images/**', ['images']);
});