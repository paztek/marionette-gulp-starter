'use strict';
var config, del, gulp;

gulp = require('gulp');
del = require('del');
config = require('../config');

gulp.task('clean', function(cb) {
    return del([config.publicDir], cb);
});
