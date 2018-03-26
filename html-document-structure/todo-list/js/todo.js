document.addEventListener('DOMContentLoaded', () => {
	const MAIN = document.getElementsByClassName('todo-list')[0];
	const DONE = MAIN.querySelectorAll('.done > label > input');
	const UNDONE = MAIN.querySelectorAll('.undone > label > input');

	for (var i = 0; i < UNDONE.length; i++) {
		UNDONE[i].addEventListener('click', done);
	}

	for (var i = 0; i < DONE.length; i++) {
		DONE[i].addEventListener('click', undone);
	}

	function done() {
		MAIN.querySelector('.done').appendChild(this.parentElement);
		this.removeEventListener('click', done);
		this.addEventListener('click', undone);
		this.setAttribute('checked', '');
	}

	function undone() {
		MAIN.querySelector('.undone').appendChild(this.parentElement);
		this.removeEventListener('click', undone);
		this.addEventListener('click', done);
		this.removeAttribute('checked');
	}
})