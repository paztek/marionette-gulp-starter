'use strict';
var config, gulp;

gulp = require('gulp');
config = require('../config');

gulp.task('copy:images', function() {
    gulp.src(config.appDir + "/images/**/*").pipe(gulp.dest(config.publicDir + "/images/"));
});
