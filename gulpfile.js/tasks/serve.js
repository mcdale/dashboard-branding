var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

gulp.task('serve', ['watch:less'], function(){

  browserSync.init({
    server: '.',
    index: 'styling.html',
  });

  gulp.watch('css/**/*.css').on('change', browserSync.reload);
});
