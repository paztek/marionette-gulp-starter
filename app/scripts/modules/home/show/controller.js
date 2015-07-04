'use strict';
var app = require('scripts/application');
var Dashboard = require('./views/dashboard');

module.exports = {
    showHome: function() {
        console.log('showing dashboard');
        var dashboard = new Dashboard();
        app.regions.main.show(dashboard);
    }
};
