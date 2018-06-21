var gulp = require('gulp');

gulp.task('default',['build','serve']);
gulp.task('package',['package:war']);
