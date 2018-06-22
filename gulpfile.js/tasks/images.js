var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var argv = require('yargs').argv;
var config = require('../config.js').images;

gulp.task('images:resize', function () {
    return gulp.src(config.src)
        .pipe($.imagesResizer(config.settings)
            .on('error', $.notify.onError({
                title: 'Image resizer error',
                message: '<%= error.message %>',
                time: 10000,
            }))
        )
        .pipe(gulp.dest(config.dest));
});
