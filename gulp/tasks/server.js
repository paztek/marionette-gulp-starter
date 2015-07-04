'use strict';
var browserSync, config, gulp;

gulp = require('gulp');
browserSync = require('browser-sync');
config = require('../config');

gulp.task('server', function() {
    return browserSync({
        port: config.ports.server,
        open: false,
        notify: false,
        server: {
            baseDir: config.publicDir,
            middleware: []
        },
        files: ["" + config.publicDir + "/**", "!" + config.publicDir + "/**.map"]
    });
});
