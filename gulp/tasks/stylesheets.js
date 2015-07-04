'use strict';
var gulp, sass, config, notify, plumber;

gulp = require('gulp');
sass = require('gulp-sass');
plumber = require('gulp-plumber');
notify = require('gulp-notify');
config = require('../config');

/*
gulp.task('stylesheets', function() {
    return gulp.src(config.appDir + "/stylesheets/application.scss")
        //.pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest(config.publicDir));
});
*/

gulp.task('stylesheets', function () {
    gulp.src(config.appDir + '/stylesheets/application.scss')
        .pipe(sass())
        .on('error', notify.onError())
        .pipe(gulp.dest(config.publicDir));
});
