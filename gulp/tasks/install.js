'use strict';
var gulp, install;

gulp = require('gulp');
install = require('gulp-install');

gulp.task('install', function() {
    return gulp.src(['./bower.json']).pipe(install());
});
