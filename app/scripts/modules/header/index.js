'use strict';
var app = require('scripts/application');

var displayHeader = function() {
    return console.log('Displaying the header');
};

app.on('start', function() {
    return displayHeader;
});
