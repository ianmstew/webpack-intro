var _ = require('../lib/underscore');
var NAMES = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

module.exports = {
    name: function(number) {
        return NAMES[number - 1];
    },

    number: function(name) {
        return _.indexOf(NAMES, name) + 1;
    },
};
