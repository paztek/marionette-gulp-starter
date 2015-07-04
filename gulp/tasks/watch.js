'use strict';
var config, gulp;

gulp = require('gulp');
config = require('../config');

gulp.task('watch', function() {
    gulp.watch("" + config.appDir + "/stylesheets/**/*.scss", ['stylesheets']);
    return gulp.watch("" + config.appDir + "/images/**/*", ['copy:images']);
    return gulp.watch("" + config.appDir + "/*.html", ['copy:html']);
});
