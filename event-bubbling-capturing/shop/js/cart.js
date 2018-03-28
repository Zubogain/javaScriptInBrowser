'use strict';
document.querySelector('.items-list').addEventListener('click', (event) => {
	if(event.target.tagName === 'A') {
		addToCart({ title: event.target.dataset.title, price: event.target.dataset.price });
	}
});