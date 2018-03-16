'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const tabs = document.getElementsByClassName('tabs')[0].getElementsByTagName('a');
	const content = document.getElementById('content');
	const preloader = document.getElementById('preloader');

	function getTabContent(link) {
		const request = new XMLHttpRequest();
		request.addEventListener('load', () => {
			content.innerHTML = request.responseText;
			preloader.classList.add('hidden');
		});
		request.addEventListener('loadstart', preloader.classList.remove('hidden'));
		request.open('GET', link, true);
		request.send();
	}

	function currentTab(event) {
		event.preventDefault();
		for (var i = 0; i < tabs.length; i++) {
			tabs[i].classList.remove('active');
		}
		this.classList.add('active');

		getTabContent(this.href);
	}

	for (var i = 0; i < tabs.length; i++) {
		if(tabs[i].classList.contains('active')) {
			preloader.classList.remove('hidden');
			getTabContent(tabs[i].href);
		}
		tabs[i].addEventListener('click', currentTab);
	}
});