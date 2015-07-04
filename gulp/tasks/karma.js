'use strict';
var config, gulp, karma, hbsfy;

gulp = require('gulp');
karma = require('karma');
hbsfy = require('hbsfy');
config = require('../config');

gulp.task('karma', function() {
    return karma.server.start({
        basePath: process.cwd(),
        frameworks: [
            'mocha',
            'browserify',
            'chai',
            'sinon'],
        runnerPort: config.ports.test,
        singleRun: true,
        browsers: ['PhantomJS'],
        files: [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/underscore/underscore.js',
            'bower_components/backbone/backbone.js',
            'bower_components/marionette/lib/backbone.marionette.js',
            'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
            //'vendor/**/*.js',
            'specs/**/*_spec.js'],
        reporters: ['dots'],
        colors: true,
        preprocessors: {
            'specs/**/*.js': ['browserify']
        },
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-sinon',
            'karma-browserify',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],
        browserify: {
            extensions: ['.js', '.hbs'],
            transform: ['browserify-shim', 'hbsfy'],
            paths: ["./" + config.appDir]
        },
        client: {
            mocha: {
                ui: 'bdd'
            }
        }
    });
});
