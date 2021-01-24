const hbs = require('hbs');

// hbs Helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});