import * as weekdays from './util/weekdays.js';
import './assets/main.css';
import webpackImage from './assets/webpack.svg';

const html = [
    '<ul>',
        '<li>' + weekdays.name(4) + ' is the 4th day of the week',
        '<li>Tuesday is the ' + weekdays.number('Tuesday') + 'th day of the week',
    '</ul>'
].join('');

const main = document.getElementsByTagName('main')[0];
main.innerHTML = html;

const imageEl = document.createElement('img');
imageEl.src = webpackImage;
imageEl.className = 'heading-image';

const h1 = document.getElementsByTagName('h1')[0];
h1.insertBefore(imageEl, h1.firstChild);
