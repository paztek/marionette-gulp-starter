'use strict';
var RegionContainer = Marionette.LayoutView.extend({
    el: '#app',
    regions: {
        header: '#header',
        main: '#main',
        footer: '#footer'
    }
});

module.exports = new RegionContainer();
