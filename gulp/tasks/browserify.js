'use strict';
var browserify, browserifyShim, config, entryPoint, gulp, hbsfy, notify, rename, transform, watchify;

gulp = require('gulp');
rename = require('gulp-rename');
transform = require('vinyl-transform');
browserify = require('browserify');
browserifyShim = require('browserify-shim');
hbsfy = require('hbsfy');
watchify = require('watchify');
notify = require('gulp-notify');
config = require('../config');

entryPoint = "./" + config.appDir + "/scripts/main.js";

gulp.task('browserify', function() {
    var bundle, bundler;
    bundler = browserify({
        cache: {},
        packageCache: {},
        fullPaths: false,
        debug: true,
        extensions: ['.js', '.hbs'],
        paths: ["./" + config.appDir],
        entries: entryPoint
    }).transform(browserifyShim).transform(hbsfy);
    bundle = function() {
        var bundleTransform;
        bundleTransform = transform(function(filename) {
            return bundler.bundle();
        });
        return gulp.src(entryPoint).pipe(bundleTransform).on('error', notify.onError()).pipe(rename('application.js')).pipe(gulp.dest(config.publicDir));
    };
    watchify(bundler).on('update', bundle);
    return bundle();
});
