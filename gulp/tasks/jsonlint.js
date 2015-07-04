'use strict';
var config, gulp, jsonlint;

gulp = require('gulp');
jsonlint = require('gulp-jsonlint');
config = require('../config');

gulp.task('jsonlint', function() {
    return gulp.src(["" + config.mocksDir + "/**/*.json", "" + config.appDir + "/config/environments/*.json"]).pipe(jsonlint()).pipe(jsonlint.reporter());
});
