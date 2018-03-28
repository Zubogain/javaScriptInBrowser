document.addEventListener('DOMContentLoaded', () => {
	new Slider(document.querySelector('.slider')).start();
});

class Slider {
	constructor(main) {
		this.main = main;
		this.controls = this.main.querySelectorAll('.slider-nav > a');
		this.slides = this.main.querySelectorAll('.slides .slide');
		this.counter = 0;
	}

	get slidesLength() {
		return this.slides.length - 1;
	}

	get controlsLength() {
		return this.controls.length - 1;
	}

	next() {
		if(this.counter < this.slidesLength) {
			this.slides[this.counter++].nextElementSibling.classList.add('slide-current');
			this.slides[this.counter].previousElementSibling.classList.remove('slide-current');
		}
	}

	prev() {
		if(this.counter > 0) {
			this.slides[this.counter--].previousElementSibling.classList.add('slide-current');
			this.slides[this.counter].nextElementSibling.classList.remove('slide-current');
		}
	}

	last() {
		if(this.counter < this.slidesLength) {
			this.counter = this.slidesLength;
			for (let i = 0; i <= this.slidesLength; i++) {
				this.slides[i].classList.remove('slide-current');
			}
			this.slides[this.counter].classList.add('slide-current');
		}
	}

	first() {
		if(this.counter > 0) {
			this.counter = 0;
			for (let i = 0; i <= this.slidesLength; i++) {
				this.slides[i].classList.remove('slide-current');
			}
			this.slides[this.counter].classList.add('slide-current');
		}
	}

	isLast() {
		for (let i = 0; i <= this.controlsLength; i++) {
			switch(this.controls[i].getAttribute('data-action')) {
				case 'next':
				case 'last':
					this.counter === this.slidesLength && this.controls[i].classList.add('disabled');
					break;
				case 'prev':
				case 'first':
					this.controls[i].classList.contains('disabled') && this.controls[i].classList.remove('disabled');
					break;
			}
		}
	}

	isFirst() {
		for (let i = 0; i <= this.controlsLength; i++) {
			switch(this.controls[i].getAttribute('data-action')) {
				case 'prev':
				case 'first':
					this.counter === 0 && this.controls[i].classList.add('disabled');
					break;
				case 'next':
				case 'last':
					this.controls[i].classList.contains('disabled') && this.controls[i].classList.remove('disabled');
					break;
			}
		}
	}

	start() {
		this.slides[this.counter].classList.add('slide-current');
		this.isFirst();

		for (let i = 0; i <= this.controlsLength; i++) {
			switch(this.controls[i].getAttribute('data-action')) {
				case 'next':
					this.controls[i].addEventListener('click', this.next.bind(this));
					this.controls[i].addEventListener('click', this.isLast.bind(this));
					break;
				case 'prev':
					this.controls[i].addEventListener('click', this.prev.bind(this));
					this.controls[i].addEventListener('click', this.isFirst.bind(this));
					break;
				case 'first':
					this.controls[i].addEventListener('click', this.first.bind(this));
					this.controls[i].addEventListener('click', this.isFirst.bind(this));
					break;
				case 'last':
					this.controls[i].addEventListener('click', this.last.bind(this));
					this.controls[i].addEventListener('click', this.isLast.bind(this));
					break;
			}
		}
	}
}