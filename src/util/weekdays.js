import _ from '../lib/underscore';
var NAMES = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

export function name(number) {
    return NAMES[number - 1];
}

export function number(name) {
    return _.indexOf(NAMES, name) + 1;
}
