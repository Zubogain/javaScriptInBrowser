document.addEventListener('DOMContentLoaded', () => {
	const TODO = document.getElementsByClassName('list-block')[0];
	const LIST_ITEMS = TODO.getElementsByTagName('ul')[0].getElementsByTagName('li');
	const COUNTER = TODO.getElementsByTagName('output')[0];
	let counter = 0;

	COUNTER.value = count(counter);
	
	for (var i = 0; i < LIST_ITEMS.length; i++) {
		if(LIST_ITEMS[i].getElementsByTagName('input')[0].checked) {
			COUNTER.value = count(++counter);
		}
		LIST_ITEMS[i].getElementsByTagName('input')[0].addEventListener('click', todo)
	}

	function count(number) {
		return `${number} из ${LIST_ITEMS.length}`;
	}

	function todo() {
		(this.checked)? COUNTER.value = count(++counter): COUNTER.value = count(--counter);
		(counter === LIST_ITEMS.length)? TODO.classList.add('complete'): TODO.classList.remove('complete');
	}
});