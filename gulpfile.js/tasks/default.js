var gulp = require('gulp');

gulp.task('default',['build','serve']);
gulp.task('package',['build','package:war']);
