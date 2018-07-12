var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('build', ['fonts','icons','images','stylesheets:less']);
