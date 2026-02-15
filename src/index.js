const _ = require('lodash');
require('./style.css');
const icon = require('./latte1.jpg');

const component = () => {
	const element = document.createElement('div');
	element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
	element.classList.add('hello');

	const myImage = new Image();
	myImage.src = icon;
	element.appendChild(myImage);

	return element;
};

document.body.appendChild(component());
