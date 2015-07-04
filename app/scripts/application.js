'use strict';
var app = new Marionette.Application();

app.navigate = function(route, options) {
    if (options === null) {
        options = {};
    }
    return Backbone.history.navigate(route, options);
};

app.on('before:start', function() {
    this.regions = require('scripts/regions');
});

app.on('before:start', function() {
    // Load all the modules
    require('scripts/modules/header');
    require('scripts/modules/home');
});

app.on('start', function() {
    if (Backbone.history) {
        Backbone.history.start();
    }
    return console.log('App started!');
});

module.exports = app;
