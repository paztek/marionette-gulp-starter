'use strict';
var config, gulp;

gulp = require('gulp');
config = require('../config');

gulp.task('copy:fonts', function() {
    gulp.src(config.bowerDir + "/bootstrap-sass-official/assets/fonts/**/*").pipe(gulp.dest(config.publicDir + "/fonts/"));
    gulp.src(config.bowerDir + "/fontawesome/fonts/**/*").pipe(gulp.dest(config.publicDir + "/fonts/"));
});
