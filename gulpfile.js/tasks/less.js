var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;
var config = require('../config.js').less;

gulp.task('stylesheets:less', function(){
  return gulp.src(config.src)
    .pipe($.sourcemaps.init())
    .pipe($.less(config.settings)
      .on('error', $.notify.onError({
          title: 'LESS compilation error',
          message: '<%= error.message %>',
          time: 10000,
      })))
      .pipe($.autoprefixer(config.autoprefixer))
      .pipe($.sourcemaps.write('.'))
      .pipe(gulp.dest(config.dest));
});

gulp.task('watch:less', function(){
    gulp.watch('less/**/*.less', ['stylesheets:less']);
});
