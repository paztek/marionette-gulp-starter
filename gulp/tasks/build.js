'use strict';
var gulp, runSequence;

gulp = require('gulp');
runSequence = require('run-sequence');

gulp.task('build', function() {
    return runSequence('install', 'clean', ['copy:html', 'copy:images', 'copy:fonts', 'stylesheets', 'jsonlint', 'jslint'], 'browserify', 'server', 'watch');
});
