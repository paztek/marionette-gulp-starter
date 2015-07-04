'use strict';
var jshint, gulp, config;

jshint = require('gulp-jshint');
gulp = require('gulp');
config = require('../config');

gulp.task('jslint', function() {
    return gulp.src(config.appDir + "/scripts/**/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
