'use strict';
var config, gulp;

gulp = require('gulp');
config = require('../config');

gulp.task('copy:html', function() {
    gulp.src(config.appDir + "/*.html").pipe(gulp.dest(config.publicDir));
});
