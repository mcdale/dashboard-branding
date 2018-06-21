var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;
var config = require('../config.js').war;


gulp.task('package:css', function(){
    return gulp.src('./css/**/*')
    .pipe(gulp.dest('./MyViewDashboardBranding/css'));
});


gulp.task('package:images', function(){
    return gulp.src('./images/**/*')
    .pipe(gulp.dest('./MyViewDashboardBranding/images'));
});


gulp.task('package:icons', function(){
    return gulp.src('./icons/**/*')
    .pipe(gulp.dest('./MyViewDashboardBranding/icons'));
});


gulp.task('package:customer', function(){
    return gulp.src('./less/customer/**/*.less')
    .pipe(gulp.dest('./MyViewDashboardBranding/customer'));
});

gulp.task('package:CG001',function(done){
    done();
});

gulp.task('package:CG002',function(done){
    done();
});

gulp.task('package:control-groups',['package:CG001','package:CG002']);

gulp.task('package:war',['package:css','package:images','package:icons','package:customer','package:control-groups'], function () {
    return gulp.src('./MyViewDashboardBranding/**/*')
        .pipe($.zip('MyViewDashboardBranding.war'))
        .pipe(gulp.dest("./dist"));
});
