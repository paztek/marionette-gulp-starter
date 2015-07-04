'use strict';
var app = require('scripts/application');

describe('Application', function() {
    it('should be defined', function() {
        expect(app).to.be.instanceof(Marionette.Application)
    });
});
