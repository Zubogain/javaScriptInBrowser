document.addEventListener('DOMContentLoaded', () => {
	const NAVIGATE = document.getElementsByClassName('slider-nav')[0].getElementsByTagName('a');
	const SLIDES = document.querySelectorAll('.slides > .slide');
	let counter = 0;

	SLIDES[counter].classList.add('slide-current');
	isFirst();

	for (var i = 0; i < NAVIGATE.length; i++) {
		switch(NAVIGATE[i].getAttribute('data-action')) {
			case 'next':
				NAVIGATE[i].addEventListener('click', next);
				NAVIGATE[i].addEventListener('click', isLast);
				break;
			case 'prev':
				NAVIGATE[i].addEventListener('click', prev);
				NAVIGATE[i].addEventListener('click', isFirst);
				break;
			case 'first':
				NAVIGATE[i].addEventListener('click', first);
				NAVIGATE[i].addEventListener('click', isFirst);
				break;
			case 'last':
				NAVIGATE[i].addEventListener('click', last);
				NAVIGATE[i].addEventListener('click', isLast);
				break;
		}
	}

	function next() {
		if(counter < SLIDES.length - 1) {
			const nextNeighbor = SLIDES[counter++].nextElementSibling;
			const prevNeighbor = SLIDES[counter].previousElementSibling;
			prevNeighbor.classList.remove('slide-current');
			nextNeighbor.classList.add('slide-current');
		}
	}

	function prev() {
		if(counter > 0) {
			const prevNeighbor = SLIDES[counter--].previousElementSibling;
			const nextNeighbor = SLIDES[counter].nextElementSibling;
			nextNeighbor.classList.remove('slide-current');
			prevNeighbor.classList.add('slide-current');
		}
	}

	function last() {
		if(counter < SLIDES.length - 1) {
			counter = SLIDES.length - 1;
			for (var i = 0; i < SLIDES.length; i++) {
				SLIDES[i].classList.remove('slide-current');
			}
			SLIDES[counter].classList.add('slide-current');
		}
	}

	function first() {
		if(counter > 0) {
			counter = 0;
			for (var i = 0; i < SLIDES.length; i++) {
				SLIDES[i].classList.remove('slide-current');
			}
			SLIDES[counter].classList.add('slide-current');
		}
	}

	function isLast() {
		for (var i = 0; i < NAVIGATE.length; i++) {
			switch(NAVIGATE[i].getAttribute('data-action')) {
				case 'next':
				case 'last':
					counter === SLIDES.length - 1 && NAVIGATE[i].classList.add('disabled');
					break;
				case 'prev':
				case 'first':
					NAVIGATE[i].classList.remove('disabled');
					break;
			}
		}
	}

	function isFirst() {
		for (var i = 0; i < NAVIGATE.length; i++) {
			switch(NAVIGATE[i].getAttribute('data-action')) {
				case 'prev':
				case 'first':
					counter === 0 && NAVIGATE[i].classList.add('disabled');
					break;
				case 'next':
				case 'last':
					NAVIGATE[i].classList.remove('disabled');
					break;
			}
		}
	}
});