// Classical Javascript Module, return-based
// weekDay.js
this.weekDay = (function (_) {
    var names = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ];

    return {
        name: function(number) {
            return names[number - 1];
        },

        number: function(name) {
            return _.indexOf(array, name) + 1;
        },
    };
})(this._);

// Usage
var weekDay = this.weekDay;
weekDay.name(1);
weekDay.number('Monday');


// Classical Javascript Module with exports object
// weekDay.js
(function (exports, _) {
    var names = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ];

    exports.name = function(number) {
        return names[number - 1];
    };

    exports.number = function(name) {
        return _.indexOf(array, name) + 1;
    };
})(this.weekDay = {}, this._);

// Usage
var weekDay = this.weekDay;
weekDay.name(1);
weekDay.number('Monday');


// AMD Module
// weekDay.js
define(['underscore'], function(_) {
    var names = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday', 'Saturday'
    ];

    return {
        name: function(number) {
            return names[number - 1];
        },

        number: function(name) {
            return _.indexOf(array, name) + 1;
        },
    };
});

// Usage:
require(['weekDay'], function (weekDay) {
    weekDay.name(1);
    weekDay.number('Monday');
});


// CommonJS Module
// weekDay.js
var _ = require('underscore');
var names = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
];

exports.name = function(number) {
    return names[number - 1];
};

exports.number = function(name) {
    return _.indexOf(array, name) + 1;
};

// Usage:
var weekDay = require('weekDay');
weekDay.name(1);
weekDay.number('Monday');


// ES6 Module
// weekDay.js
import _ from 'underscore';
var names = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday'
];

export function name(number) {
    return names[number - 1];
}

export function number(name) {
    return _.indexOf(array, name) + 1;
}

// Usage:
import * as weekDay from 'weekDay';
weekDay.name(1);
weekDay.number('Monday');
