'use strict';
require('marionette');
require('bootstrap');

var app = require('scripts/application');

$(function() {
    return app.start();
});
