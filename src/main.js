import * as weekdays from './util/weekdays.js';

const html = [
    '<ul>',
        '<li>' + weekdays.name(4) + ' is the 4th day of the week',
        '<li>Tuesday is the ' + weekdays.number('Tuesday') + 'th day of the week',
    '</ul>'
].join('');

const main = document.getElementsByTagName('main')[0];
main.innerHTML = html;
