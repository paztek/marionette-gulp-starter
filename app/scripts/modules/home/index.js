'use strict';
var app = require('scripts/application');
var Router = require('./router');
var api = require('./api');

app.on('home:show', function() {
    app.navigate('');
    api.showHome();
});

new Router({
    controller: api
});
