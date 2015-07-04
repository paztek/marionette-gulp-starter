'use strict';
var gulp, runSequence;

gulp = require('gulp');
runSequence = require('run-sequence');

gulp.task('test', function() {
    return runSequence(['karma']);
});
