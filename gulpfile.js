var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var pug = require('gulp-pug'); 
var plumber = require('gulp-plumber'); 
var browserSync = require('browser-sync').create();

  dir = {
    src: 'src', 
    dist: './', 
    nm: 'node_modules'
  },
  files = { 
    JS: [
      `${dir.nm}/jquery/dist/jquery.min.js`,
      `${dir.nm}/owl.carousel/dist/owl.carousel.min.js`
    ],
    fonts: [`${dir.nm}/font-awesome/fonts/*.*`],
    statics : [
      `${dir.src}/humans.txt`,
      `${dir.src}/sitemap.xml`
    ]
  },
  imageminOptions = {
    optimizationLevel: 7,
    progressive: true
  };

gulp.task('default', ['html', 'css', 'js'], function() {
    browserSync.init({
        server: `${dir.dist}`
    });
    gulp.watch("src/**/*.js", ['js']).on('change', browserSync.reload);
    gulp.watch("src/scss/**/*.scss", ['css']);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("src/pug/**/*.pug", ['html']);
});

// compila html (Pug)
gulp.task('html', function buildHTML() {
  return gulp.src( `${dir.src}/pug/views/*.pug`)
  .pipe(plumber())
  .pipe(pug({
    pretty:true
  }))
  .pipe(gulp.dest(dir.dist));
});

// compila css (Sass)
gulp.task('css', function(){
   return gulp.src(`${dir.src}/scss/**/*.scss`)
       .pipe(sourcemaps.init({ loadMaps: true }))
       .pipe(plumber())
       .pipe(sass({outputStyle: 'nested'}).on('error', sass.logError)) //expanded, nested, compact, compressed 
       .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
       .pipe(sourcemaps.write('./'))
       .pipe(gulp.dest(`${dir.dist}/css`))
       .pipe(browserSync.stream());
});

// compila main.js 
gulp.task('js', function () {
   gulp.src(`${dir.src}/js/*.js`)
     .pipe(gulp.dest(`${dir.dist}/js`))
     .pipe(uglify())
     .pipe(rename({ extname: '.min.js' }))
     .pipe(gulp.dest(`${dir.dist}/js`))
});

// compila recursos.js
gulp.task('js-recursos', () => {
  gulp
    .src( files.JS  )
    .pipe( concat('recursos.min.js') )
    .pipe( uglify() ) 
    .pipe( gulp.dest(`${dir.dist}/js`) )
});

// compila fuente font-awesome 
gulp.task('fonts', () => {
  gulp
    .src(files.fonts)
    .pipe( gulp.dest(`${dir.dist}/fonts`) );
});

// optimiza imágenes
gulp.task('media', () => {
  gulp.src('./src/img/**/*.{png,jpg,jpeg,gif,svg,ico,webp,mp4,mp3}')
    .pipe(imagemin(imageminOptions))
    .pipe(gulp.dest(`${dir.dist}/img`))
})

// crear archivos estaticos 
gulp.task('statics', () => {
  gulp
    .src(files.statics)
    .pipe( gulp.dest(dir.dist) );
});

gulp.task('files', ['media','fonts','statics','js-recursos']);
