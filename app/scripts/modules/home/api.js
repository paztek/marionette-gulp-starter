'use strict';
var app = require('scripts/application');
var showController = require('./show/controller');

module.exports = {
    showHome: function() {
        showController.showHome();
        app.execute('set:active:header', 'home');
    }
};
