'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const content = document.getElementsByClassName('contentform')[0];
	const buttonContent = content.getElementsByClassName('button-contact')[0];
	const labels = content.getElementsByTagName('label');
	const message = document.getElementById('output');
	const messageOutputs = message.getElementsByTagName('output');
	const buttonMessage = message.getElementsByClassName('button-contact')[0];

	for (let i = 0; i < labels.length; i++) {
		labels[i].addEventListener('input', checkForm);
	}

	function checkForm() {
		let input = this.getElementsByTagName('input')[0];
		if(this.getElementsByTagName('textarea')[0]) {
			input = this.getElementsByTagName('textarea')[0];
		}

		switch(input.name) {
			case 'zip':
				input.value = input.value.replace(/\D+/, '');
				break;
		}

		for (let i = 0; i < labels.length; i++) {
			let input = labels[i].getElementsByTagName('input')[0];
			if(labels[i].getElementsByTagName('textarea')[0]) {
				input = labels[i].getElementsByTagName('textarea')[0];
			}
			if(!input.value) {
				buttonContent.disabled = true;
				return;
			}
		}

		if(buttonContent.disabled) {
			buttonContent.disabled = !buttonContent.disabled;
			buttonContent.addEventListener('click', peopleMessage);
		}
	}

	function peopleMessage(event) {
		event.preventDefault();
		content.classList.add('hidden');
		message.classList.remove('hidden');
		buttonMessage.addEventListener('click', editMessage);

		for (let i = 0; i < labels.length; i++) {
			let input = labels[i].getElementsByTagName('input')[0];
			if(labels[i].getElementsByTagName('textarea')[0]) {
				input = labels[i].getElementsByTagName('textarea')[0];
			}
			for (let j = 0; j < messageOutputs.length; j++) {
				if (messageOutputs[j].id === input.name) {
					messageOutputs[j].value = input.value;
				}
			}
		}
	}

	function editMessage(event) {
		event.preventDefault();
		content.classList.remove('hidden');
		message.classList.add('hidden');

		for (let i = 0; i < labels.length; i++) {
			let input = labels[i].getElementsByTagName('input')[0];
			if(labels[i].getElementsByTagName('textarea')[0]) {
				input = labels[i].getElementsByTagName('textarea')[0];
			}
			for (let j = 0; j < messageOutputs.length; j++) {
				if (messageOutputs[j].id === input.name) {
					input.value = messageOutputs[j].value;
				}
			}
		}
	}
});